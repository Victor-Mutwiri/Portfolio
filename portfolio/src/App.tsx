import './App.css'
import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Footer } from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import { Projects } from './components/projects/projects'
import { Skills } from './components/skills/skills'

function App() {

  return (
    <>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/> 
      </>
  )
}

export default App
