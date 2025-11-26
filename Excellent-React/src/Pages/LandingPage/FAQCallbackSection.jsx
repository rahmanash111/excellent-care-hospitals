import React, { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './FAQCallbackSection.css';
import doctorImage from "../../assets/doctor-image.png"

const FAQCallbackSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How can I book an appointment at Xcellent Care Hospitals?",
            answer: "You can book an appointment by calling our hotline, using our online booking system through our website, or visiting the hospital reception in person. Our staff will help you schedule an appointment with the appropriate specialist."
        },
        {
            question: "What type of information do I need to provide before booking a medical appointment?",
            answer: "You'll need to provide your full name, contact number, preferred date and time, reason for visit, any relevant medical history, and your health insurance details if applicable."
        },
        {
            question: "What documents should I bring for my first visit?",
            answer: "Please bring a valid ID proof, health insurance card (if applicable), any previous medical records, prescription medications you're currently taking, and referral letter from your primary care physician if you have one."
        },
        {
            question: "How do I request an ambulance or emergency services?",
            answer: "For emergency services, call our 24/7 emergency hotline immediately. Provide your location, nature of emergency, and contact number. Our ambulance will be dispatched right away with necessary medical equipment and trained paramedics."
        },
        {
            question: "Does the hospital accept my health insurance?",
            answer: "We accept most major health insurance providers. Please contact our billing department or check our website for a complete list of accepted insurance plans. We recommend verifying your coverage before your appointment."
        },
        {
            question: "What are visiting hours for family and friends?",
            answer: "General visiting hours are from 4:00 PM to 8:00 PM daily. ICU visiting hours are restricted to 5:00 PM to 6:00 PM. However, these may vary by department, so please check with the nursing station for specific ward timings."
        },
        {
            question: "How do I access my medical records?",
            answer: "You can request your medical records through our patient portal online, by visiting the medical records department, or by submitting a written request. A valid ID is required, and there may be a small processing fee for physical copies."
        },
        {
            question: "What should I do if I have questions about my bill or payment options?",
            answer: "Please contact our billing department during business hours. We offer various payment options including cash, card, online payment, and installment plans. Our financial counselors can also help you understand your insurance coverage and out-of-pocket costs."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, 'Name must be at least 2 characters')
            .max(50, 'Name must be less than 50 characters')
            .required('Name is required'),
        mobile: Yup.string()
            .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
            .required('Mobile number is required')
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log('Form submitted:', values);
            alert('Thank you! We will call you back shortly.');
            resetForm();
            setSubmitting(false);
        }, 1000);
    };

    return (
        <div className="faq-callback-container">
            <div className="header-section">
                <p className='title bold'>Frequently Asked Questions</p>
                <p className="header-subtitle text">
                    Find answers to common questions about our services, treatments, appointments,
                    and patient care options to help you make informed health decisions.
                </p>
            </div>

            <div className="faq-grid">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={activeIndex === index}
                        >
                            <span>{faq.question}</span>
                            <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M12 5V19M5 12H19"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-answer-content">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="callback-section">
                <div className="callback-content">
                    <div className="callback-form-wrapper">
                        <p className="callback-subtitle">Could not find what you are looking for?</p>
                        <h2 className="callback-title">Request a Callback</h2>

                        <Formik
                            initialValues={{ name: '', mobile: '' }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting, errors, touched, handleSubmit }) => (
                                <div className="callback-form">
                                    <div className="form-group">
                                        <Field
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            className={`form-input callback-form-name ${errors.name && touched.name ? 'error' : ''}`}
                                        />
                                        <ErrorMessage name="name" component="div" className="error-message" />
                                    </div>

                                    <div className="form-group">
                                        <Field
                                            type="text"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            className={`form-input callback-form-mobile ${errors.mobile && touched.mobile ? 'error' : ''}`}
                                        />
                                        <ErrorMessage name="mobile" component="div" className="error-message" />
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleSubmit}
                                        className="submit-button"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            )}
                        </Formik>
                    </div>

                    <div className="callback-image">
                        <img
                            src={doctorImage}
                            alt="Doctor"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQCallbackSection;