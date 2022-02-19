import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface underlineButtonType
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  underlineStyle?: 'underlineOnHover' | 'noUnderlineOnHover';
}

export const UnderlineButton: React.FC<underlineButtonType> = ({
  children,
  className,
  underlineStyle = 'underlineOnHover',
  ...rest
}) => {
  return (
    <button
      type="button"
      className={`hover:${underlineStyle == 'underlineOnHover' ? 'border-yellow-400' : 'border-transparent'} text-xl mx-2 border-b-4 ${underlineStyle != 'underlineOnHover' ? 'border-yellow-400' : 'border-transparent'} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
