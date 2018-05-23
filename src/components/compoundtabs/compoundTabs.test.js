import React from 'react';
import { mount } from 'enzyme';

import compoundTabs from './compoundTabs';

describe('compoundTabs', () => {
  it('should render compoundTabs with fail default', () => {
    const mounted = mount(
      <compoundTabs
        default={false}
      />,
    );
    expect(mounted.prop('default')).toBe(true);
    expect(mounted).toMatchSnapshot();

  });
});

