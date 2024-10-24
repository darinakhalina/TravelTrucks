import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, 'Must be at least 1 characters')
    .max(50, 'Must be less than 50 characters')
    .required('Name is required'),
});

function FiltersForm({ onSubmit }) {
  const nameId = useId();

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      onSubmit={values => {
        // pass filters
        onSubmit(values);
        // resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="div" />
        <button type="submit">Add name</button>
      </Form>
    </Formik>
  );
}

export default FiltersForm;
