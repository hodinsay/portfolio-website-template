import './About.scss';
import din from '../../assets/din-294.avif';
import { Link } from 'react-scroll';

const About = () => {
    return(
        <article id='about'>
            <header className='about-heading'>
                <h2 className='about-title'>About me</h2>
                <hr />
                <p className='about-subtitle'>Get to know me.</p>
            </header>
            <figure>
                <img src={din} alt="din" className='profile-pic' width='294' height='300'/>
            </figure>
            <div className='about-flex-container'>
                <div>
                    <h3 className='about-block-title'>Who I am!</h3>
                    <p>I am a self-taught <strong>Frontend Web Developer</strong> who focus on the front-end build of websites and web applications. Currently, I am building modern, semantic, and responsive websites with <strong>Vite + React.js</strong> on <strong>VsCode</strong> and deploying them through <strong>Netlify</strong>. Please take your time to check out some of my work under the <strong>Projects</strong> section.</p>
                    <br />
                    <p> Everyday, I am learning more and more about the frondend web development while honing my skills as a software engineer. I have also devoted myself to become a <strong>Full-Stack Web Developer</strong> in the future with the proper skills and knowledge to build and maintain the back-end of websites and web applications.</p> 
                    <br />
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute and learn along with a team of like-minded individual. I am <strong>confident </strong> that I will help build the front-end of websites and/or web applications that can leads to the <strong>success</strong> of the overall product for the team and the company. If you have a good opportunity that matches my skills and experience, then please don't hesitate to <strong>Contact</strong> me.</p>
                    <p className='contact-button-hover'> 
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='contact-button' href='#contact'>Contact</Link>
                    </p>
                </div>
                <div>
                    <h3 className='about-block-title'>Tools I use:</h3>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Vite</li>
                        <li>React.js</li>
                        <li>GIT</li>
                        <li>SASS</li>
                        <li>WordPress</li>
                        <li>VsCode</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;