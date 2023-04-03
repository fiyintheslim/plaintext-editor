import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Editor } from './editor/Editor'
import { DateTime } from './components/DateTime'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <DateTime />
      <Editor />
    </div>
  )
}

export default App
