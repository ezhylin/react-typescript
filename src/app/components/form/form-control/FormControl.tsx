import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './FormControl.module.scss';

export type Props = {
  id: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'password';
  value?: string | number;
  classList?: string[];
};

export const FormControl: FC<Props> = (({ classList, ...props }) => <input className={classNames(styles.FormControl, ...classList)} {...props} />);

FormControl.defaultProps = {
  type: 'text',
  value: undefined,
  classList: [],
};
