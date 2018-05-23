import React from 'react';
import cn from 'classnames/bind';
import { Tabs, TabList } from 'components/compoundtabs/';
import { Tab, TabPanels, TabPanel } from 'components/common';

import data from 'data';

import styles from './Compound.scss';
const cx = cn.bind(styles);

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Compound Components</h1>
        <Tabs>
          <TabList className={cx('blue-text')}>
            {
              data.map(({ content, disabled }) => (
                <Tab disabled={disabled} className={cx('blue-text')}>
                  {content}
                </Tab>)
              )
            }
          </TabList>
          <TabPanels>
            {
              data.map(({ content}) => <TabPanel>{content}</TabPanel>)
            }
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

export default Home;
