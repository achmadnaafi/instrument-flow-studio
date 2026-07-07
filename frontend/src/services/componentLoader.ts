import esp32 from '../../../library/controllers/esp32/manifest.json'
import arduinoUno from '../../../library/controllers/arduino_uno/manifest.json'

import mq2 from '../../../library/sensors/mq2/manifest.json'
import dht22 from '../../../library/sensors/dht22/manifest.json'
import bmp280 from '../../../library/sensors/bmp280/manifest.json'

import relay from '../../../library/actuators/relay/manifest.json'
import led from '../../../library/actuators/led/manifest.json'
import buzzer from '../../../library/actuators/buzzer/manifest.json'

import resistor from '../../../library/passive/resistor/manifest.json'
import capacitor from '../../../library/passive/capacitor/manifest.json'
import inductor from '../../../library/passive/inductor/manifest.json'
import potentiometer from '../../../library/passive/potentiometer/manifest.json'
import pushButton from '../../../library/passive/push_button/manifest.json'
import switchComponent from '../../../library/passive/switch/manifest.json'

import type { CategoryGroup } from '@/types/CategoryGroup'

export function loadComponents(): CategoryGroup[] {
  return [

    {
      id: 'controller',
      title: 'Controllers',
      components: [
        esp32,
        arduinoUno
      ]
    },

    {
      id: 'sensor',
      title: 'Sensors',
      components: [
        mq2,
        dht22,
        bmp280
      ]
    },

    {
      id: 'actuator',
      title: 'Actuators',
      components: [
        relay,
        led,
        buzzer
      ]
    },

    {
      id: 'passive',
      title: 'Passive',
      components: [
        resistor,
        capacitor,
        inductor,
        potentiometer,
        pushButton,
        switchComponent
      ]
    }

  ]
}