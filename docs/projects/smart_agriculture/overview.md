---
slug: /smart-ag/overview
title: Overview
sidebar_position: 1
---
<!-- docs/smart-ag/overview.md -->


# Smart Agriculture — Overview

A low-power, field-ready irrigation and monitoring controller. Uses a Raspberry Pi Pico for local control, an ESP32-C3 for telemetry/OTA, capacitive soil moisture sensing, and a 12V solenoid valve to control water. Designed to run from a small solar + 18650 battery system (see Solar Project docs).

**Goals**
- Automatic, moisture-based irrigation with scheduling
- Local fail-safe behavior (valve closes on comms loss or critical battery)
- Low-power operation with accurate sensor calibration
- Simple telemetry (MQTT/HTTP) and OTA updates via ESP32-C3

**Warnings**
- Protect electronics from water and condensation — use IP-rated enclosures and cable glands.
- Use protected Li-ion cells and fuses on power rails.
- For underground or potted deployments, avoid sensors in standing water for long periods.

Quick links: [BOM](./bom) • [Schematics](./schematics) • [Calibration](./calibration) • [Deployment](./deployment) • [Firmware](./firmware)

---