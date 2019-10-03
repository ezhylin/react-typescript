import React from 'react';
import { Button, Props } from './Button.component';
import { render } from '@testing-library/react';

describe('Button component', () => {
  const getButton = ({ children, ...extraProps }: Props) => <Button {...extraProps}>{children}</Button>;

  it('should renders', () => {
    const { asFragment } = render(getButton({ children: 'Add' }));

    expect(asFragment()).toMatchSnapshot();
  });

  it('should ', () => {});
});
