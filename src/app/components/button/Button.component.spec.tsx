import React from 'react';
import { Button, Props } from './Button.component';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Button component', () => {
  const getButton = (extraProps?: Props) => <Button {...extraProps}>Add</Button>;

  it('should renders', () => {
    const { container } = render(getButton());

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have correct "type" attribute', () => {
    const { getByText } = render(
      getButton({
        type: 'submit',
      }),
    );

    expect(getByText('Add')).toHaveAttribute('type', 'submit');
  });

  it('should spread additional class names', () => {
    const { container } = render(
      getButton({
        classList: ['className1, className2'],
      }),
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
