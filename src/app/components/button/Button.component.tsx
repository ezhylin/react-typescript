import React, { FC } from 'react';

export type ButtonPropsModel = {
  type?: 'button' | 'submit';
  children: any;
};

export const Button: FC<ButtonPropsModel> = ({ children, ...props }: ButtonPropsModel) => (
  <button {...props}>{children}</button>
);

Button.defaultProps = {
  type: 'button'
};
