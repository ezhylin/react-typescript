import React, { FC } from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

export type Props = {
  type?: 'button' | 'submit';
  classList?: string[];
  onClick?: () => void;
};

export const Button: FC<Props> = ({ children, classList, ...props }) => (
  <button className={classnames(styles.Button, ...classList)} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  classList: [],
};
