import './about.css'
import profile from "../../assets/images/Victor.jpeg"
export const About = () => {
  return (
    <div className='About'>
        <section className='intro'>
            <h2>Hello</h2>
            <h4>I'm Victor Mutwiri, KENYA</h4>
            <p>
                Frontend developer with 3+ years of experience. <br /> Passionate about creating user-friendly and visually appealing web apps <br /> Good design retains users and keeps them engaged.
            </p>
        </section>
        <section className='profile'><img src={profile} alt="profile" width={300}/></section>
    </div>
  )
}
