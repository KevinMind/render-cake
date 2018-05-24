import React from 'react';
import renderWrapper from '../hoc';

export class TabList extends React.Component {

  childProps = (child, index) => {
    const { activeIndex, onActivate } = this.props;
    return {
      active: index === activeIndex,
      onClick: () => onActivate(index),
    };
  };

  render() {
    const { props: { children, activeIndex, onActivate }, childProps } = this;
    return renderWrapper(children, childProps, { activeIndex, onActivate, childProps })
  }
};

class Tabs extends React.Component {
  state = { activeIndex: 0 }

  handleActivate = (activeIndex) => this.setState({ activeIndex });

  childProps = (child, index) => {
    console.log(child.type);
    const { activeIndex } = this.state;
    return {
      activeIndex,
      onActivate: child.type === TabList
      ? (activeIndex) => this.handleActivate(activeIndex)
      : undefined,
      banana: child.type === TabList ? 'tablist' : 'banana'
    }
  }

  render() {
    const { props: { children }, state: { activeIndex }, handleActivate, childProps } = this;
    return renderWrapper(children, childProps, { activeIndex, handleActivate, childProps });
  };
};

export default Tabs;
