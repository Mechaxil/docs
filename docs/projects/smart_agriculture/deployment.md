---
slug: /smart-ag/deployment
title: Deployment & Maintenance
sidebar_position: 5
---
<!-- docs/smart-ag/deployment.md -->


# Deployment & Maintenance

## Pre-deployment checklist
- Confirm enclosure is IP-rated and use proper cable glands.
- Verify battery has protection PCB and Waveshare charging shows normal status.
- Install inline fuses on PV and battery lines.
- Secure tubing, strainers, and filters to prevent clogging.

## Installation steps
1. Mount enclosure and solar panel in a sunny spot with good tilt.
2. Route cables through glands; seal glands after wiring.
3. Place soil sensors at representative depths; avoid compaction.
4. Connect valves and run a manual valve test (10 cycles) and inspect for leaks.
5. Calibrate sensors in-situ and log baseline values.
6. Start with conservative watering thresholds and observe for 1–2 weeks.

## Maintenance schedule
- Weekly: inspect filters and sensor readings.
- Monthly: clean panels, verify battery voltage, inspect seals.
- Every 6–12 months: replace filters, inspect tube joints and solenoid operation.

## Fail-safes & recovery
- Valve default to closed (NC) on power loss.
- If telemetry is lost for > X hours, system reverts to safe schedule or disabled watering.
- Low-battery shutdown: enter low-power mode and disable watering below a configurable voltage.

**TODO:** Add real-world deployment photos and a commissioning checklist CSV.

---
