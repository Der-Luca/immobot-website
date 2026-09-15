#!/bin/sh
set -eu
umask 022

DEPLOY_ROOT=/srv/immobot/services/website
RELEASE_ID="$(date -u +%Y%m%d%H%M%S)"
RELEASE_DIR="$DEPLOY_ROOT/releases/$RELEASE_ID"
STAGING_DIR="$DEPLOY_ROOT/releases/.staging-$RELEASE_ID"

cleanup() {
  if [ -d "$STAGING_DIR" ]; then
    rm -rf "$STAGING_DIR"
  fi
}
trap cleanup EXIT INT TERM

mkdir -p "$STAGING_DIR"
tar -xzf - -C "$STAGING_DIR"

# The archive may preserve restrictive permissions from a developer machine.
find "$STAGING_DIR" -type d -exec chmod 755 {} +
find "$STAGING_DIR" -type f -exec chmod 644 {} +

if [ ! -f "$STAGING_DIR/index.html" ]; then
  echo "Deployment rejected: index.html is missing" >&2
  exit 1
fi

mv "$STAGING_DIR" "$RELEASE_DIR"
ln -sfn "releases/$RELEASE_ID" "$DEPLOY_ROOT/current"

# Keep the current release plus the four previous releases for quick rollback.
find "$DEPLOY_ROOT/releases" -mindepth 1 -maxdepth 1 -type d ! -name '.*' \
  -printf '%T@ %p\n' | sort -nr | awk 'NR > 5 { sub(/^[^ ]+ /, ""); print }' | \
  while IFS= read -r old_release; do
    rm -rf "$old_release"
  done

echo "Activated website release $RELEASE_ID"
