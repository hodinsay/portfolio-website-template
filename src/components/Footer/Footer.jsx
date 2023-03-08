import './Footer.scss';
import {FaLinkedinIn, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return(
        <footer id='footer'>
            <div className='footer-container'>
                <div>
                    <p className='footer-name'>Din Ho</p>
                    <p>A Software Engineer focused on frontend web development building responsive, modern, and semantic websites and web applications.</p>
                </div>
                <div>
                    <p className='footer-social'>Social:</p>
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
                </div>
            </div>
            <hr className='footer-line'/>
            <p className='footer-copyright'>&copy; Copyright 2023. Made by Din Ho <span className='heart'>&hearts;</span></p>
        </footer>
    );
};

export default Footer;