#!/bin/sh
UUID=${UUID:-'030d4004-2d1d-4b82-831d-99b213036133'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
