import React, { FC } from 'react';

export type Props = {
  type?: 'button' | 'submit';
  children: any;
};

export const Button: FC<Props> = ({ children, ...props }: Props) => <button {...props}>{children}</button>;

Button.defaultProps = {
  type: 'button'
};
