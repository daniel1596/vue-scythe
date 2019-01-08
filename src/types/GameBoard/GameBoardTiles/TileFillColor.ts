enum TileFillColor {
	NONE = "#FFF",  // Note - may not keep this forever, but at least will keep as default for now
	BLACK = "black", // oil
	BLUE = "#0D1DF7", // lake
	// BLUE_DARK = "darkblue", // dark blue - this was going to be for oil, but I'm leaving it as black for now
	BROWN = "#663300", // wood
	GREEN = "green", // Albion
	RED = "#F00",  // village
	PURPLE = "purple", // Togawa
	SILVER = "#C0C0C0",  // metal
	YELLOW = "#FFD700"  // food
}

export default TileFillColor; 
// this is the necessary syntax - for whatever reason, this can't be inlined
//  i.e. we can't say "export default enum". Don't know why not.
//  but heck, at least this works... took long enough to figure out.