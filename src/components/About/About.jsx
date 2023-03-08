import './About.scss';

// IMPORT YOUR PROFILE PIC HERE!
import profile from '../../assets/profile-294.avif';
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
                <img 
                // INSERT YOUR IMPORTED PROFILE PIC HERE!
                src={profile} 
                alt="profile" 
                className='profile-pic' 
                width='294' 
                height='300'
                />
            </figure>
            <div className='about-flex-container'>
                <div>
                    <h3 className='about-block-title'>Who I am!</h3>
                    {/* PROVIDE A DESCRIPTIVE SUMMARY ABOUT YOURSELF */}
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni iste enim tenetur itaque. Ea, cupiditate! Officiis odit aliquid autem modi minima eos natus excepturi tempore impedit architecto dicta maxime, quis aut voluptate debitis mollitia! Ratione, expedita nostrum amet totam perferendis ut velit! Repellendus, dolorum! Error soluta animi consectetur ducimus quam!</p>
                    <br />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illo iusto explicabo minima quod aperiam? Enim cum magni totam suscipit, nostrum dolores et amet error soluta ad ullam nisi numquam quidem, quod voluptates repellendus, tenetur beatae placeat quos ex veniam!</p> 
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus assumenda iusto eaque quas ut eum soluta tenetur corporis in, optio sequi cupiditate numquam quis debitis ab. Ad ipsam dignissimos necessitatibus distinctio autem cupiditate error veniam? Excepturi assumenda quo deleniti impedit, laborum vitae debitis eveniet nemo, fuga, ducimus sapiente saepe placeat.</p>
                    <p className='contact-button-hover'> 
                        <Link 
                        to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={50} 
                        duration={500} 
                        className='contact-button' 
                        href='#contact'
                        >
                            Contact
                        </Link>
                    </p>
                </div>
                <div>
                    <h3 className='about-block-title'>Techs I use:</h3>
                    <ul>
                        {/* PROVIDE THE SKILLS AND TECHS YOU KNOW */}
                        <li>Tech 1</li>
                        <li>Tech 2</li>
                        <li>Tech 3</li>
                        <li>Tech 4</li>
                        <li>Tech 5</li>
                        <li>Tech 6</li>
                        <li>Tech 7</li>
                        <li>Tech 8</li>
                        <li>Tech 9</li>
                        <li>Tech 10</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;