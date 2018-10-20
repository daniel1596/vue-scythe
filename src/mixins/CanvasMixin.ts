import { Vue } from 'vue-property-decorator'

// Note - this MUST be export *default* not just export! It won't work otherwise.
export default class CanvasMixin extends Vue {
  test: string = 'this text is coming to you from the mixin'
}