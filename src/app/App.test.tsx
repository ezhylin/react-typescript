import React from 'react';
import { render } from '@testing-library/react';

import App, { Props } from './App';

describe('App component', () => {
  const getAppComponent = (extraProps?: Props) => <App {...extraProps} />;

  it('should renders', () => {
    const { container } = render(getAppComponent());

    expect(container.firstChild).toBeTruthy();
  });
});
