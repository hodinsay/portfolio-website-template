import './Projects.scss';

// IMPORT YOUR WEBSITES IMAGES HERE! 
import sample from '../../assets/sample-768w.avif';
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
                    <a 
                    // INSERT PROJECT WEBSITE LINK HERE!
                    href="https://hodinportfoliotemplate.netlify.app/" 
                    target='_blank'>
                        <img 
                        src={sample} 
                        alt="project1" 
                        className='image' 
                        width='768' 
                        height='432'
                        />
                    </a>
                </figure>
                <div className='projects-description'>
                    {/* INSERT PROJECT NAME HERE! */}
                    <h3 className='projects-name'>Project 1</h3>
                    {/* INSERT PROJECT DESCRIPTION HERE! */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet a earum repudiandae nam tempore, facere numquam doloribus reiciendis, eveniet quo nemo fuga magni consequuntur voluptas ipsum ipsa, provident cumque.</p>
                    <span>Made with:</span>
                    {/* LIST THE TECHS USE TO MAKE THE PROJECT HERE! */}
                    <ul>
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                        <li>Tech 4</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a 
                        // INSERT PROJECT WEBSITE LINK HERE!
                        href="https://hodinportfoliotemplate.netlify.app/" 
                        target='_blank' 
                        className='website-button'
                        >
                            Website <FaExternalLinkAlt />
                        </a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a 
                    // INSERT PROJECT WEBSITE LINK HERE!
                    href="https://hodinportfoliotemplate.netlify.app/" 
                    target='_blank'>
                        <img 
                        src={sample} 
                        alt="project2" 
                        className='image' 
                        width='768' 
                        height='432'
                        />
                    </a>
                </figure>
                <div className='projects-description'>
                    {/* INSERT PROJECT NAME HERE! */}
                    <h3 className='projects-name'>Project 2</h3>
                    {/* INSERT PROJECT DESCRIPTION HERE! */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet a earum repudiandae nam tempore, facere numquam doloribus reiciendis, eveniet quo nemo fuga magni consequuntur voluptas ipsum ipsa, provident cumque.</p>
                    <span>Made with:</span>
                    {/* LIST THE TECHS USE TO MAKE THE PROJECT HERE! */}
                    <ul>
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                        <li>Tech 4</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a 
                        // INSERT PROJECT WEBSITE LINK HERE!
                        href="https://hodinportfoliotemplate.netlify.app/" 
                        target='_blank' 
                        className='website-button'
                        >
                            Website <FaExternalLinkAlt />
                        </a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a 
                    // INSERT PROJECT WEBSITE LINK HERE!
                    href="https://hodinportfoliotemplate.netlify.app/" 
                    target='_blank'>
                        <img 
                        src={sample} 
                        alt="project3" 
                        className='image' 
                        width='768' 
                        height='432'
                        />
                    </a>
                </figure>
                <div className='projects-description'>
                    {/* INSERT PROJECT NAME HERE! */}
                    <h3 className='projects-name'>Project 3</h3>
                    {/* INSERT PROJECT DESCRIPTION HERE! */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum amet a earum repudiandae nam tempore, facere numquam doloribus reiciendis, eveniet quo nemo fuga magni consequuntur voluptas ipsum ipsa, provident cumque.</p>
                    <span>Made with:</span>
                    {/* LIST THE TECHS USE TO MAKE THE PROJECT HERE! */}
                    <ul>
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                        <li>Tech 4</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a 
                        // INSERT PROJECT WEBSITE LINK HERE!
                        href="https://hodinportfoliotemplate.netlify.app/" 
                        target='_blank' 
                        className='website-button'
                        >
                            Website <FaExternalLinkAlt />
                        </a>       
                    </p>
                </div>
            </div>
        </section>      
    );
};

export default Projects;