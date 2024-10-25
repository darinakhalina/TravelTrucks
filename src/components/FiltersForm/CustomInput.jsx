import { useId } from 'react';
import MapIcon from '../../assets/map.svg?react';

const CustomInput = ({ value, name, onChange, label, iconName, placeholder = '', ...props }) => {
  const id = useId();

  return (
    <div className="formGroup">
      {label && (
        <label htmlFor={id} className="formLabel">
          {label}
        </label>
      )}
      <div className="inputContainer">
        {iconName && (
          <span className="inputIcon">
            <MapIcon width="16px" heigth="16px" />
          </span>
        )}
        <input
          className="formField"
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

export default CustomInput;
