// Gleamed from http://elinux.org/Rpi_Low-level_peripherals#General_Purpose_Input.2FOutput_.28GPIO.29
module.exports.raspberryPiB = [
  {}, // pin 1 3.3v
  {}, // pin 2 5v
  {   // pin 3 SDA
    digital: true,
    gpio: 2
  },
  {}, // pin 4 5v
  {   // pin 5 SCL
    digital: true,
    gpio: 3
  },
  {}, // pin 6 GND
  {   // pin 7
    digital: true,
    gpio: 4
  },
  {   // pin 8 TXD
    digital: true,
    gpio: 14
  },
  {}, // pin 9 GND
  {   // pin 10 RXD
    digital: true,
    gpio: 15
  },
  {   // pin 11
    digital: true,
    gpio: 17
  },
  {   // pin 12 PCM_CLK
    digital: true,
    gpio: 18
  },
  {   // pin 13
    digital: true,
    gpio: 27
  },
  {}, // pin 14 GND
  {   // pin 15
    digital: true,
    gpio: 22
  },
  {   // pin 16
    digital: true,
    gpio: 23
  },
  {}, // pin 17 3.3v
  {   // pin 18
    digital: true,
    gpio: 24
  },
  {   // pin 19 MOSI
    digital: true,
    gpio: 10
  },
  {}, // pin 20 GND
  {   // pin 21 MISO
    digital: true,
    gpio: 9
  },
  {   // pin 22
    digital: true,
    gpio: 25
  },
  {   // pin 23 SCLK
    digital: true,
    gpio: 11
  },
  {   // pin 24 CE0
    digital: true,
    gpio: 8
  },
  {}, // pin 25 GND
  {   // pin 26 CE1
    digital: true,
    gpio: 7
  }
];
