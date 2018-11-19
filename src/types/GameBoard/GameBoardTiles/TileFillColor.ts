enum TileFillColor {
	NONE = "#FFF",  // Note - may not keep this forever, but at least will keep as default for now
	BLUE = "#0D1DF7", // for lake
	BROWN = "#663300", // wood
	RED = "#F00",  // village
	SILVER = "#C0C0C0",  // metal
	YELLOW = "#FFD700"  // food
}

export default TileFillColor; 
// this is the necessary syntax - for whatever reason, this can't be inlined
//  i.e. we can't say "export default enum". Don't know why not.
//  but heck, at least this works... took long enough to figure out.