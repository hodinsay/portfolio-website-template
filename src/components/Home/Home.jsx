import './Home.scss';
import { Link } from 'react-scroll';
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';
import { FaFileDownload, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';
import resume from '../../assets/resume3.pdf';

const Home = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['Hi, my name is Din Ho'],
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
            <p>A Software Engineer focused on frontend web development building responsive, modern, and semantic websites and web applications.</p>
            <ul>
                <li>
                    <a href={resume} download target='_blank' className='home-buttons'>Resume <FaFileDownload /></a>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='home-buttons' href='#projects'>Projects</Link>
                </li>
            </ul>
            <nav>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/hodin81/" target='_blank' aria-label='See Linkedin page'>
                            <FaLinkedinIn className='fab'/> 
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/hodinsay" target='_blank' aria-label='See GitHub page'>
                            <FaGithub className='fab' />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/hodin81" target='_blank' aria-label='See Twitter page'>
                            <FaTwitter className='fab' />
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/hodin81" target='_blank' aria-label='See Instagram page'>
                            <FaInstagram className='fab'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
};

export default Home;