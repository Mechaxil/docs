---
slug: /smart-ag/firmware
title: Firmware
sidebar_position: 6
---
<!-- docs/smart-ag/firmware.md -->


# Firmware

This page is a placeholder linking to the firmware repo and files. Add code under `firmware/` and reference here.

## Suggested structure
```
firmware/
  ├─ pico/
  │   ├─ main.py (MicroPython) or main.c (C SDK)
  │   ├─ libs/
  │   └─ README.md
  └─ esp32/
      ├─ telemetry.py or main.c
      └─ README.md
```

## Pico responsibilities
- Read SOILCAP analog values, apply calibration
- Drive MOSFET to open/close solenoid
- Manage RTC schedule and sleep/wake for low power
- Local logging to SD (or circular buffer)
- Publish minimal state to ESP32 for telemetry or accept commands

## ESP32 responsibilities
- Connect to Wi-Fi and publish telemetry (MQTT/HTTP)
- Receive OTA updates and remote config
- Simple web dashboard or bridge to cloud services

## Safety & OTA
- Use signed/verified firmware where possible for OTA
- Implement watchdog and safe boot fallback

**TODO:** Add `firmware/pico/main.py` and `firmware/esp32/example_mqtt.py` placeholders.

---
