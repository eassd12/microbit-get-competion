radio.setGroup(4)
radio.setTransmitPower(3)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # # # .
        . . # . .
        `)
    radio.sendString("hi")
})
