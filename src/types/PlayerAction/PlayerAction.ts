
// May make this a class later... not sure how I'll work this out
export default interface PlayerAction {
    topRowAction: TopRowAction;
    bottomRowAction: BottomRowAction;
}

class TopRowAction {
    // these attributes will be different depending on what happens in the action
    // It feels like we need a Player class to be inputted
    // And then something would happen like - player.coins--, player.power += 2, player.popularity++ (maybe)
}

// not sure how I want to set this up... probably not exactly like this but oh well.
enum TopRowActionName { 
    BOLSTER,
    PRODUCE,
    MOVE,
    TRADE
}

class BottomRowAction {
    resourcesToPay: number = -1; // strongly typed later
}

enum BottomRowActionName {
    UPGRADE,
    DEPLOY,
    BUILD,
    ENLIST
}