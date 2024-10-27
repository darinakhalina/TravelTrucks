import clsx from 'clsx';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import css from './BookForm.module.css';
import Textarea from '../Textarea/Textarea';

// toDo - move
const validationSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Please enter at least 3 characters.').required('Required field'),
  email: Yup.string()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format.')
    .required('Required field'),
  date: Yup.date().required('Required field'),
  comment: Yup.string().optional(),
});

const BookForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        date: null,
        comment: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.info('Form data:', values);
        toast.success('Form submitted successfully!');
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css['book-form']}>
          <div>
            <p className={clsx('text-md', css['book-form-title'])}>Book your campervan now</p>
            <p className={css['book-form-subtitle']}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className={css['book-form-field']}>
            <Field name="name">
              {({ field }) => (
                <Input
                  type="text"
                  name="name"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Name*"
                  isLarge
                  {...field}
                />
              )}
            </Field>
            {errors.name && touched.name && (
              <div className={css['book-form-field-error']}>{errors.name}</div>
            )}
          </div>
          <div className={css['book-form-field']}>
            <Field name="email">
              {({ field }) => (
                <Input
                  type="email"
                  name="email"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Email*"
                  isLarge
                  {...field}
                />
              )}
            </Field>
            {errors.email && touched.email && (
              <div className={css['book-form-field-error']}>{errors.email}</div>
            )}
          </div>
          <div className={css['book-form-field']}>
            <Field name="date">
              {({ field, form }) => (
                <DatePicker
                  calendarClassName="camper-date-calendar"
                  className="camper-date-input"
                  minDate={new Date()}
                  disabledKeyboardNavigation
                  selected={field.value ? new Date(field.value) : null}
                  onChange={date => form.setFieldValue(field.name, date)}
                  dateFormat="dd/MM/yyyy"
                  autoComplete="off"
                  placeholderText="Booking date*"
                />
              )}
            </Field>
            {errors.date && touched.date && (
              <div className={css['book-form-field-error']}>{errors.date}</div>
            )}
          </div>
          <div className={css['book-form-field']}>
            <Field name="comment">
              {({ field }) => (
                <Textarea
                  type="text"
                  name="comment"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Comment"
                  {...field}
                />
              )}
            </Field>
          </div>
          <div className={css['book-form-cta']}>
            <Button type="submit">Send</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
