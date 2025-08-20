---
slug: /smart-ag/calibration
title: Sensor Calibration
sidebar_position: 4
---
<!-- docs/smart-ag/calibration.md -->


# Sensor Calibration

## Soil moisture (SOILCAP-V20)
1. Install sensor in pot or field location representative of the area.
2. Dry baseline: power sensor, log ADC/reading in air (no contact with soil). Record as `dry_value`.
3. Saturated baseline: insert sensor in distilled water, record `wet_value`.
4. Map reading to percent: `moisture% = (reading - dry_value) / (wet_value - dry_value) * 100`.
5. Choose thresholds (example): `water when < 30%`, stop at `> 60%`.

**Notes**: Soil composition affects readings — calibrate for each soil type and probe depth.

## Flow sensor
- Calibrate pulses per liter: run known volume through system, count pulses, compute `pulses_per_liter`.

## Temperature & Humidity (BME280)
- Verify with a reference thermometer/hygrometer and adjust software offsets if necessary.

**TODO:** Add calibration scripts and sample CSV outputs in `data/calibration/`.

---