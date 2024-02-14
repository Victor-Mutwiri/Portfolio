import './App.css'
import { About } from './components/about/about'
import Navbar from './components/navbar/navbar'
import { Skills } from './components/navbar/skills/skills'

function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
