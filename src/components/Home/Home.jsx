import './Home.scss';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FaFileDownload, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';
// IMPORT YOUR RESUME PDF HERE!
import resume from '../../assets/resume-sample.pdf';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            // INSERT YOUR NAME HERE!
            strings: ['Hi, my name is John Doe'],
            typeSpeed: 110,
            backSpeed: 110,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, []);

    return(
        <section id='home'>
            <header>
                <span 
                className='home-title' 
                ref={el}
                ></span>
            </header>
            {/* WRITE A BRIEF DESCRIPTION ABOUT YOURSELF HERE */}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus dolorem earum cumque eveniet quo minus obcaecati accusantium eum aut temporibus.</p>
            <ul>
                <li>
                    <a 
                    // ADD YOUR IMPORTED RESUME PDF HERE!  
                    href={resume} 
                    download target='_blank' 
                    className='home-buttons'
                    >
                        Resume <FaFileDownload />
                    </a>
                </li>
                <li>
                    <Link 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    offset={50} 
                    duration={500} 
                    className='home-buttons' 
                    href='#projects'
                    >
                        Projects
                    </Link>
                </li>
            </ul>
            <nav>
                <ul>
                    <li>
                        <a 
                        // ADD YOUR LINKEDIN WEB PAGE HERE!
                        href="https://www.linkedin.com/in/" 
                        target='_blank' 
                        aria-label='See Linkedin page'
                        >
                            <FaLinkedinIn className='fab'/> 
                        </a>
                    </li>
                    <li>
                        <a 
                        // ADD YOUR GITHUB WEB PAGE HERE!
                        href="https://github.com/" 
                        target='_blank' 
                        aria-label='See GitHub page'
                        >
                            <FaGithub className='fab' />
                        </a>
                    </li>
                    <li>
                        <a 
                        // ADD YOUR TWITTER WEB PAGE HERE!
                        href="https://twitter.com/" 
                        target='_blank' 
                        aria-label='See Twitter page'
                        >
                            <FaTwitter className='fab' />
                        </a>
                    </li>
                    <li>
                        <a 
                        // ADD YOUR INSTAGRAM WEB PAGE HERE!
                        href="https://instagram.com/" 
                        target='_blank' 
                        aria-label='See Instagram page'
                        >
                            <FaInstagram className='fab'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Home;