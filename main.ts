input.onButtonPressed(Button.A, function () {
    limit += limitStep
    if (limit > max_limit) {
        limit = max_limit
    }
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
    if (limit < 0) {
        limit = 0
    }
})
let measure = false
let max_limit = 0
let limitStep = 0
let limit = 0
limit = 250
limitStep = 5
max_limit = 255
measure = true
basic.forever(function () {
    if (measure) {
        led.plotBarGraph(
        input.lightLevel(),
        limit
        )
    }
})
