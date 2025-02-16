import { For, onMount } from 'solid-js'
import { uiStore } from './store/uiStore'
import './App.css'

function App() {
  onMount(() => {
    uiStore.initializeDocs()
  })

  return (
    <div class="doc-list">
      <For each={uiStore.state.docs}>
        {(doc) => (
          <div
            class={`doc-item ${doc.isActive() ? 'active' : ''}`}
            onClick={() => uiStore.setActiveDocID(doc.state.uuid)}
          >
            {doc.state.title}
          </div>
        )}
      </For>
    </div>
  )
}

export default App
