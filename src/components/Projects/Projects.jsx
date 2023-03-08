import './Projects.scss';
import acr from '../../assets/acr-768.avif';
import photography from '../../assets/photography-768.avif';
import portfolio from '../../assets/portfolio-768.avif';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return(
        <section id='projects'>
            <header className='projects-heading'>
                <h2 className='projects-title'>Projects</h2>
                <hr />
            </header>
            <p className='projects-subtitle'>My recent and notable projects.</p>
            <div className='projects-flex-container'>
                <figure className='projects-box'>
                    <a href="https://dinvhophotography.netlify.app/home" target='_blank'>
                        <img src={photography} alt="project1" className='image' width='768' height='438'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>Din Ho Photography</h3>
                    <p>A modern, semantic, and responsive multi-page photographer portfolio website. Browse and view collections of photographs through a pop-up carousel image slider. The website is accessible on tablet and mobile devices.</p>
                    <span>Made with:</span>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Vite</li>
                        <li>React.js</li>
                        <li>SASS</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://dinvhophotography.netlify.app/home" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://acrglazing.com/" target='_blank'>
                        <img src={acr} alt="project2" className='image' width='768' height='453'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>ACR Glazing Contractors Inc. </h3>
                    <p> Built, designed, and launched the website for the client as a freelance web developer through WordPress. The website is responsive and accessible on tablet and mobile devices. </p>
                    <span>Made with:</span>
                    <ul>
                        <li>WordPress</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://acrglazing.com/" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://hodinportfoliotemplate.netlify.app/" target='_blank'>
                        <img src={portfolio} alt="project3" className='image' width='768' height='437'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>My Portfolio Website Template</h3>
                    <p>A modern, semantic, and responsive portfolio website template for web developer which you can utilize and deploy for free through Netlify. This website is accessible on tablet and mobile devices. Lighthouse audit scored: <strong>100 Accessibility, 100 Best Practices, 100 SEO, 97 Performance.</strong></p>
                    <span>Made with:</span>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Vite</li>
                        <li>React.js</li>
                        <li>SASS</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://github.com/hodinsay/portfolio-website-template" target='_blank' className='website-button'>GitHub <FaExternalLinkAlt /></a>       
                    </p>
                </div>
            </div>
        </section>      
    );
};

export default Projects;