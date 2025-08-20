---
slug: /smart-ag/schematics
title: Schematics
sidebar_position: 3
---
<!-- docs/smart-ag/schematics.md -->


# Schematics 

`schematics/smartag_v1.pdf`

Suggested sections for the final PDF schematic include:

1. Power: → 5V/3.3V rails -> Microcontroller, battery wiring, and fuses for Solar Power Manager outputs
2. Controller: pinouts using labeled GPIOs (with ADC, BME280/RTC I2C, UART, or SPI if applicable)
3. Telemetry: power and communications wiring for a microcontroller
4. Actuator: connection pinouts, flyback diode or snubber, and MOSFET driver wire for solenoid
5. SD card module, RTC (with backup coin cell), and flow sensor wiring are examples of peripherals.
6. Positions of enclosures and cable glands, as well as grounding points

**TODO:** Export KiCad/Altium schematic and upload `schematics/smartag_v1.pdf`.

---