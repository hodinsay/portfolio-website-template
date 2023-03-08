import './Contact.scss';

const Contact = () => {
    return(
        <section id='contact'>
            <header className='contact-heading'>
                <h2 className='contact-title'>Contact</h2>
                <hr />
            </header>
            <p className='contact-subtitle'>Let's connect! Send me a message by submitting the form below and I will get back to you as soon as possible.</p>
            <div>
                <form 
                name='contact'
                method='post'
                >
                    <input type="hidden" name='form-name' value='contact'/>
                    <div>
                        <label htmlFor="name">Name</label> <br />
                        <input type="text" name='name' id='name' placeholder='Enter your name' required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" name='email' id='email' placeholder='Enter your email' required/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label> <br />
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' required/>
                    </div>
                    <input type='submit' value='Submit' className='submit-button'></input>
                </form>
            </div>
        </section>
    );
};

export default Contact;