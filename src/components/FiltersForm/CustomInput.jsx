import { useId } from 'react';
import Icon from '../Icon/Icon';

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
            <Icon name="map" size={16} />
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
