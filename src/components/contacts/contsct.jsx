import React from 'react';

const Contact = () => {
    return <>
        <section className="credit container">
            <h2 className="">Contact</h2>
            <div className="form-wrapper">
            <form>
                <ul className="list">
                    <li>
                        <label htmlFor="name"></label>
                        <input type="text" id="name" placeholder="Your name" required></input>
                    </li>
                    <li>
                        <label htmlFor="email"></label>
                        <input type="text" id="email" placeholder="Your email" required></input>
                    </li>
                    <li>
                        <label htmlFor="message"></label>

                        <textarea id="message" defaultValue="Leave me your message"></textarea>
                    </li>   
                </ul>  
                <button type="submit">Send me a mesage</button> 
            </form>
            </div>
      </section>
    </>
}

export default Contact;