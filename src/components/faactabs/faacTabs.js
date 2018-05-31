import React from 'react';
import PropTypes from 'prop-types';
import renderWrapper from '../hoc';

export class CustomTabList extends React.Component {

  childProps = (child, index) => {
    const { activeIndex, onActivate } = this.props;
    return {
      active: index === activeIndex,
      onClick: () => onActivate(index),
    };
  };

  doBanana = () => alert('banana be done yo.');

  render() {
    const { props: { children, activeIndex, onActivate }, childProps, doBanana } = this;
    return renderWrapper(children, childProps, { activeIndex, onActivate, childProps, doBanana })
  }
};


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
    const { tabList } = this.props;
    // this can probably be implemented better. We are essentially trying to identify a default childType or a specific child based on some property.
    const isTabList = child.type === tabList || child === tabList;
    const { activeIndex } = this.state;
    return {
      activeIndex,
      onActivate: isTabList
      ? (activeIndex) => this.handleActivate(activeIndex)
      : null,
      banana: isTabList ? 'tablist' : 'banana'
    }
  }

  render() {
    const { props: { children }, state: { activeIndex }, handleActivate, childProps } = this;
    return renderWrapper(children, childProps, { activeIndex, handleActivate, childProps });
  };
};

Tabs.propTypes = {
  tabList: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ])
}

Tabs.defaultProps = {
  tabList: TabList,
};

export default Tabs;
