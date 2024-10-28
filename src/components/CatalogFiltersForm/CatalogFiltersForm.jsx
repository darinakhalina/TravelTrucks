import { Formik, Form, Field } from 'formik';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../redux/campersOps';
import { clearItemsState, setCurrentPage } from '../../redux/campersSlice';
import { setFilters } from '../../redux/filtersSlice';
import { selectFilters, selectIsLoading } from '../../redux/selectors';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Checkbox from '../Checkbox/Checkbox';
import Radio from '../Radio/Radio';
import { INITIAL_PAGE, PAGE_LIMIT } from '../../constants/constants';
import css from './CatalogFiltersForm.module.css';

function CatalogFiltersForm() {
  const dispatch = useDispatch();
  const initialState = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = async filters => {
    dispatch(clearItemsState());
    dispatch(setFilters(filters));
    dispatch(setCurrentPage(INITIAL_PAGE));
    await dispatch(fetchCampers({ page: INITIAL_PAGE, limit: PAGE_LIMIT, params: filters }));
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
          <div className={css['filters-section']}>
            <Field name="location">
              {({ field }) => (
                <Input
                  type="text"
                  iconName="map"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="City"
                  name="location"
                  label="Location"
                  {...field}
                />
              )}
            </Field>
          </div>
          <p className={css['filters-subtitle']}>Filters</p>
          <div className={css['filters-section']}>
            <h3 className={clsx(css['filters-title'], 'text-md')}>Vehicle equipment</h3>
            <hr className="hr" />
            <ul className={css['filters-subsection']}>
              <li>
                <Field name="AC">
                  {() => (
                    <Checkbox
                      name="AC"
                      checked={values.AC}
                      onChange={handleChange}
                      label="AC"
                      iconName="wind"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="autoTransmission">
                  {() => (
                    <Checkbox
                      name="autoTransmission"
                      checked={values.autoTransmission}
                      onChange={handleChange}
                      label="Automatic"
                      iconName="diagram"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="kitchen">
                  {() => (
                    <Checkbox
                      name="kitchen"
                      checked={values.kitchen}
                      onChange={handleChange}
                      label="Kitchen"
                      iconName="cup"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="TV">
                  {() => (
                    <Checkbox
                      name="TV"
                      checked={values.TV}
                      onChange={handleChange}
                      label="TV"
                      iconName="tv"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="bathroom">
                  {() => (
                    <Checkbox
                      name="bathroom"
                      checked={values.bathroom}
                      onChange={handleChange}
                      label="Bathroom"
                      iconName="shower"
                    />
                  )}
                </Field>
              </li>
            </ul>
          </div>
          <div className={css['filters-section']}>
            <h3 className={clsx(css['filters-title'], 'text-md')}>Vehicle type</h3>
            <hr className="hr" />
            <ul className={css['filters-subsection']}>
              <li>
                <Field name="form" value="panelTruck">
                  {({ field }) => (
                    <Radio
                      name="form"
                      value="panelTruck"
                      checked={field.value === 'panelTruck'}
                      onChange={field.onChange}
                      label="Van"
                      iconName="van"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="form" value="fullyIntegrated">
                  {({ field }) => (
                    <Radio
                      name="form"
                      value="fullyIntegrated"
                      checked={field.value === 'fullyIntegrated'}
                      onChange={field.onChange}
                      label="Fully Integrated"
                      iconName="fully"
                    />
                  )}
                </Field>
              </li>
              <li>
                <Field name="form" value="alcove">
                  {({ field }) => (
                    <Radio
                      name="form"
                      value="alcove"
                      checked={field.value === 'alcove'}
                      onChange={field.onChange}
                      label="Alcove"
                      iconName="alcove"
                    />
                  )}
                </Field>
              </li>
            </ul>
          </div>
          <Button isLoading={isLoading} type="submit">
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default CatalogFiltersForm;
