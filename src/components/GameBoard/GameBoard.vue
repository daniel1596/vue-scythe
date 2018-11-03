<template>
  <div> <!-- root element - there can be only one per component -->
    <!-- PopularityTracker -->  
    <GameBoardTiles />
    <!-- PowerTracker --> 
    <!-- PlayerMat --> <!-- probably put decisions for each turn directly on the player mat -->     
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GameBoardTiles from './GameBoardTiles/GameBoardTiles.vue';

// import mixins from "vue-class-component";
// import CanvasMixin from '../../mixins/CanvasMixin';

// Notes on this - for later 
// May decide to import the initial board configuration from a db but only for initial setup? not sure.

// Going to create separate "GameBoardTiles" component, nested inside this one
// That will be the only component in here for now, but eventually, there could be others
//  such as "PopularityTracker", "PowerTracker", etc.
// These will each be their own separate canvas; there seems to be no rule that you can't have 
//  multiple canvases on the same 


@Component({
  components: {  // these braces are needed, even if there is only one component
    GameBoardTiles
   }
}) 
export default class GameBoard extends Vue {  // mixins(CanvasMixin) 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
