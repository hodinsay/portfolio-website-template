import './Navbar.scss';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.avif';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 780){
            setOpenMenu(true);
        } else if (window.innerWidth < 780){
            setOpenMenu(false);
        }
    }, []);

    const openMenuHandler = () => {
        setOpenMenu(!openMenu);
    };

    return(
        <nav id='nav'>
            <header className='logo'>
                <figure>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} href='#home'>
                        <img src={logo} alt="din" className='logo-pic' width='46' height='50'/>
                    </Link>
                </figure>
                <h1>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='logo-name' href='#home'>Din Ho</Link>
                </h1>
            </header>
            {openMenu && <ul className='nav-menu'>
                <li>
                    <FaTimes className='hidden' onClick={openMenuHandler}/>
                </li>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500} className='nav-link' href='#home'>Home</Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true} offset={50} duration={500} className='nav-link' href='#about'>About</Link>
                </li>
                <li>
                    <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='nav-link' href='#projects'>Projects</Link>
                </li>
                <li>
                    <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='nav-link' href='#contact'>Contact</Link>
                </li>
            </ul>}
            <FaBars className='hidden' onClick={openMenuHandler}/>
        </nav>
    );
};

export default Navbar;