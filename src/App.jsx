import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Textinput from './components/Textinput'
import Apiget from './components/Apiget'
import CardApi from './components/CardApi'
import Textinput2 from './components/Textinput2'
import Apiget2 from './components/Apiget2'
import CardApi2 from './components/CardApi2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CardApi/> */}

    <CardApi2/>
    {/* <Apiget2/> */}
    {/* <Apiget/> */}
     {/* <Textinput/> */}
     {/* <Textinput2/> */}
    </>
  )
}

export default App
