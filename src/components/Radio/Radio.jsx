import { useId } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './Radio.module.css';

const Radio = ({ name, value, checked, onChange, label, iconName, className }) => {
  const id = useId();
  const radioWrapperClassNames = clsx(css['radio-wrapper'], className);

  return (
    <div className={radioWrapperClassNames}>
      <input
        id={id}
        className={css['radio-input']}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className={css['radio-label']} htmlFor={id}>
        <Icon name={iconName} size={32} />
        <span className={css['radio-label-text']}>{label}</span>
      </label>
    </div>
  );
};

export default Radio;
