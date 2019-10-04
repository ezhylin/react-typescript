import React, { FC, MouseEvent } from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

export type Props = {
  type?: 'button' | 'submit';
  classList?: string[];
  onClick?: (event: MouseEvent) => void;
};

export const Button: FC<Props> = ({ children, classList, onClick: handleClick, ...props }) => (
  <button className={classnames(styles.Button, ...classList)} onClick={handleClick} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
  classList: [],
  onClick: undefined,
};
