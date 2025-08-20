---
slug: /solar/wiring
title: Wiring & Installation
sidebar_position: 4
---

<!-- docs/solar/wiring.md -->


# Wiring & Installation

## Quick safe checklist

- Verify PV Voc per string ≤ 24 V before connecting to Waveshare.
- Install inline fuse in PV positive lead.
- Use PV-rated cable & glands for outdoor wiring.
- Bond metal racks and enclosure to earth ground where possible.
- Keep high-current parts (MOSFETs, buck) on metal for heat dissipation.

## Example connection (text):

```
PV+ -> inline fuse -> Waveshare PV+
PV- -> Waveshare PV-
Battery+ -> Waveshare BAT+
Battery- -> Waveshare BAT-
Waveshare 5V/3.3V out -> Buck (if needed) -> Pico/ESP32 power
Battery + -> MOSFET V+ ; MOSFET drain -> Solenoid + ; Solenoid - -> MOSFET source -> Battery - (common ground)
```

## Wire sizing & connectors
- For panels: use 2.5–4 mm2 PV cable depending on current/length.
- For short battery and load wiring < 2 A: 0.5–0.75 mm2 (H05V-K 0.5 mm2 OK).
- Use MC4 connectors for panels; JST-PH for small signal/power to Waveshare if applicable.

**TODO:** Insert annotated wiring image `images/wiring_diagram.png`.
