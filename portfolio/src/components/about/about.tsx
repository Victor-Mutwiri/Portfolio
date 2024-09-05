import './about.css'
import flag from "/kenyan.png"
import profile from "../../assets/images/Victor.jpeg"
export const About = () => {
  return (
    <div className='About'>
        <section className='intro'>
            <h2>Hello</h2>
            <h4>I'm Victor Mutwiri, KENYA <img src={flag} alt="flag" width={40}/></h4>
            <p className='show'>
                Mobile & Frontend developer with 4+ years of experience. <br /> Passionate about creating user-friendly and visually appealing mobile & web apps <br /> Good design retains users and keeps them engaged.
            </p>
            <p className='hidden'>Frontend developer with 3+ years of experience. Passionate about creating user-friendly and visually appealing web apps </p>
        </section>
        <section className='profile'><img src={profile} alt="profile" width={300}/></section>
    </div>
  )
}
