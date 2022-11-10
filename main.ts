let ha = 0
input.onButtonPressed(Button.A, function () {
    ha = input.temperature()
    basic.showNumber(ha)
})
input.onButtonPressed(Button.B, function () {
    ha = input.temperature()
    ha += ha * (1.8 + 32)
    basic.showNumber(ha)
})
basic.forever(function () {
	
})
