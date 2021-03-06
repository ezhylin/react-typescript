import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button, Props } from './Button.component';

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
    const { container, getByText } = render(
      getButton({
        classList: ['className1', 'className2'],
      }),
    );

    expect(getByText('Add')).toHaveAttribute('class', 'Button className1 className2');
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should accept onClick props', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      getButton({
        onClick: handleClick,
      }),
    );

    fireEvent.click(getByText('Add'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
