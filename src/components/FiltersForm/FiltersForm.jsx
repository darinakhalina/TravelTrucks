import { Formik, Form, Field } from 'formik';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../redux/filtersSlice';

function FiltersForm({ onSubmit }) {
  // const dispatch = useDispatch();
  const initialState = useSelector(selectFilters);

  return (
    <Formik
      initialValues={initialState}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          <div>
            <label htmlFor="location">Location</label>
            <Field type="text" name="location" />
          </div>

          <div>
            <label>Form</label>
            <div>
              <label>
                <Field type="radio" name="form" value="van" />
                van
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                fullyIntegrated
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" />
                alcove
              </label>
            </div>
          </div>

          <div>
            <div>Features</div>
            <label>
              <Field type="checkbox" name="AC" checked={values.AC} onChange={handleChange} />
              AC
            </label>
            <label>
              <Field type="checkbox" name="TV" checked={values.TV} onChange={handleChange} />
              TV
            </label>
            <label>
              <Field
                type="checkbox"
                name="kitchen"
                checked={values.kitchen}
                onChange={handleChange}
              />
              Kitchen
            </label>
            <label>
              <Field
                type="checkbox"
                name="bathroom"
                checked={values.bathroom}
                onChange={handleChange}
              />
              Bathroom
            </label>
            <label>
              <Field
                type="checkbox"
                name="autoTransmission"
                checked={values.autoTransmission}
                onChange={handleChange}
              />
              Auto Transmission
            </label>
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default FiltersForm;
