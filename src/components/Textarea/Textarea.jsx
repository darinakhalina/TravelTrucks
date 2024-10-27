import { useId } from 'react';
import clsx from 'clsx';
import css from './Textarea.module.css';

const Textarea = ({ value, name, onChange, placeholder = '', className, ...props }) => {
  const id = useId();
  return (
    <textarea
      rows={4}
      className={clsx(css['textarea'], className)}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Textarea;
