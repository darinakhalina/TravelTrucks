import { useId } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './Checkbox.module.css';

const Checkbox = ({ name, checked, onChange, label, iconName, className }) => {
  const id = useId();
  const checkboxWrapperClassNames = clsx(css['checkbox-wrapper'], className);

  return (
    <div className={checkboxWrapperClassNames}>
      <input
        id={id}
        className={css['checkbox-input']}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label className={css['checkbox-label']} htmlFor={id}>
        <Icon name={iconName} size={32} />
        <span className={css['checkbox-label-text']}>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
