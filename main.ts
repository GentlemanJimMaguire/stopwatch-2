function pause2 () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
}
input.onButtonPressed(Button.A, function () {
    i = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(i)
    pause2()
    basic.showNumber(Math.idiv(i, 3))
    pause2()
    basic.showNumber(Math.round(i / 3))
    pause2()
    basic.showNumber(Math.floor(i / 3))
    i += 1
})
let i = 0
i = 0
