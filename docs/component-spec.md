# Component Specification

Example: MQ2

{
"id": "mq2",
"name": "MQ2 Gas Sensor",
"category": "sensor",
"description": "Gas detection sensor",
"pins": [
{
"name": "VCC",
"type": "power"
},
{
"name": "GND",
"type": "ground"
},
{
"name": "AO",
"type": "analog_output"
},
{
"name": "DO",
"type": "digital_output"
}
]
}

Pin Types

* power
* ground
* analog_input
* analog_output
* digital_input
* digital_output
* pwm
* uart_tx
* uart_rx
* i2c_sda
* i2c_scl
* spi_miso
* spi_mosi
* spi_sck
* spi_cs
