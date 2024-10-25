import clsx from 'clsx';
import css from './Button.module.css';

const Button = ({
  className,
  text,
  isDisabled,
  isLoading,
  isFullWidth,
  onClick,
  skin = 'primary',
}) => {
  const buttonClasses = clsx(css['button'], className, {
    [css['is-disabled']]: isDisabled,
    [css['is-loading']]: isLoading,
    [css['is-fullwidth']]: isFullWidth,
    [css['button--secondary']]: skin === 'secondary',
  });

  return (
    <button className={buttonClasses} disabled={isDisabled || isLoading} onClick={onClick}>
      <span className={clsx(css['button-text'], { [css['is-hidden']]: isLoading })}>
        {text} {/* Текст кнопки */}
      </span>
    </button>
  );
};

export default Button;
