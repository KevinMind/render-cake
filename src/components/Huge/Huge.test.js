import React from 'react';
import { mount } from 'enzyme';

import Huge from './Huge';

describe('Huge', () => {
  it('should render Huge with fail default', () => {
    const mounted = mount(
      <Huge
        default={false}
      />,
    );
    expect(mounted.prop('default')).toBe(true);
    expect(mounted).toMatchSnapshot();

  });
});

