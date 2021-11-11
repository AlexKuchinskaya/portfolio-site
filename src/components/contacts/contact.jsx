import React from 'react';

const Contact = () => {
    return <>
        <section className="contact" id="contacts">
        
            <h2 className="title contact__title">Contact me</h2>
            <p className="contact__slogan">Have a question or want to work together? Send me a message and let's start your project right now!</p>
            <div className="contact__wrapper">
                <form className="container-site contact__form contact-form">
                    <div className="list contact__list contact-form">
                        <div className="form-group contact-form__item">
                            <label htmlFor="name"></label>
                            <input type="text" className="form-control contact-form__input" id="name" placeholder="Your name" required></input>
                        </div>
                        <div className="form-group contact-form__item">
                            <label htmlFor="email"></label>
                            <input type="text" className="form-control contact-form__input" id="email" placeholder="Your email" required></input>
                        </div>
                        <div className="form-group contact-form__item">
                            <label htmlFor="message"></label>

                            <textarea className="contact-form__textarea form-control" id="message" defaultValue="Leave me your message"></textarea>
                        </div>   
                    </div>  
                    <button type="submit" className="button contact-form__button">Send me a mesage</button> 
                </form>
            </div>
      </section>
    </>
}

export default Contact;