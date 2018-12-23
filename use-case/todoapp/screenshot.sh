#!/usr/bin/env bash

declare projectDir=$(git rev-parse --show-toplevel);
declare currentDir=$(pwd)
declare screenshotDevTools="${projectDir}/tools/applescript/lib/src/screenshot-dev-tools.js";
declare screenshot="${projectDir}/tools/applescript/lib/src/screenshot.js";
declare launchFirefox="${projectDir}/tools/applescript/lib/src/launch-firefox.js";
declare screenshotOnly="${projectDir}/tools/applescript/lib/src/screenshot-only.js";

# entry-pointのスクショ
mkdir -p "${currentDir}/entrypoint/img/"
node "${screenshotDevTools}" --url "http://localhost:3000/entrypoint/first-entry/" --output "${currentDir}/entrypoint/img/first-entry.png"
