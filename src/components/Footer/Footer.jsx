import './Footer.scss';
import {FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return(
        <footer id='footer'>
            <div className='footer-container'>
                <div>
                    {/* INSERT YOUR NAME HERE! */}
                    <p className='footer-name'>John Doe</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam velit eligendi provident ullam vel, laboriosam iste nam labore sapiente distinctio!</p>
                </div>
                <div>
                    <p className='footer-social'>Social:</p>
                    <ul>
                        <li>
                            {/* INSERT YOUR LINKEDIN PAGE HERE! */}
                            <a 
                            href="https://www.linkedin.com/in/" 
                            target='_blank' 
                            aria-label='See Linkedin page'
                            >
                                <FaLinkedinIn className='fab'/> 
                            </a>
                        </li>
                        <li>
                            {/* INSERT YOUR GITHUB PAGE HERE! */}
                            <a
                            href="https://github.com/" 
                            target='_blank' 
                            aria-label='See GitHub page'
                            >
                                <FaGithub className='fab' />
                            </a>
                        </li>
                        <li>
                            {/* INSERT YOUR TWITTER PAGE HERE! */}
                            <a 
                            href="https://twitter.com/" 
                            target='_blank' 
                            aria-label='See Twitter page'
                            >
                                <FaTwitter className='fab' />
                            </a>
                        </li>
                        <li>
                            {/* INSERT YOUR INSTAGRAM PAGE HERE! */}
                            <a 
                            href="https://instagram.com/" 
                            target='_blank' 
                            aria-label='See Instagram page'
                            >
                                <FaInstagram className='fab'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr className='footer-line'/>
            <p className='footer-copyright'>&copy; Copyright 2023. Made by Din Ho <span className='heart'>&hearts;</span></p>
        </footer>
    );
};

export default Footer;