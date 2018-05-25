import React from 'react';

import { TabPanels } from '../common';

export const TabList = ({ children, activeIndex, onActivate, className }) => (
  React.Children.map(children, (child, index) => {
    return (
      React.cloneElement(child, {
        key: index,
        active: index === activeIndex,
        onClick: () => onActivate(index)
      })
    )
  })
);

class Tabs extends React.Component {
  state = { activeIndex: 0 }

  handleActivate = (activeIndex) => this.setState({ activeIndex });

  render() {
    const { children } = this.props;
    const { activeIndex } = this.state;

    return (
      React.Children.map(children, (child, index) => {
        if (child.type === TabPanels) {
          return React.cloneElement(child, {
            key: index,
            activeIndex: activeIndex
          })
        } else if (child.type === TabList) {
          return React.cloneElement(child, {
            key: index,
            activeIndex: this.state.activeIndex,
            onActivate: (activeIndex) => this.handleActivate(activeIndex)
          })
        } else {
          return child
        }
      })
    )

    return (
      <div>
        <h2>active tab is: {activeIndex}</h2>
        {
          React.Children.map(children, (child, index) => {
            if (child.type === TabPanels) {
              return React.cloneElement(child, {
                key: index,
                activeIndex: activeIndex
              })
            } else if (child.type === TabList) {
              return React.cloneElement(child, {
                key: index,
                activeIndex: this.state.activeIndex,
                onActivate: (activeIndex) => this.handleActivate(activeIndex)
              })
            } else {
              return child
            }
          })
        }
      </div>
    );
  };
};

export default Tabs;
