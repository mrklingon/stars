function turn () {
    return 45 * randint(0, 7)
}
music.onEvent(MusicEvent.MelodyEnded, function () {
    images.createBigImage(`
        . . . . . . . . . .
        # # # # . # # # # #
        . . # . . . # . . .
        . . . # # # # # # .
        . . . . . . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        `).scrollImage(1, 200)
})
function movestar (sprite: game.LedSprite) {
    sprite.move(0.5)
    if (sprite.isTouchingEdge()) {
        sprite.set(LedSpriteProperty.X, 2)
        sprite.set(LedSpriteProperty.Y, 2)
        sprite.turn(Direction.Right, turn())
        basic.pause(200)
    }
}
music.playMelody("C G F E D C5 G - ", 120)
let stars = game.createSprite(2, 2)
let stars2 = game.createSprite(2, 2)
let stars3 = game.createSprite(2, 2)
let stars4 = game.createSprite(2, 2)
stars.turn(Direction.Right, turn())
stars2.turn(Direction.Right, turn())
stars3.turn(Direction.Right, turn())
stars4.turn(Direction.Right, turn())
while (true) {
    movestar(stars)
    movestar(stars2)
    movestar(stars3)
    movestar(stars4)
}
