<template>
  <div> <!-- root element - there can be only one per component -->
     <!-- NOTE - these will each have their own separate canvases -->
    <!-- <PopularityTracker /> --> 
    <GameBoardTiles />
    <PlayerMat />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import GameBoardTiles from './GameBoardTiles/GameBoardTiles.vue';
import PlayerMat from './PlayerMat.vue';

// import mixins from "vue-class-component";
// import CanvasMixin from '../../mixins/CanvasMixin';

// Notes on this - for later 
// May decide to import the initial board configuration from a db but only for initial setup? not sure.

@Component({
  components: {  // these braces are needed, even if there is only one component
    GameBoardTiles,
    PlayerMat
   }
}) 
export default class GameBoard extends Vue {  // extends mixins(CanvasMixin) 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
