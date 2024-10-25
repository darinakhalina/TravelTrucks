import { Formik, Form, Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import Button from '../Button/Button';
import { clearItemsState, setCurrentPage } from '../../redux/campersSlice';
import { setFilters } from '../../redux/filtersSlice';
import { selectFilters, selectIsLoading } from '../../redux/selectors';
import CustomInput from './CustomInput';

function FiltersForm() {
  const dispatch = useDispatch();
  const initialState = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = async filters => {
    dispatch(clearItemsState());
    dispatch(setFilters(filters));
    dispatch(setCurrentPage(1));
    await dispatch(fetchCampers({ page: 1, limit: 5, params: filters }));
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={values => {
        onSubmit(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form>
          {/* <div>
            <label htmlFor="location">Location</label>
            <Field type="text" name="location" />
          </div> */}

          <Field name="location">
            {({ field }) => (
              <CustomInput
                type="text"
                iconName="test"
                value={field.value}
                onChange={field.onChange}
                placeholder="City"
                name="location"
                label="Location"
                {...field}
              />
            )}
          </Field>

          <div>
            <label>Form</label>
            <div>
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                panelTruck
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

          <Button isLoading={isLoading} type="submit">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FiltersForm;
