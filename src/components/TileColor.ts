enum TileColor {
	SILVER = "#ddd",
	YELLOW = "#aaa"  // not really yellow but can solve that later
}

export default TileColor; 
// this is the necessary syntax - for whatever reason, this can't be inlined
//  i.e. we can't say "export default enum". Don't know why not.
//  but heck, at least this works... took long enough to figure out.