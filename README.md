# vue-website
Playing around with Vue to make a basic website


Just use the vue-website thing that's started. Yeah, it's ok if you have to run it in NPM. That's actually seemingly necessary. But it's ok.

First classes to construct:
	- Tile (interface), HexagonalTile (interface), LandTile

Class structure:

GameBoard
PlayerBoard, CharacterBoard (not necessarily related)

Tile | parameters such as: which sides border the river, if encounter token is still on the tile, which resource it has, IsTunnel, CenterX, CenterY
HexagonalTile or CharacterTile
LakeTile or LandTile

Resource | Oil, Metal, Wood, Food

Card (probably? As an interface) |
CombatCard, EncounterCard, ObjectiveCard

BuildingBonus (maybe also as a card? Ehhh…)

Probably eventually trackers as objects but not for now. For now - ehh let's worry about building that in later.

Player | Coins, PlayerBoard, CharacterBoard
Probably under CharacterBoard - StarsGained (array?), BuildingsBuilt, UpgradesAttained (array?)

Worker
CombatToken (interface) --> Character, Mech (can carry resources)
Don't worry about airships for now

(Not sure how mechs will "carry" stuff…. But can get to that later. Movement comes later, I think.)




If I attempt to do a Scythe thing - this guy isn't going about his stuff the right way but he did try. https://github.com/joeforshaw/scythe

Roadmap (for Scythe):
	- Create a hex. Display it on screen.
	- Create several hexes around it.
	- Create a character or something to move.
	- Decide how the character will look (for now) and how it will be moved (for now).
	- Move an object from one hex to another.


Later:
	- Create the whole game board. 
	- Move pieces around it.
Not until this point - think about implementing other things. 
