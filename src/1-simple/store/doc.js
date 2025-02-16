import { createMemo } from 'solid-js'
import { createStore } from 'solid-js/store'
import { uiStore } from './uiStore.js'

export class Doc {
  constructor(init = {}) {
    const [state, setState] = createStore({
      uuid: Math.floor(Math.random() * 2 ** 24) + 1,
      ...init,
    })

    this.state = state
    this.setState = setState

    this.isActive = createMemo(() => {
      // why is this printing every single item when clicking on one?
      console.log(this.state.title)
      return uiStore.state.activeDocID === this.state.uuid
    })
  }
}
