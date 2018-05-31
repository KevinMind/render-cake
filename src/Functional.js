import React from 'react';
import cn from 'classnames/bind';

import { Tabs, TabList, CustomTabList } from './components/faactabs/';
import { Tab, NewTab, TabPanels, TabPanel, Title, IMG } from './components/common';

import data from './data';

import styles from './Functional.scss';
const cx = cn.bind(styles);

{/*
1. demonstrate custom versus default render.

a. explain renderWrapper function(children, childProps, renderProps)

children: this.props.children
childProps: function(child, index)

-child props is a function passed to each child in default render, or manually in functional render that injects the props and methods desired from parent component

renderProps: the default props you send to render function, (includes childProps)

2. implement faac rendering on Tabs component

{
  (tabProps) => (
    <React.Fragment>
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
    </React.Fragment>
  )
}

3. demonstrate how props are now not injected automatically because we don't identify the tabList compoennt

fix by oberriding <Tabs tabList={TabList}>

4. still broken, because we did not call childProps on TabList.

can be fixed by not using faac rendering and simply identifying which child is to be considered tab list.
can be fixed by manually calling childProps on that component. <TabList className={cx('blue-text')} {...tabProps.childProps(TabList)}>

5. now we can render the active index <div>Currently active tab is {tabProps.activeIndex}</div>

6. not rendering the correct panel though, because TabPanel does not know what the active index is..

can be fixed by adding {...tabProps.childProps(TabPanels)}
since we only care about active index, we can simply add it <TabPanels activeIndex={tabProps.activeIndex}>

7. now we can also implement a custom tab list render with additional functionality


<Tabs tabList={CustomTabList}>
  {
    (tabProps) => (
      <React.Fragment>
        <div>Currently active tab is {tabProps.activeIndex}</div>
        <CustomTabList className={cx('blue-text')} {...tabProps.childProps(CustomTabList)}>
          {
            (tabListProps) => (
              <React.Fragment>
                <button onClick={tabListProps.doBanana}>Banana Button</button>
              {
                data.map(({ title, disabled }, index) => (
                  <Tab disabled={disabled} className={cx('blue-text')} {...tabListProps.childProps(Tab, index)}>
                    {title}
                  </Tab>)
                )
              }
              </React.Fragment>
            )
          }
        </CustomTabList>
        <TabPanels activeIndex={tabProps.activeIndex}>
          {
            data.map(({ title, src}) => (
              <TabPanel>
                  <Title label={title}/>
                  <IMG src={src} />
              </TabPanel>
            ))
          }
        </TabPanels>
      </React.Fragment>
    )
  }
</Tabs>


*/}

class Home extends React.Component {

  state = { custom : true }

  toggleActive = () => this.setState(({ custom }) => ({ custom: !custom }));

  render() {
    const { custom } = this.state;

    return (
      <div>
        <h1>Rendering components with {custom ? 'custom' : 'default'} render method</h1>
        <button onClick={this.toggleActive}>Toggle Render</button>
        { custom ?
          (
            <Tabs tabList={CustomTabList}>
              {
                ({ activeIndex, childProps }) => (
                  <React.Fragment>
                    <div>Currently active tab is {activeIndex}</div>
                    <CustomTabList className={cx('blue-text')} {...childProps(CustomTabList)}>
                      {
                        (tabListProps) => (
                          <React.Fragment>
                            <button onClick={tabListProps.doBanana}>Banana Button</button>
                          {
                            data.map(({ title, disabled }, index) => (
                              <Tab disabled={disabled} className={cx('blue-text')} {...tabListProps.childProps(Tab, index)}>
                                {title}
                              </Tab>)
                            )
                          }
                          </React.Fragment>
                        )
                      }
                    </CustomTabList>
                    <TabPanels activeIndex={activeIndex}>
                      {
                        data.map(({ title, src}) => (
                          <TabPanel>
                              <Title label={title}/>
                              <IMG src={src} />
                          </TabPanel>
                        ))
                      }
                    </TabPanels>
                  </React.Fragment>
                )
              }
            </Tabs>
            )
            :
            (
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
            )
          }
      </div>
    );
  }
}

export default Home;
