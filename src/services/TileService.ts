import { Tile, HexagonTile, CharacterStartTile, LakeTile, LandTile } from '@/types/GameBoard/GameBoardTiles/Tile';
import TileFillColor from '@/types/GameBoard/GameBoardTiles/TileFillColor';
import TileBorderColor from '@/types/GameBoard/GameBoardTiles/TileBorderColor';

export default class TileService {
    getInitialTiles() {
        return [
            new CharacterStartTile(1.5, 0, "Albion"),
            new CharacterStartTile(4.5, 0, "Nordic"),
            
            new LandTile(1, 1),
            new LandTile(2, 1),
            new LandTile(3, 1),
            new LandTile(4, 1),
            new LandTile(5, 1),
            new LandTile(6, 1),

            new LakeTile(0.5, 2),
            new LandTile(1.5, 2),
            new LakeTile(2.5, 2),
            new LandTile(3.5, 2, TileFillColor.NONE, TileBorderColor.RED), // Note: might one day have "Mine" as some sort of type?
            new LandTile(4.5, 2),
            new LandTile(5.5, 2),
            new LandTile(6.5, 2),
            
            new CharacterStartTile(0, 3, "Polania"),
            new LandTile(1, 3),
            new LandTile(2, 3, TileFillColor.NONE, TileBorderColor.RED),
            new LandTile(3, 3),
            new LakeTile(4, 3),
            new LandTile(5, 3, TileFillColor.NONE, TileBorderColor.RED),
            new LandTile(6, 3),
            new CharacterStartTile(7, 3, "Rusviet"),

            new LandTile(0.5, 4),
            new LandTile(1.5, 4),
            new LakeTile(2.5, 4),
            new LandTile(3.5, 4), // factory!
            new LandTile(4.5, 4),
            new LandTile(5.5, 4),
            new LandTile(6.5, 4),

            new LandTile(0, 5),
            new LandTile(1, 5),
            new LandTile(2, 5, TileFillColor.NONE, TileBorderColor.RED),
            new LandTile(3, 5),
            new LakeTile(4, 5),
            new LandTile(5, 5, TileFillColor.NONE, TileBorderColor.RED),
            new LakeTile(6, 5),

            new LandTile(0.5, 6),
            new LandTile(1.5, 6),
            new LandTile(2.5, 6),
            new LandTile(3.5, 6, TileFillColor.NONE, TileBorderColor.RED),
            new LandTile(4.5, 6),
            new LandTile(5.5, 6),
            new LandTile(6.5, 6),

            new CharacterStartTile(0, 7, "Saxony"),
            new LandTile(1, 7),
            new LakeTile(2, 7),
            new LandTile(3, 7),
            new LandTile(4, 7),
            new LandTile(5, 7),
            new LandTile(6, 7),
            new CharacterStartTile(7, 7, "Togawa"),

            new CharacterStartTile(2.5, 8, "Crimea"),
            new LandTile(3.5, 8)
        ];
    }
}