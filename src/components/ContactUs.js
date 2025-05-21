'use client'
import { useState, useRef } from "react";
import dynamic from "next/dynamic";
import emailjs from '@emailjs/browser';
import Image from "next/image";
import { useTranslation } from 'react-i18next';
import sendIcon from '../app/assets/send-icon.svg';
import "./ContactUs.scss";

const templateID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
const serviceID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

const EMPTY_INPUT = "this field can't be empty";
const INVALID_EMAIL = "please provide valid email format";

const ContactUs = () => {
  const { t } = useTranslation();

  const initialState = {
    user_name: "", 
    user_email: "",
    message:"" 
  };

  const form = useRef();

  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const handleChange = e => {
    const {name, value} = e.target;

    setFormValues(prevState => ({
      ...prevState,
      [name]: value
    }))

    // clear "empty input" error if something is typed 
    if (value.trim() && errors[name] === EMPTY_INPUT) {
      setErrors(prevState => ({
        ...prevState,
        [name]: "",
      }))
    }

    // clear "invalid input" error when correct email format is provided
    if (name === "user_email" && errors.user_email === INVALID_EMAIL) {
      if (validateEmail(value)) {
        errors.user_email = ""
      }
    }
  }

  const validate = () => {
    const newErrors = {
      user_name: formValues.user_name.trim() ? "" : EMPTY_INPUT,
      user_email: formValues.user_email.trim() ? "" : EMPTY_INPUT,
      message: formValues.message.trim() ? "" : EMPTY_INPUT,
    };

    const emailValid = validateEmail(formValues.user_email);

    // set email error message only if something is typed into the email input
    if (!newErrors.user_email) {
      if (!emailValid) {
        newErrors.user_email = INVALID_EMAIL
      }
    }

    setErrors(newErrors);

    if(Object.values(newErrors).every(error => error === "")) {
      return true;
    }
    return false;
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const isFormValid =  validate(); 

    if (isFormValid) {
      emailjs.sendForm(serviceID, templateID, form.current, {
        publicKey
      })
      .then(() => {
        console.log('Success!')
        setFormValues(initialState);
        setErrors(initialState);
      },
      (errors) => {
        console.log("Failed...", errors)
        alert("Sending your message failed... Please try again.")
      }, 
      )
    }
  }

  // const CalendlyWidget = dynamic(
  //   () => {
  //     return import("@/components/CalendlyWidget")
  //   },
  //   { ssr: false }
  // );

  return (
    <section className="contactUs" id="ContactUs">
      <div className="contactUs__heading">
        <h2 className="contactUs__header">
          <span>{t('contactUs.title-firstPart')}</span>
          <span className="dot contactUs__dot"></span>
          <span>{t('contactUs.title-secondPart')}</span>
        </h2>
      </div>
      <div className="contactUs__content">
        {/* <div className="contactUs__buttonWrapper">
          <CalendlyWidget />
        </div> */}
        <form className='form' onSubmit={handleSubmitForm} ref={form} noValidate>
          {/* <p>You can also leave us a message</p> */}
          <input
            type="text"
            placeholder="Name and Surname"
            className='form__input'
            name="user_name"
            value={formValues.user_name}
            onChange={handleChange}
          />
          {errors.user_name && <p className="form__errorMessage">{errors.user_name}</p>}
          <input
            type="email"
            placeholder="E-mail address"
            className='form__input'
            name="user_email"
            value={formValues.user_email}
            onChange={handleChange}
          />
          {errors.user_email && <p className="form__errorMessage">{errors.user_email}</p>}
          <div className='form__message'>
          <textarea
            rows={10}
            cols={20}
            placeholder="Your Message"
            className='form__textarea'
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="form__button"
          >
            <Image
              src={sendIcon}
              alt="send arrow icon"
            />
          </button>
          </div>
          {errors.message && <p className="form__errorMessage">{errors.message}</p>}
        </form>
      </div>

    </section>
  )};

export default ContactUs;
