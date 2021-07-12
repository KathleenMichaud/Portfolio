import React, { useRef, useState } from 'react';
import { Container, FormGroup, Button, Row, Col, Spinner } from "react-bootstrap";
import SectionTitle from "../_Global/SectionTitle";
import Phone from '../../assets/images/phone.png';
import { Form, Formik, ErrorMessage, Field } from "formik";
import { string, object } from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

const Contact = () => {
    const recaptchaRef = useRef();
    const SUCCESS = 'success';
    const SITE_KEY = '6LfF3H0aAAAAAOW8iaS5r-xuWUNEQ9Go5iYMSieL';
    const MAIL_KEY = '1q0a06v';
    const MAIL_USER_KEY = 'bOxAeOwFnZYd20sKsVcPt';
    const FAIL = 'fail';
    const [isSent, setIsSent] = useState(false);

    return (
        <section id="contact" className="main-section section-contact">
            <Container className="position-relative z-index-100 py-5">
                <Row>
                    <Col md="6" className="text-left">
                        <SectionTitle title="Contact" quote="Phone Home." person='E.T.' cite='E.T. The Extra-Terrestrial' year='1982' />
                        { isSent ?
                            <div className="py-3">
                                <h3>{isSent === SUCCESS ? 'Merci !' : 'Oops ! :('}</h3>
                                <p>
                                    { isSent === SUCCESS ? 
                                        'Votre courriel a bien été envoyé ! J\'ai hâte de vous lire.'
                                        :
                                        <>
                                            Il semblerait qu'il y ait eu un problème lors de l'envoi du message. Veuillez entrez votre message de nouveau, revenir plus tard ou me contacter directement au courriel suivant: 
                                            <br/> <a href="mailto:contact@kathleen-michaud.com">contact@kathleen-michaud.com</a>
                                        </>
                                    }
                                </p>
                                <Button onClick={() => setIsSent(false)}>{isSent === SUCCESS ? 'En envoyer un autre ?' : 'Réessayer'}</Button>
                            </div>
                            :
                            <Formik
                                initialValues={{
                                    name: '',
                                    email: '',
                                    message: '',
                                    recaptcha: '',
                                }}
                                validationSchema={object().shape({
                                    name: string().required('Veuillez indiquer votre nom.'),
                                    email: string().email('Veuillez rentrer une addresse courriel valide.').required('Veuillez écrire votre addresse courriel.'),
                                    message: string().required('Veuillez écrire votre message.'),
                                    recaptcha: string().required('Veuillez confirmer que vous êtes humain.')
                                })}
                                onSubmit={(values, {setSubmitting, setErrors}) => {
                                    if(recaptchaRef.current.getValue()) {
                                        let params = {
                                            from_name : values.name,
                                            from_email : values.email,
                                            message : values.message,
                                        }
                                        emailjs.send('service_'+MAIL_KEY, 'template_pt7a64s', params, 'user_'+MAIL_USER_KEY)
                                            .then(res => {
                                                res.status === 200 ? setIsSent(SUCCESS) : setIsSent(FAIL);
                                            })
                                            .catch(err => {
                                                console.error(err);
                                                setIsSent(FAIL);
                                            })
                                            .finally(() => setSubmitting(false));
                                    } else {
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                { ({ isSubmitting, errors, setFieldValue}) => (
                                    <Form>
                                        <FormGroup>
                                            <label htmlFor="name">Nom</label>
                                            <Field 
                                                id="name" 
                                                name="name" 
                                                className={`form-control${errors.name ? ' border border-primary':''}`} 
                                                type="text" 
                                            />
                                            <ErrorMessage name="name" render={msg => <small className="text-primary">{msg}</small>} />
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="email">Courriel</label>
                                            <Field 
                                                id="email" 
                                                name="email" 
                                                className={`form-control${errors.email ? ' border border-primary':''}`} 
                                                type="email" 
                                            />
                                            <ErrorMessage name="email" render={msg => <small className="text-primary">{msg}</small>} />
                                        </FormGroup>
                                        <FormGroup>
                                            <label htmlFor="message">Message</label>
                                            <Field 
                                                as="textarea"
                                                id="message" 
                                                name="message" 
                                                className={`form-control${errors.message ? ' border border-primary':''}`}
                                            />
                                            <ErrorMessage name="message" render={msg => <small className="text-primary">{msg}</small>} />
                                        </FormGroup>
                                        <ReCAPTCHA
                                            className={`${errors.recaptcha ? 'border border-primary d-inline-block' : ''}`}
                                            onChange={e => setFieldValue("recaptcha", e ?? '')}
                                            sitekey={SITE_KEY}
                                            ref={recaptchaRef}
                                        />
                                        {errors.recaptcha && <small className="d-block text-primary">{errors.recaptcha}</small>}
                                        <Button className="mt-2" type="submit" disabled={isSubmitting}>
                                            {isSubmitting ? 
                                                <span className="mr-2">Envoi...</span> 
                                                :
                                                'Envoyer'
                                            } 
                                            {isSubmitting && <Spinner animation="grow" size="sm" />}
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        }
                    </Col>
                </Row>
            </Container>
            <img className="main-section-img-phone" src={Phone} alt="Une main et un téléphone" />
        </section>
    )
}

export default Contact;