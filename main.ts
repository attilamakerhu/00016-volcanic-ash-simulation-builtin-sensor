input.onButtonPressed(Button.A, function () {
    limit += limitStep
})
input.onButtonPressed(Button.AB, function () {
    measure = false
    basic.clearScreen()
    basic.showNumber(limit)
    basic.pause(500)
    measure = true
})
input.onButtonPressed(Button.B, function () {
    limit += -1 * limitStep
})
let measure = false
let limitStep = 0
let limit = 0
limit = 250
limitStep = 5
measure = true
basic.forever(function () {
    if (measure) {
        led.plotBarGraph(
        input.lightLevel(),
        limit
        )
    }
})
