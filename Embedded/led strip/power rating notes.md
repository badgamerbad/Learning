
# LEDs
## 1 LED Specification
- Current - 0.02A (20mA)
- Voltage - 1.8V
    - 

## Polarity
<img src="images/led polarity.png" alt="led polarity" />

## Basics
```
OHM Law
V = IR
```
- [Link](https://www.evilmadscientist.com/2012/resistors-for-leds/)

### LED Desired Resistor for power supply
(Power supply voltage – LED voltage) / current (in amps) = desired resistor value (in ohms)

<b>Note: </b>
Do not use volts and amperage (amp or ampere) in milli or other conventions
```
ex.
(5V - 1.8) / 0.02 = 160Ω
```

# Refer
- [Current Draw](https://learn.adafruit.com/rgb-led-strips/current-draw)
- [ws 2811 comparison](https://www.youtube.com/watch?v=QnvircC22hU)

# WS2811 60 LEDs/M (5M) - [Amazon link](https://www.amazon.in/gp/product/B081RSVC6C/ref=ask_ql_qh_dp_hza?th=1)
- a 1 RGB LED - 3 Normal LEDs

## Assumption
- for 30 LED 2811 - 10 segment (10 RGB LED = 10 x 3 LEDs)
    - 30 x 0.02 = 0.6A per meter
- for 60 LED 2811 - 20 Segment (20 RGB LED = 20 x 3 LEDs)
    - 60 x 0.02 = 1.2A per meter

## 5M 300LEDs strip power requirement
- for 300 LEDs - 5M x 60 LEDs
    - 5 x 1.2A = 6A

# WS 2812b 
- 1 RGB LED = 3 LEDs = 20mA x 3 = 60mA

# Arduino connection
330Ω and 100uf (micro ferrads)
<img src="./images/arduino + led circuit.png" alt="arduino + led circuit" />

# Nano Leaf
- 4M = 400cm of led strip available for nano leafs
    - required nano leafs = 10

- 2 sides of an nano leaf (traingle) will have following
    - 400cm / 10 (nano leaf) * 2 (sides) = 400/20 = <b>20cm per side</b> of an nono leaf

- 5M strip is 300 RGB LEDs = 300 x 0.06 (60mA) = 18A max 