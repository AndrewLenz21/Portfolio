import React, {useRef,useState} from 'react';
import './Contact.scss';

// EMAIL SERVICES
import emailjs from '@emailjs/browser';

import { images } from '../../constants';

const Contact = () => {

    
    // CONST FOR EMAIL SERVICES
    const form = useRef();

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        email: '',
        project: '',
      });
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        const formData = new FormData(form.current);
        const name = formData.get("name");
        const email = formData.get("email");
        const project = formData.get("project");
      
        let hasErrors = false;
      
        if (!name) {
          hasErrors = true;
          setValidationErrors((prevState) => ({ ...prevState, name: 'Name is required' }));
        } else {
          hasErrors = false;
          setValidationErrors((prevState) => ({ ...prevState, name: '' }));
        }
    
        if (!email) {
          hasErrors = true;
          setValidationErrors((prevState) => ({ ...prevState, email: 'Email is required' }));
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          hasErrors = true;
          setValidationErrors((prevState) => ({ ...prevState, email: 'Invalid email address' }));
        } else {
          hasErrors = false;
          setValidationErrors((prevState) => ({ ...prevState, email: '' }));
        }
    
        if (!project) {
          hasErrors = true;
          setValidationErrors((prevState) => ({ ...prevState, project: 'Project is required' }));
        } else {
          hasErrors = false;
          setValidationErrors((prevState) => ({ ...prevState, project: '' }));
        }
    
        if (!hasErrors) {
          // Enviar el formulario
          emailjs.sendForm('service_av6bfkb', 'template_1tkfcqq', form.current, 'S9ue1MAjLWZ1TBM9e')
            // .then((result) => {
            //     console.log(result.text);
            // }, (error) => {
            //     console.log(error.text);
            // });
            e.target.reset();
        }
    };
      

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">

            {/* SOCIAL MEDIA CONTAINER */}
            <div className="contact__content">

                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    {/* Contact CARD */}
                    <div className="contact__card">
                        <i className='bx bx-mail-send contact__card-icon' ></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">angelitolenz2000@gmail.com</span>

                        <a href="mailto:angelitolenz2000@gmail.com" className="contact__button" target="_blank" rel="noreferrer">
                            Write me {""}
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    {/* Contact CARD */}
                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">+39 342 576 5783</span>

                        <a href="https://wa.me/393425765783?text=Hello%2C%20more%20information%20please!" className="contact__button" target="_blank" rel="noreferrer">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    {/* Contact CARD */}
                    <div className="contact__card">
                        <i className="bx bxl-instagram contact__card-icon"></i>

                        <h3 className="contact__card-title">Instagram</h3>
                        <span className="contact__card-data">@andrewlenz21</span>

                        <a href="https://www.instagram.com/andrewlenz21/" className="contact__button" target="_blank" rel="noreferrer">
                            Write me
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                     
                </div>

            </div>


            {/* WRITE EMAIL CONTAINER */}
            <div className="contact__content-email">
                <h3 className="contact__title">Write me your project</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                            type="text"
                            name='name'
                            className='contact__form-input'
                            placeholder='Insert your name'
                        />
                        <p className ="contact__form-error">{validationErrors.name}</p>
                        {/* <p className="contact__form-error">'Name is required'</p> */}
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input 
                            type="email"
                            name='email'
                            className='contact__form-input'
                            placeholder='Insert your email'
                        />
                        <p className ="contact__form-error">{validationErrors.email}</p>
                        {/* <p className="contact__form-error">'Email is required'</p> */}
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Project</label>
                        <textarea
                            name="project" 
                            cols="30" 
                            rows="10" 
                            className='contact__form-input'
                            placeholder='Write your project'>
                        </textarea>
                        <p className ="contact__form-error">{validationErrors.project}</p>
                        {/* <p className="contact__form-error">'Project is required'</p> */}
                    </div>

                    <button href="#contact" className="button button--flex send__button">
                        {/* &nbsp for some space */}
                        <div className="text">
                            Send Message &nbsp;
                        </div>
                        {/* SVG: send */}
                        <img src={images.sendIcon} alt="sendIcon"/>
                        {/* end SVG */}
                    </button>

                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact