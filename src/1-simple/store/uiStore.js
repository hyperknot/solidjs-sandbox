import { createRoot } from 'solid-js'
import { createStore } from 'solid-js/store'
import { Doc } from './doc.js'

class UIStore {
  constructor() {
    const [state, setState] = createStore({
      activeDocID: null,
      docs: [],
    })

    this.state = state
    this.setState = setState
  }

  setActiveDocID(docId) {
    this.setState({ activeDocID: docId })
  }

  initializeDocs() {
    const docs = Array.from({ length: 1000 }, (_, i) => new Doc({ title: i }))
    this.setState({ docs })
  }
}

export const uiStore = createRoot(() => new UIStore())
