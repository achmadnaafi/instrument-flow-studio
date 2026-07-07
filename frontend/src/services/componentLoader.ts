import esp32 from '../../../library/controllers/esp32/manifest.json'
import arduinoUno from '../../../library/controllers/arduino_uno/manifest.json'

import mq2 from '../../../library/sensors/mq2/manifest.json'
import dht22 from '../../../library/sensors/dht22/manifest.json'
import bmp280 from '../../../library/sensors/bmp280/manifest.json'

import relay from '../../../library/actuators/relay/manifest.json'
import led from '../../../library/actuators/led/manifest.json'
import buzzer from '../../../library/actuators/buzzer/manifest.json'

export function loadComponents() {
  return {
    controllers: [
      esp32,
      arduinoUno
    ],

    sensors: [
      mq2,
      dht22,
      bmp280
    ],

    actuators: [
      relay,
      led,
      buzzer
    ]
  }
}