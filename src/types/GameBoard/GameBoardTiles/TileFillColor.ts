enum TileFillColor {
	NONE = "#FFF",  // Note - may not keep this forever, but at least will keep as default for now
	BLUE = "#00F", // for lake
	RED = "#F00",  // for village
	SILVER = "#ddd",  // metal
	YELLOW = "#aaa"  // not really yellow but can solve that later
}

export default TileFillColor; 
// this is the necessary syntax - for whatever reason, this can't be inlined
//  i.e. we can't say "export default enum". Don't know why not.
//  but heck, at least this works... took long enough to figure out.