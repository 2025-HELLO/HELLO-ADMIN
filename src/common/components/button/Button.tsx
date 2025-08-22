import React from 'react';
import type { MouseEventHandler } from 'react';

import * as styles from './Button.css.ts';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: 'full' | 'small';
  iconPosition?: 'left' | 'right';
}

const Button = ({
  label,
  icon,
  variant = 'primary',
  disabled = false,
  onClick,
  type = 'button',
  size = 'full',
  iconPosition = 'left',
}: ButtonProps) => {
  let variantClass;
  if (variant === 'secondary') {
    variantClass = styles.secondaryButton;
  } else if (variant === 'tertiary') {
    variantClass = styles.tertiaryButton;
  } else {
    variantClass = styles.primaryButton;
  }

  const buttonClass = [variantClass, size === 'small' ? styles.smallButton : null]
    .filter(Boolean)
    .join(' ');

  const renderIcon = () => {
    if (!icon) {
      return null;
    }
    if (React.isValidElement(icon)) {
      const el = icon as React.ReactElement<{ className?: string }>;
      return React.cloneElement(el, {
        className: [styles.iconWrapper, el.props.className].filter(Boolean).join(' '),
      });
    }
    return icon;
  };

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {iconPosition === 'left' ? (
        <>
          {renderIcon()}
          {label}
        </>
      ) : (
        <>
          {label}
          {renderIcon()}
        </>
      )}
    </button>
  );
};

export default Button;
