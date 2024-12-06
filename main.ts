scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskine0`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 2), assets.tile`vaskemaskine0`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(4, 2), assets.tile`Num4`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(5, 2), assets.tile`Num5`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(6, 2), assets.tile`Num0`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 4), assets.tile`vaskemaskine`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(4, 4), assets.tile`Num8`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(5, 4), assets.tile`Num0`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(6, 4), assets.tile`Num0`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 6), assets.tile`vaskemaskine1`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(4, 6), assets.tile`Num1`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(5, 6), assets.tile`Num6`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(6, 6), assets.tile`Num4`)
    tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(7, 6), assets.tile`Num5`)
})
function DefineRooms (RoomToDefine: number[], XCol: number, XRow: number, StartCol: number, StartRow: number) {
    for (let index = 0; index <= XCol - 1; index++) {
        for (let index2 = 0; index2 <= XRow - 1; index2++) {
            RoomToDefine.push(StartCol + index)
            RoomToDefine.push(StartRow + index2)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`ovn`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskine`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
function SetFunctions () {
    MainCharacter = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    MainTileMap = tilemap`level`
    MenuTileMap = tilemap`level2`
    tiles.setCurrentTilemap(MainTileMap)
    tileUtil.connectMaps(MenuTileMap, MainTileMap, MapConnectionKind.Door1)
    Stue = []
    Soveværelse = []
    Badeværelse = []
    Køkken = []
    Vaskerum = []
    Gang = []
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`føntørrer`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`køleskab 2`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
let MainTileMap: tiles.TileMapData = null
let MenuTileMap: tiles.TileMapData = null
let GameIsAcive = false
let Gang: number[] = []
let Vaskerum: number[] = []
let Køkken: number[] = []
let Badeværelse: number[] = []
let Soveværelse: number[] = []
let Stue: number[] = []
let MainCharacter: Sprite = null
SetFunctions()
controller.moveSprite(MainCharacter, 100, 100)
tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 20))
scene.cameraFollowSprite(MainCharacter)
DefineRooms(Stue, 8, 11, 17, 7)
DefineRooms(Soveværelse, 7, 6, 3, 7)
DefineRooms(Badeværelse, 7, 4, 3, 14)
DefineRooms(Køkken, 13, 4, 3, 2)
DefineRooms(Vaskerum, 8, 4, 17, 2)
DefineRooms(Gang, 5, 11, 11, 7)
GameIsAcive = true
