import React, { useState} from 'react';

const Contact = () => {
    const initialFormState = {
        user: ``,
        email: ``,
        comment: ``,
    };
    const [currentFormState, setCurrentFormState] = useState({...initialFormState});
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);
    const [isUserError, setIsUserError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [isCommentError, setIsCommentError] = useState(false);
    const [isCheckBoxError, setIsCheckBoxError] = useState(false);
    const [isInputError, setIsInputError] = useState({
        isUserError: false,
        isEmail: false,
        isCommentError: false,
        isCheckBoxError: false
    });
    const checkUserInputContent = () => {
        if (!currentFormState.user) {
            setIsUserError(true);
        } else {
            setIsUserError(false);
        }
    }
    const checkEmailInputContent = () => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!currentFormState.email || regex.test(currentFormState.email) === false) {
            setIsEmailError(true);
        } else {
            setIsEmailError(false);
        }
    }
    const checkCommentInputContent = () => {
        if (!currentFormState.comment) {
            setIsCommentError(true);
        } else {
            setIsCommentError(false);
        }
      };
      const checkCheckboxInput = () => {
        if (isCheckboxChecked === false) {
            setIsCheckBoxError(true)
        } else {
            setIsCheckBoxError(false)
        }
      }
    // const formRef = useRef();
    // const validateForm = () => {

    // }
    const handleCheckboxInput = () => {
        setIsCheckboxChecked(!isCheckboxChecked);
    }
    const handleInputChange = (evt) => {
        console.log(`evt.target.name`, evt.target.name)
        setCurrentFormState({
          ...currentFormState,
          [evt.target.name]: evt.target.value,
        });
    };
    const onSubmitFormReview = async () => {
        //add gif sending block form
        let formData = new FormData(currentFormState)
        let response = await fetch(`sendmail.php`, {
            method: `POST`,
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);

            setCurrentFormState({
              ...initialFormState,
            });
            //remove gif sending block form
        } else {
            alert(`error`)
        }

    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`currentFormState`, currentFormState)
        checkUserInputContent();
        checkEmailInputContent();
        checkCommentInputContent();
        checkCheckboxInput()
        console.log(`isInputError`, isInputError)
        // if (currentFormState.user.length !== 0 && currentFormState.comment.length !== 0) {
        //     // onSubmitFormReview(currentFormState);
        //     setCurrentFormState({
        //       ...initialFormState,
        //     });
        // }
    }
    return <>
        <section className="contact" id="contacts">
        
            <h2 className="title contact__title">Contact me</h2>
            <p className="contact__slogan">Have a question or want to work together? Send me a message and let's start your project right now!</p>
            <div className="contact__wrapper">
                <form action="#" className="container-site contact__form contact-form" onSubmit={handleSubmit}>
                    <div className="list contact__list contact-form">
                        <div className="form-group contact-form__item">
                            <label className={`contact-form__label ${isUserError ?`contact-form__label--error` : ``}`} htmlFor="name">Your name<sup>*</sup></label>
                            <input 
                                type="text" 
                                className={`form-control contact-form__input ${isUserError ? `contact-form__input--error` : ``}`} 
                                name="user"
                                id="name" 
                                autoFocus={true}
                                value={currentFormState.user}
                                onChange={handleInputChange}
                            >
                            </input>
                        </div>
                        <div className="form-group contact-form__item">
                            <label className={`contact-form__label ${isEmailError ?`contact-form__label--error` : ``}`} htmlFor="email">Your email<sup>*</sup></label>
                            <input 
                                type="email" 
                                name="email"
                                className={`form-control contact-form__input ${isEmailError ? `contact-form__input--error` : ``}`} 
                                id="email"
                                value={currentFormState.email}
                                onChange={handleInputChange}
                            >
                            </input>
                        </div>
                        <div className="form-group contact-form__item">
                            <label className={`contact-form__label ${isCommentError ?`contact-form__label--error` : ``}`} htmlFor="message">Your message<sup>*</sup></label>
                            <textarea 
                                className={`contact-form__textarea ${isCommentError ? `contact-form__textarea--error` : ``} form-control `}
                                name="comment"
                                id="message"
                                value={currentFormState.comment}
                                onChange={handleInputChange}
                            >
                            </textarea>
                        </div>   
                        <div className={`form-group contact-form__item ${isCheckBoxError ? `contact-form__item--checkbox-error` : ``}`}>
                            <input 
                                onChange={handleCheckboxInput}
                                defaultChecked={isCheckboxChecked}
                                type="checkbox" className="contact-form__checkbox" id="agreement"
                            >
                            </input>
                            <label htmlFor="agreement" className="contact-form__checkbox-label">I agree to the assessment, use and processing of my personal data.</label>
                        </div>
                    </div>  
                    <button type="submit" className="button contact-form__button">Send me a mesage</button> 
                </form>
            </div>
      </section>
    </>
}

export default Contact;