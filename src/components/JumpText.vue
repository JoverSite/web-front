<script lang="ts">
import { CreateElement, VNode } from 'vue'
import { Vue, Component, Prop } from 'vue-property-decorator'

enum InitClass {
  normal = 'jump__text__normal',
  space = 'jump__text__space',
}

const defaultKeyframes = 'jump__text'

interface AutoPlay {
  readonly sleepTime: number;
  readonly intervalTime: number;
}

@Component
export default class JumpText extends Vue {
  @Prop() // Jump text
  readonly text!: string

  @Prop({ default: defaultKeyframes }) // The keyFrames defined from css.
  readonly keyFrames!: string

  @Prop({ default: 1000 }) // The total duration for text jump.
  readonly animateTime!: number

  @Prop({ type: Boolean }) // Open mouse evens.
  readonly mouseEvens!: boolean

  @Prop({ type: Boolean }) // Open auto play.
  readonly autoPlay: AutoPlay | boolean | undefined

  render (h: CreateElement): VNode {
    const vNodes: Array<VNode> = this.constructVNodes()
    const { keyFrames, animateTime, mouseEvens } = this
    let autoPlay: AutoPlay | boolean | undefined = this.autoPlay

    // generate random css_id for construct css.
    const styleId: string = 'jump' + Math.random().toString().substr(2, 4)
    // construct css and appendChild to <head></head>.
    JumpText.constructJumpUpStyle(styleId, keyFrames, animateTime)

    // open mouse evens.
    mouseEvens && JumpText.openMouseEven(vNodes, styleId, animateTime)

    // open auto play.
    if (autoPlay) {
      // set default value
      if (autoPlay === true) autoPlay = { sleepTime: 3000, intervalTime: 2000 }
      JumpText.openAutoPlay(vNodes, styleId, autoPlay.intervalTime, animateTime, autoPlay.sleepTime)
    }
    return h('div', vNodes)
  }

  constructVNodes (): Array<VNode> {
    const vNodes: Array<VNode> = []
    const text: string = this.text
    for (let i = 0, len = text.length; i < len; i++) {
      let vNode: VNode | undefined
      if (text[i] === ' ') {
        vNode = this.$createElement('span', { attrs: { class: InitClass.space } }, ['.'])
      } else {
        vNode = this.$createElement('span', { attrs: { class: InitClass.normal } }, [text[i]])
      }
      vNodes.push(vNode)
    }
    return vNodes
  }

  static constructJumpUpStyle (styleId: string, keyframes: string, animateTime: number): void {
    const cssText = `#${styleId} { animation: ${keyframes} ${animateTime}ms; }`
    const style = document.createElement('style')
    style.type = 'text/css'
    style.innerText = cssText
    document.head.appendChild(style)
  }

  static openMouseEven (vNodes: Array<VNode>, styleId: string, animateTime: number): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mousemove = (target: any) => {
      target.target.id = styleId
      setTimeout(() => {
        target.target.id = ''
      }, animateTime)
    }
    for (const vNode of vNodes) {
      vNode.data = { ...vNode.data, on: { mousemove } }
    }
  }

  static openAutoPlay (
    vNodes: Array<VNode>, styleId: string, intervalTime: number, animateTime: number, sleepTime: number,
  ): void {
    const time: number = intervalTime / vNodes.length
    vNodes.forEach((vNode: VNode, i: number) => {
      setTimeout(() => {
        setInterval(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const elm: any = vNode.elm
          elm.id = styleId
          setTimeout(() => {
            elm.id = ''
          }, animateTime)
        }, intervalTime + sleepTime)
      }, time * i)
    })
  }
}
</script>

<style lang="scss">
@keyframes jump__text {
  0% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px) rotateX(40deg);
  }
  100% {
    transform: translateY(0);
  }
}

.jump__text__normal {
  position: relative;
  display: inline-block;
}

.jump__text__space {
  opacity: 0;
}

#jump__text--up {
  animation: jump__text 1s;
}

</style>
