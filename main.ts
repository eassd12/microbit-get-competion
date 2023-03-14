/**
 * 0 is have not start
 * 
 * 1 is normal 
 * 
 * 2 is sick
 * 
 * 3 is the sick one affect others
 */
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber < state) {
        radio.sendNumber(3)
    }
})
let state = 0
state = 2
radio.setGroup(4)
radio.setTransmitPower(3)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    . # . # .
    # . # . #
    `)
basic.forever(function () {
    radio.sendString("sick")
    basic.pause(200)
})
