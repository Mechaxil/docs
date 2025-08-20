---
slug: /solar/firmware
title: Firmware
sidebar_position: 6
---

<!-- docs/solar/firmware.md -->


# Firmware (placeholder)

This project separates **local control** (Raspberry Pi Pico) and **telemetry** (ESP32-C3). Add code in `firmware/` and link here.

## Pico (local control)
- Responsibilities: read sensors, control loads (solenoid/pump), low-power sleep, RTC scheduling, safety cutoff on low battery.
- Suggested: MicroPython for quick prototyping; C SDK for production performance.

**TODO:** add `firmware/pico/main.py` and API docs.

## ESP32-C3 (telemetry)
- Responsibilities: MQTT/HTTP telemetry, OTA updates, remote dashboard.

**TODO:** add `firmware/esp32/README.md` and sample code.
