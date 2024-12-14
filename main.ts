namespace SpriteKind {
    export const Utility = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`ovnGammelSlukket`, function (sprite, location) {
    MainCharacter.sayText(":)")
})
function DefineRooms (RoomToDefine: number[], XCol: number, XRow: number, StartCol: number, StartRow: number) {
    for (let index = 0; index <= XCol - 1; index++) {
        for (let index2 = 0; index2 <= XRow - 1; index2++) {
            RoomToDefine.push(StartCol + index)
            RoomToDefine.push(StartRow + index2)
        }
    }
}
function SetImage (WhatImage: string, Col: number, Row: number) {
    if (WhatImage == "CO2") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`CO2`)
    } else if (WhatImage == "Money") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Money`)
    } else if (WhatImage == "Ur") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Ur`)
    }
}
sprites.onDestroyed(SpriteKind.Utility, function (sprite) {
    MainCharacter = sprites.create(assets.image`MyGuyJim`, SpriteKind.Player)
    controller.moveSprite(MainCharacter, 150, 150)
    tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol, MainCharacterPosRow))
    scene.cameraFollowSprite(MainCharacter)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CurrentTileMap == "Main") {
        let CO2 = 0
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        SetNumbers(CurrentDay, 1, 1)
        SetNumbers(CO2, 1, 2)
        SetNumbers(Money, 1, 3)
        SetImage("Ur", 0, 1)
        SetImage("CO2", 0, 2)
        SetImage("Money", 0, 3)
        SetUr(Time)
        CurrentTileMap = "Menu"
    } else if (CurrentTileMap == "Menu") {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        CurrentTileMap = "Main"
    }
})
function SetFunctions () {
    MainCharacter = sprites.create(assets.image`MyGuyJim`, SpriteKind.Player)
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
function SetNumbers (num: number, StartCol: number, StartRow: number) {
    let ArrayWithNumbersToSet: string[] = []
    NumberToText = convertToText(num)
    for (let index3 = 0; index3 <= NumberToText.length - 1; index3++) {
        ArrayWithNumbersToSet.push(NumberToText.charAt(index3))
    }
    for (let index4 = 0; index4 <= ArrayWithNumbersToSet.length - 1; index4++) {
        if (ArrayWithNumbersToSet[index4] == "0") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num0`)
        } else if (ArrayWithNumbersToSet[index4] == "1") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num1`)
        } else if (ArrayWithNumbersToSet[index4] == "2") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num2`)
        } else if (ArrayWithNumbersToSet[index4] == "3") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num3`)
        } else if (ArrayWithNumbersToSet[index4] == "4") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num4`)
        } else if (ArrayWithNumbersToSet[index4] == "5") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num5`)
        } else if (ArrayWithNumbersToSet[index4] == "6") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num6`)
        } else if (ArrayWithNumbersToSet[index4] == "7") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num7`)
        } else if (ArrayWithNumbersToSet[index4] == "8") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num8`)
        } else if (ArrayWithNumbersToSet[index4] == "9") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index4, StartRow), assets.tile`Num9`)
        }
    }
}
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if (CurrentTileMap != "Menu") {
        ArrowSelector = sprites.create(assets.image`Arrow`, SpriteKind.Utility)
        controller.moveSprite(ArrowSelector, 100, 100)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
    } else {
        ArrowSelector = sprites.create(assets.image`BlankSelector`, SpriteKind.Utility)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
    }
})
function SetUr (Time: number) {
    tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL`)
    tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM`)
    tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR`)
    tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML`)
    tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM`)
    tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR`)
    tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL`)
    tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM`)
    tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR`)
    if (Time == 1) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM1`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL1`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM1`)
    } else if (Time == 2) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR2`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL2`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM2`)
    } else if (Time == 3) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR3`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM3`)
    } else if (Time == 4) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR4`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL4`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM4`)
    } else if (Time == 5) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM5`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL5`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM5`)
    } else if (Time == 6) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM6`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM6`)
    } else if (Time == 7) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM7`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL7`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM7`)
    } else if (Time == 8) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML8`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL8`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM8`)
    } else if (Time == 9) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML9`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM9`)
    } else if (Time == 10) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML10`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL10`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM10`)
    } else if (Time == 11) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM11`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL11`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM11`)
    } else if (Time == 12) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM12`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM12`)
    }
}
let ArrowSelector: Sprite = null
let NumberToText = ""
let MenuTileMap: tiles.TileMapData = null
let MainTileMap: tiles.TileMapData = null
let CurrentDay = 0
let Gang: number[] = []
let Vaskerum: number[] = []
let Køkken: number[] = []
let Badeværelse: number[] = []
let Soveværelse: number[] = []
let Stue: number[] = []
let MainCharacter: Sprite = null
let Time = 0
let CurrentTileMap = ""
let Money = 0
let MainCharacterPosCol = 0
let MainCharacterPosRow = 0
MainCharacterPosRow = 27
MainCharacterPosCol = 13
Money = 10000
CurrentTileMap = "Main"
Time = 1
let CurrentTime = 13
let HourDurationMs = 1000
SetFunctions()
controller.moveSprite(MainCharacter, 150, 150)
tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol, MainCharacterPosRow))
scene.cameraFollowSprite(MainCharacter)
DefineRooms(Stue, 8, 11, 17, 7)
DefineRooms(Soveværelse, 7, 6, 3, 7)
DefineRooms(Badeværelse, 7, 4, 3, 14)
DefineRooms(Køkken, 13, 4, 3, 2)
DefineRooms(Vaskerum, 8, 4, 17, 2)
DefineRooms(Gang, 5, 11, 11, 7)
let GameIsAcive = true
game.onUpdateInterval(HourDurationMs, function () {
    CurrentTime += 1
    if (CurrentTime == 25) {
        CurrentTime = 1
        CurrentDay += 1
    }
    if (CurrentTime > 12) {
        Time = CurrentTime - 12
    } else {
        Time = CurrentTime
    }
    if (CurrentTileMap == "Menu") {
        SetUr(Time)
        SetNumbers(CurrentDay, 1, 1)
    }
    if (CurrentTime == 18) {
        tileUtil.coverAllTiles(sprites.castle.tileGrass1, assets.tile`PinkGrass`)
        tileUtil.coverAllTiles(assets.tile`UdendørsLampe`, assets.tile`UdendørsLampe0`)
        tileUtil.coverAllTiles(assets.tile`FenceRightTCorner`, assets.tile`FenceCornerRightTCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceRightBCorner`, assets.tile`FenceRightBCorner0`)
        tileUtil.coverAllTiles(assets.tile`FenceTopLCorner`, assets.tile`FenceTopLCorner0`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightVandret`, assets.tile`FenceStraightVandret0`)
        tileUtil.coverAllTiles(assets.tile`FenceSraightDown`, assets.tile`FenceSraightDown0`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightDownShort`, assets.tile`FenceStraightDownShort0`)
        color.setColor(3, color.__hsv(255, 255, 75))
    }
    if (CurrentTime == 7) {
        tileUtil.coverAllTiles(sprites.castle.tileGrass1, sprites.castle.tileGrass1)
        tileUtil.coverAllTiles(assets.tile`UdendørsLampe`, assets.tile`UdendørsLampe`)
        tileUtil.coverAllTiles(assets.tile`FenceCornerRightTCorner`, assets.tile`FenceCornerRightTCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceRightBCorner`, assets.tile`FenceRightBCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceTopLCorner`, assets.tile`FenceTopLCorner`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightVandret`, assets.tile`FenceStraightVandret`)
        tileUtil.coverAllTiles(assets.tile`FenceSraightDown`, assets.tile`FenceSraightDown`)
        tileUtil.coverAllTiles(assets.tile`FenceStraightDownShort`, assets.tile`FenceStraightDownShort`)
        color.setPalette(
        color.originalPalette
        )
    }
})
game.onUpdateInterval(200, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`myTile13`)) {
        MainCharacterPosCol = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.column)
        MainCharacterPosRow = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.row)
        sprites.destroy(MainCharacter)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), sprites.castle.tileGrass1)) {
        sprites.destroy(ArrowSelector)
    }
})



