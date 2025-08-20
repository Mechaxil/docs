---
slug: /solar/testing
title: Testing & Commissioning
sidebar_position: 5
---

<!-- docs/solar/testing.md -->


# Testing & Commissioning

## Pre-power checks
- Double-check polarity on all battery and PV connections.
- Ensure fuses are fitted and protection PCB installed on cell.
- Confirm Waveshare board model and max PV voltage.

## Basic tests

| Test | How | Accept/Notes |
|---|---|---|
| PV Voc | Measure open-circuit in sun | ~18 V for single 12 V panel │
| PV Isc | Measure short-circuit current briefly with clamp | matches panel spec approx 0.83 A |
| Charge LED/status | Connect PV + battery → check Waveshare LED/state | Module should show charging status |
| Output rails | Measure 5 V / 3.3 V under load | Within tolerance +-5% |
| Solenoid switch | Activate via MOSFET; measure current and temp | Current should match spec; no excessive heating |

## Commissioning log
- Create `testing/logs/` and record: date, Voc, Isc, battery voltage, charge current, notes.

Maintenance: inspect seals annually; check battery health monthly.
