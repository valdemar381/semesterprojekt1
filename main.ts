namespace SpriteKind {
    export const Utility = SpriteKind.create()
}





function SetUr(Time:number){
    tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL`)
    tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM`)
    tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR`)
    tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML`)
    tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM`)
    tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR`)
    tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL`)
    tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM`)
    tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR`)
    if(Time == 1){
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM1`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL1`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM1`)
    } 
    else if (Time == 2){
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR2`)
        tiles.setTileAt(tiles.getTileLocation(9, 1), assets.tile`BigClockTR_KL2`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM2`)
    }
    else if (Time == 3) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR3`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM3`)
    }
    else if (Time == 4) {
        tiles.setTileAt(tiles.getTileLocation(9, 2), assets.tile`BigClockMR4`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL4`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM4`)
    }
    else if (Time == 5) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM5`)
        tiles.setTileAt(tiles.getTileLocation(9, 3), assets.tile`BigClockBR_KL5`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM5`)
    } 
    else if (Time == 6) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM6`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM6`)
    }
    else if (Time == 7) {
        tiles.setTileAt(tiles.getTileLocation(8, 3), assets.tile`BigClockBM7`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL7`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM7`)
    }
    else if (Time == 8) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML8`)
        tiles.setTileAt(tiles.getTileLocation(7, 3), assets.tile`BigClockBL_KL8`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM8`)
    }
    else if (Time == 9) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML9`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM9`)
    } 
    else if (Time == 10) {
        tiles.setTileAt(tiles.getTileLocation(7, 2), assets.tile`BigClockML10`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL10`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM10`)
    }
    else if (Time == 11) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM11`)
        tiles.setTileAt(tiles.getTileLocation(7, 1), assets.tile`BigClockTL_KL11`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM11`)
    }
    else if (Time == 12) {
        tiles.setTileAt(tiles.getTileLocation(8, 1), assets.tile`BigClockTM12`)
        tiles.setTileAt(tiles.getTileLocation(8, 2), assets.tile`BigClockMM12`)
    }
}








scene.onOverlapTile(SpriteKind.Player, assets.tile`vaskemaskine0`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 2), assets.tile`vaskemaskine0`)
        SetNumbers(450, 4, 2)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 4), assets.tile`vaskemaskine`)
        SetNumbers(800, 4, 4)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 6), assets.tile`vaskemaskine1`)
        SetNumbers(1640, 4, 6)
    }
})
scene.onOverlapTile(SpriteKind.Utility, assets.tile`myTile13`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tørretumbler0`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 2), assets.tile`tørretumbler0`)
        SetNumbers(400, 4, 2)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 4), assets.tile`tørretumbler`)
        SetNumbers(750, 4, 4)
        tileUtil.setTileAt(MenuTileMap, tiles.getTileLocation(2, 6), assets.tile`tørretumbler1`)
        SetNumbers(1150, 4, 6)
    }
})
function DefineRooms (RoomToDefine: number[], XCol: number, XRow: number, StartCol: number, StartRow: number) {
    for (let index = 0; index <= XCol - 1; index++) {
        for (let index2 = 0; index2 <= XRow - 1; index2++) {
            RoomToDefine.push(StartCol + index)
            RoomToDefine.push(StartRow + index2)
        }
    }
}
sprites.onDestroyed(SpriteKind.Utility, function (sprite) {
    MainCharacter = sprites.create(assets.image`MyGuyJim`, SpriteKind.Player)
    controller.moveSprite(MainCharacter, 150, 150)
    tiles.placeOnTile(MainCharacter, tiles.getTileLocation(MainCharacterPosCol, MainCharacterPosRow))
    scene.cameraFollowSprite(MainCharacter)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ovn`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})



function SetImage (WhatImage: string, Col: number, Row: number){
    if (WhatImage == "CO2"){
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`CO2`)
    } else if (WhatImage == "Money"){
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Money`)
    } else if (WhatImage == "Ur") {
        tiles.setTileAt(tiles.getTileLocation(Col, Row), assets.tile`Ur`)
    }


}






controller.menu.onEvent(ControllerButtonEvent.Pressed, function() {
    if (CurrentTileMap == "Main"){
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
        SetNumbers(CurrentDay, 1, 1)
        SetNumbers(CO2, 1, 2)
        SetNumbers(Money, 1, 3)
        SetImage("Ur",0,1)
        SetImage("CO2", 0, 2)
        SetImage("Money", 0, 3)
        SetUr(Time)
        CurrentTileMap = "Menu"
    } 
    else if (CurrentTileMap == "Menu") {
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
    for (let index = 0; index <= NumberToText.length - 1; index++) {
        ArrayWithNumbersToSet.push(NumberToText.charAt(index))
    }
    for (let index = 0; index <= ArrayWithNumbersToSet.length - 1; index++) {
        if (ArrayWithNumbersToSet[index] == "0") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num0`)
        } else if (ArrayWithNumbersToSet[index] == "1") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num1`)
        } else if (ArrayWithNumbersToSet[index] == "2") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num2`)
        } else if (ArrayWithNumbersToSet[index] == "3") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num3`)
        } else if (ArrayWithNumbersToSet[index] == "4") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num4`)
        } else if (ArrayWithNumbersToSet[index] == "5") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num5`)
        } else if (ArrayWithNumbersToSet[index] == "6") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num6`)
        } else if (ArrayWithNumbersToSet[index] == "7") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num7`)
        } else if (ArrayWithNumbersToSet[index] == "8") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num8`)
        } else if (ArrayWithNumbersToSet[index] == "9") {
            tiles.setTileAt(tiles.getTileLocation(StartCol + index, StartRow), assets.tile`Num9`)
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`føntørrer`, function (sprite, location) {
	
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if(CurrentTileMap != "Menu"){
        ArrowSelector = sprites.create(assets.image`Arrow`, SpriteKind.Utility)
        controller.moveSprite(ArrowSelector, 100, 100)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
    }else{
        ArrowSelector = sprites.create(assets.image`BlankSelector`, SpriteKind.Utility)
        tiles.placeOnTile(ArrowSelector, tiles.getTileLocation(4, 4))
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`køleskab 2`, function (sprite, location) {
    if (GameIsAcive) {
        tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    }
})
let ArrowSelector: Sprite = null
let NumberToText = ""
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
let Money = 10000
let CO2 = 0
let CurrentDay = 0
let CurrentTileMap = "Main"
let MainCharacterPosCol = 0
let MainCharacterPosRow = 0
let Time = 1
let CurrentTime = 13
SetFunctions()
controller.moveSprite(MainCharacter, 150, 150)
tiles.placeOnTile(MainCharacter, tiles.getTileLocation(13, 20))
scene.cameraFollowSprite(MainCharacter)
DefineRooms(Stue, 8, 11, 17, 7)
DefineRooms(Soveværelse, 7, 6, 3, 7)
DefineRooms(Badeværelse, 7, 4, 3, 14)
DefineRooms(Køkken, 13, 4, 3, 2)
DefineRooms(Vaskerum, 8, 4, 17, 2)
DefineRooms(Gang, 5, 11, 11, 7)
GameIsAcive = true
game.onUpdateInterval(200, function () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(9, 7), assets.tile`myTile13`)) {
        MainCharacterPosCol = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.column)
        MainCharacterPosRow = tiles.locationXY(tiles.locationOfSprite(MainCharacter), tiles.XY.row)
        sprites.destroy(MainCharacter)
    } else if (tiles.tileAtLocationEquals(tiles.getTileLocation(0, 0), sprites.castle.tileGrass1)) {
        sprites.destroy(ArrowSelector)
    }
})

game.onUpdateInterval(5000, function() {
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
        SetNumbers(CurrentDay,1,1)
    }
    
    
})
