#!/bin/bash

command_exists() {
    command -v "$1" >/dev/null 2>&1
}

if command_exists openvpn; then
    echo "CA is present on the system."
else
    echo "CA is not installed on the system."
fi
