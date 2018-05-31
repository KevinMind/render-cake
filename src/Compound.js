import React from 'react';
import cn from 'classnames/bind';
import { Tabs, TabList } from 'components/compoundtabs/';
import { Tab, NewTab, TabPanels, TabPanel, Title, IMG } from 'components/common';

import data from 'data';

import styles from './Compound.scss';
const cx = cn.bind(styles);

{/*
1. demonstrate how to get active tab from compound Tabs component, change render method in components/compoundtabs/compoundTabs

*/}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Compound Components</h1>
        <Tabs>
          <div>Currently active tab is ????</div>
          <TabList className={cx('blue-text')}>
            {
              data.map(({ title, disabled }) => (
                <Tab disabled={disabled} className={cx('blue-text')}>
                  {title}
                </Tab>)
              )
            }
          </TabList>
          <TabPanels>
            {
              data.map(({ title, src}) => (
                <TabPanel>
                    <Title label={title}/>
                    <IMG src={src} />
                </TabPanel>
              ))
            }
          </TabPanels>
        </Tabs>
      </div>
    );
  }
}

export default Home;
