import { useRef, useState } from "react";
import { sharedBtnStyles } from "../helpers/helpers";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { string, object } from 'yup';
import emailjscom from 'emailjs-com';
import captcha from 'react-google-recaptcha';

const ReCAPTCHA = captcha.default? captcha.default: captcha;
const emailjs = emailjscom.default? emailjscom.default : emailjscom;

const Contact = () => {
    const recaptchaRef = useRef();
    const SUCCESS = 'success';
    const SITE_KEY = '6LfF3H0aAAAAAOW8iaS5r-xuWUNEQ9Go5iYMSieL';
    const MAIL_KEY = '1q0a06v';
    const MAIL_USER_KEY = 'bOxAeOwFnZYd20sKsVcPt';
    const FAIL = 'fail';

    const [ isSent, setIsSent ] = useState(false);

    return (
        <section
            id="contact" 
            className="bg-white text-purple text-left py-20"
            style={{
                background: `linear-gradient(
                    to bottom,
                    #bbcee3,
                    #bbcee3 1px,
                    #fff 1px,
                    #fff
                  )`,
                backgroundSize: "100% 2.25rem"
            }}
        >
            { isSent ?
                <div className="py-3 text-center">
                    <h3 className="text-3xl font-bold mb-2">{isSent === SUCCESS ? 'Merci !' : 'Oops ! :('}</h3>
                    <p>
                        { isSent === SUCCESS ? 
                            'Votre courriel a bien été envoyé ! J\'ai hâte de vous lire.'
                            :
                            <>
                                Il semblerait qu'il y ait eu un problème lors de l'envoi du message. Veuillez entrez votre message de nouveau, revenir plus tard ou me contacter directement au courriel suivant: 
                                <br/> <a className="text-pink" href="mailto:kathleen-michaud@hotmail.ca">kathleen-michaud@hotmail.ca</a>
                            </>
                        }
                    </p>
                    <button 
                        onClick={() => setIsSent(false)}
                        type="button"
                        className={sharedBtnStyles +' px-16 after:bg-pink before:bg-white text-white mt-4'}
                    >
                        {isSent === SUCCESS ? 'En envoyer un autre ?' : 'Réessayer'}
                    </button>
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
                    onSubmit={(values, { setSubmitting }) => {
                        if(recaptchaRef.current.getValue()) {
                            let params = {
                                from_name: values.name,
                                from_email: values.email,
                                message: values.message,
                            }

                            emailjs.send('service_'+ MAIL_KEY, 'template_pt7a64s', params, 'user_' + MAIL_USER_KEY)
                                .then(res => {
                                    res.status === 200 ? setIsSent(SUCCESS) : setIsSent(FAIL);
                                })
                                .catch(err => {
                                    console.error(err);
                                    setIsSent(FAIL);
                                })
                                .finally(() => setSubmitting(false));
                        } else {
                            setSubmitting(false);
                        }
                    }}
                >
                    {(formik) => (
                        <Form className="container pb-16 relative">
                            <div className="flex w-full items-center">
                                <label htmlFor="name" className="font-cursive block text-3xl mr-2">Nom:</label>
                                <Field 
                                    type="text" 
                                    className="w-full bg-transparent"
                                    id="name" 
                                    name="name"
                                />
                            </div>
                            <div className="flex w-full items-center">
                                <label htmlFor="email" className="font-cursive block text-3xl mr-2">Courriel:</label>
                                <Field
                                    id="email" 
                                    name="email"
                                    type="email"
                                    className="w-full bg-transparent leading-9"
                                />
                            </div>
                            <label htmlFor="message" className="font-cursive block text-3xl">Message:</label>
                            <Field
                                type="textarea"
                                id="message" 
                                name="message" 
                                className="w-full bg-transparent leading-9"
                            />
                            <ReCAPTCHA
                                className="mt-3"
                                onChange={e => formik.setFieldValue("recaptcha", e ?? '')}
                                sitekey={SITE_KEY}
                                ref={recaptchaRef}
                            />
                            {formik.errors.recaptcha && <small className="block text-pink">{formik.errors.recaptcha}</small>}
                            <ErrorMessage name="name" render={msg => <small className="text-pink block">{msg}</small>} />
                            <ErrorMessage name="email" render={msg => <small className="text-pink block">{msg}</small>} />
                            <ErrorMessage name="message" render={msg => <small className="text-pink block">{msg}</small>} />
                            <div className="absolute -left-[200rem] -bottom-4">
                                <button
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className={"pl-[202rem] pr-[20rem] w-full text-left after:bg-pink before:bg-white text-white " + sharedBtnStyles }
                                >
                                    Envoyer
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            }
        </section>
    )
}

export default Contact;