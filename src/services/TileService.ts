import { CharacterStartTile, LakeTile, LandTile } from '@/types/GameBoard/GameBoardTiles/Tile';
import TileBorderColor from '@/types/GameBoard/GameBoardTiles/TileBorderColor';
import { Village, Oil, Metal, Wood, Food } from '@/types/Resource';

export default class TileService {
    getInitialTiles() {
        return [
            new CharacterStartTile(1.5, 0, "Albion"),
            new CharacterStartTile(4.5, 0, "Nordic"),
            
            new LandTile(1, 1, Metal),
            new LandTile(2, 1, Food),
            new LandTile(3, 1, Village),
            new LandTile(4, 1, Wood),
            new LandTile(5, 1, Oil),
            new LandTile(6, 1, Village),

            new LakeTile(0.5, 2),
            new LandTile(1.5, 2, Oil),
            new LakeTile(2.5, 2),
            new LandTile(3.5, 2, Oil, TileBorderColor.RED), // Note: might one day have "Mine" as some sort of type?
            new LandTile(4.5, 2, Metal),
            new LandTile(5.5, 2, Food),
            new LandTile(6.5, 2, Food),
            
            new CharacterStartTile(0, 3, "Polania"),
            new LandTile(1, 3, Wood),
            new LandTile(2, 3, Metal, TileBorderColor.RED),
            new LandTile(3, 3, Wood),
            new LakeTile(4, 3),
            new LandTile(5, 3, Wood, TileBorderColor.RED),
            new LandTile(6, 3, Village),
            new CharacterStartTile(7, 3, "Rusviet"),

            new LandTile(0.5, 4, Food),
            new LandTile(1.5, 4, Village),
            new LakeTile(2.5, 4),
            new LandTile(3.5, 4, Food), // factory! - will have to change that later
            new LandTile(4.5, 4, Metal),
            new LandTile(5.5, 4, Oil),
            new LandTile(6.5, 4, Metal),

            new LandTile(0, 5, Wood),
            new LandTile(1, 5, Wood),
            new LandTile(2, 5, Food, TileBorderColor.RED),
            new LandTile(3, 5, Oil),
            new LakeTile(4, 5),
            new LandTile(5, 5, Village, TileBorderColor.RED),
            new LakeTile(6, 5),

            new LandTile(0.5, 6, Metal),
            new LandTile(1.5, 6, Village),
            new LandTile(2.5, 6, Village),
            new LandTile(3.5, 6, Oil, TileBorderColor.RED),
            new LandTile(4.5, 6, Wood),
            new LandTile(5.5, 6, Metal),
            new LandTile(6.5, 6, Oil),

            new CharacterStartTile(0, 7, "Saxony"),
            new LandTile(1, 7, Oil),
            new LakeTile(2, 7),
            new LandTile(3, 7, Food),
            new LandTile(4, 7, Metal),
            new LandTile(5, 7, Village),
            new LandTile(6, 7, Food),
            new CharacterStartTile(7, 7, "Togawa"),

            new CharacterStartTile(2.5, 8, "Crimea"),
            new LandTile(3.5, 8, Village)
        ];
    }
}