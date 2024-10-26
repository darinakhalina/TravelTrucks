import { useId } from 'react';
import clsx from 'clsx';
import Icon from '../Icon/Icon';
import css from './Input.module.css';

const Input = ({
  value,
  name,
  onChange,
  label,
  iconName,
  placeholder = '',
  isLarge,
  className,
  ...props
}) => {
  const id = useId();
  const inputClassNames = clsx(
    css['input'],
    {
      [css['has-icon']]: iconName,
      [css['input--lg']]: isLarge,
    },
    className
  );

  return (
    <div className={css['input-wrapper']}>
      {label && (
        <label className={css['input-label']} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={css['input-holder']}>
        {iconName && <Icon className={css['input-icon']} name={iconName} size={16} />}
        <input
          autoComplete="off"
          className={inputClassNames}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default Input;
