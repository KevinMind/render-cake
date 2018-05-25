import React from 'react';
import { mount } from 'enzyme';

import Tabs from './faacTabs';

describe('compoundTabs', () => {
  it('should render compoundTabs with fail default', () => {
    const mounted = mount(
      <Tabs
        default={false}
      />,
    );
    expect(mounted.prop('default')).toBe(true);
    expect(mounted).toMatchSnapshot();

  });
});
