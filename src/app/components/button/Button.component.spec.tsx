import React from 'react';
import { Button, ButtonPropsModel } from './Button.component';
import { render } from '@testing-library/react';

describe('Button component', () => {
  const getButton = ({ children, ...extraProps }: ButtonPropsModel) => <Button {...extraProps}>{children}</Button>;

  it('should renders', () => {
    const { asFragment, getByText } = render(
      getButton({
        children: 'Add'
      })
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('should ', () => {});
});
