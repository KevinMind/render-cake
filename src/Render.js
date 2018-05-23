import React from 'react';
import cn from 'classnames/bind';

import { Tabs, TabList } from './components/rendertabs/';
import { Tab, NewTab, TabPanels, TabPanel } from './components/common';

import data from './data';

import styles from './Render.scss';
const cx = cn.bind(styles);

class Home extends React.Component {

  state = { custom : false }

  toggleActive = () => this.setState(({ custom }) => ({ custom: !custom }));

  render() {
    const { custom } = this.state;
    return (
      <div>
        <h1>Rendering components with {custom ? 'custom render' : 'default render'}</h1>
        <button onClick={this.toggleActive}>Toggle Render</button>
        { custom ?
          (
              <Tabs>
                {
                  ({ activeIndex, handleActivate, childProps }) => (
                        <div>
                          <TabList className={cx('tabs-list')} onActivate={handleActivate}>
                            {
                              data.map(({ content, disabled }, index) => {
                                const active = activeIndex === index;
                                const newTabProps = childProps(NewTab, index)
                                return (
                                  <NewTab
                                    className={cx('custom-tab-class', { active })}
                                    disabled={disabled}
                                    {...newTabProps}
                                  >{content}</NewTab>
                                )
                              })

                            }
                          </TabList>
                          <TabPanels activeIndex={activeIndex}>
                            {
                              data.map(({ content }) => <TabPanel>{content}</TabPanel>)
                            }
                          </TabPanels>
                        </div>
                    )
                }
              </Tabs>
            )
            :
            (
              <Tabs>
                <TabList>
                  {
                    data.map(({ content, disabled }) => (
                      <Tab disabled={disabled}>
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
            )
          }
      </div>
    );
  }
}

export default Home;
