import PropTypes from 'prop-types';
import { ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import {
  ButtonSubmit,
  Input,
  Label,
  StyledForm,
  ValidationMessage,
} from './ContactForm.styled';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, {
      message:
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      excludeEmptyString: true,
    })
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      {
        message:
          'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
        excludeEmptyString: true,
      }
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ handleSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(contact, { resetForm }) => {
        const id = nanoid();
        handleSubmit({ id, ...contact });
        resetForm();
      }}
    >
      {({ errors }) => (
        <StyledForm>
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" name="name" />
            {errors.name && (
              <ErrorMessage name="name" component={ValidationMessage} />
            )}
          </div>

          <div>
            <Label htmlFor="number">Number</Label>
            <Input type="text" name="number" />
            {errors.number && (
              <ErrorMessage name="number" component={ValidationMessage} />
            )}
          </div>

          <ButtonSubmit type="submit">Add contact</ButtonSubmit>
        </StyledForm>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
