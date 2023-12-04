
import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

import {
  FormField,
  Form,
  ErrorMessage,
  TextFeedback,
  ButtonWrap
} from './FormaRegistration.styled.js';

import { ButtonLearnMore, Circle, IconArrow } from '../Main/Main.styled';

import icon from '../../assets/icons/symbol-defs (1).svg';


const contactSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Wrong Fullname'
    )
    .required(),
  email: yup
    .string()
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/, 'Wrong Email')
    .required(),
  number: yup
    .string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Wrong Phone'
    )
    .required(),
  message: yup.string().max(300),
});

const TextArea = ({ label, id, ...props }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <TextFeedback id={id} className="text-area" {...props} />
    </>
  );
};
export const FormaRegistration = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        number: '',
        message: '',
      }}
      validationSchema={contactSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <div>
          <div>
            <FormField>
              * Full name:
              <Field
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="John Rosie1"
                required
              />
              <ErrorMessage name="name" component="div" />
            </FormField>
            <FormField>
              * E-mail:
              <Field
                id="email"
                name="email"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                placeholder="johnrosie@gmailcom"
                required
              />
              <ErrorMessage name="email" component="div" />
            </FormField>
            <FormField>
              * Phone:
              <Field
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                placeholder="380961234567"
                required
              />
              <ErrorMessage name="number" component="div" />
            </FormField>

            <TextArea
               id="message"
              label="Message:"
              name="message"
              rows="6"
              placeholder="My message..."
            />
          </div>
          <ButtonWrap>
            <ButtonLearnMore type="submit">
              Send
              <Circle>
                <IconArrow>
                  <use href={icon + '#icon-arrow-right-16'}></use>
                </IconArrow>
              </Circle>
            </ButtonLearnMore>
          </ButtonWrap>
        </div>
      </Form>
    </Formik>
  );
};

export default FormaRegistration;