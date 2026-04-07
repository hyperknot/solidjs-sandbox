import { baseKeymap } from 'prosemirror-commands'
import { keymap } from 'prosemirror-keymap'
import { Schema } from 'prosemirror-model'
import { EditorState } from 'prosemirror-state'
import { EditorView } from 'prosemirror-view'
import { onMount } from 'solid-js'

import './App.css'
import 'prosemirror-view/style/prosemirror.css'

function App() {
  let ref

  onMount(() => {
    console.log('onMount')
    const editor = new EditorView(ref, {
      state: EditorState.create({
        schema: new Schema({
          nodes: {
            doc: { content: 'paragraph+' },
            paragraph: { content: 'text*', toDOM: () => ['p', 0] },
            text: { group: 'inline' },
          },
        }),
        plugins: [keymap(baseKeymap)],
      }),
    })
  })

  return <div class="ce prosemirror-parent" ref={ref} />
}

export default App
