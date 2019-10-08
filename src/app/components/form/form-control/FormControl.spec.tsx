import React from 'react';
import { render } from '@testing-library/react';

import { FormControl, Props } from './FormControl';

describe('FormControl component', () => {
  const getFormControl = (extraProps?: Props) => (
    <FormControl id="id" name="name" {...extraProps}/>
  );

  it('should render', () => {
    const { container } = render(getFormControl());

    expect(container.firstChild).toMatchSnapshot();
  });
});
