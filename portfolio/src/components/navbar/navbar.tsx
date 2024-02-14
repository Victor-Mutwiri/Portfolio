import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar