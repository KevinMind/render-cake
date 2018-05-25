import React from 'react';
import cn from 'classnames/bind';

import { Tabs, TabList, CustomTabList } from './components/faactabs/';
import { Tab, NewTab, TabPanels, TabPanel } from './components/common';

import data from './data';

import styles from './Functional.scss';
const cx = cn.bind(styles);

class Home extends React.Component {

  state = { custom : true }

  toggleActive = () => this.setState(({ custom }) => ({ custom: !custom }));

  render() {
    const { custom } = this.state;

    return (
      <Tabs>
        {
          (tabProps) => (
            <React.Fragment>
              <div>active index: {tabProps.activeIndex}</div>
              <TabList {...tabProps.childProps(TabList)}>
                {
                  data.map(({ content, disabled }, index) => (
                    <Tab disabled={disabled} key={index}>
                      {content}
                    </Tab>)
                  )
                }
              </TabList>
              <TabPanels activeIndex={tabProps.activeIndex}>
                {
                  data.map(({ content}) => <TabPanel>{content}</TabPanel>)
                }
              </TabPanels>
            </React.Fragment>
          )
        }
      </Tabs>
    )
    return (
      <div>
        <h1>Rendering components with {custom ? 'custom render' : 'default render'}</h1>
        <button onClick={this.toggleActive}>Toggle Render</button>
        { custom ?
          (
              <Tabs>
                {
                  ({ activeIndex, handleActivate, childProps }) => {
                    return (
                      <div>
                        <TabList {...childProps(TabList)}>
                          {
                            data.map(tab => <Tab disabled={tab.disabled}>{tab.content}</Tab>)
                          }
                        </TabList>
                        <TabPanels activeIndex={activeIndex}>
                          {
                            data.map(({ content }, index) => (
                              <TabPanel key={index}>
                                {content}
                              </TabPanel>
                            ))
                          }
                        </TabPanels>
                      </div>
                    )
                  }
                }
              </Tabs>
            )
            :
            (
              <Tabs tabList={CustomTabList}>
                <CustomTabList>
                  {
                    (props) => (
                      <div>
                        <button onClick={props.doBanana}>Banana Button</button>
                          {
                            data.map(({ content, disabled }, index) => (
                              <Tab disabled={disabled} key={index} {...props.childProps(index)}>
                                {content}
                              </Tab>)
                            )
                          }
                      </div>
                    )
                  }
                </CustomTabList>
                <TabPanels>
                  {
                    data.map(({ content}) => <TabPanel>{content}</TabPanel>)
                  }
                </TabPanels>
              </Tabs>
            )
          }
      </div>
    );
  }
}

export default Home;
