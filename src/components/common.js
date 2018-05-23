import React from 'react';
import cn from 'classnames/bind';
import { Huge } from 'components/Huge';
import styles from './common.scss';
const cx = cn.bind(styles);

export const Tab = ({ children, disabled, active, onClick, className }) => (
  <div
    onClick={disabled ? null : onClick}
    className={cx('tab', className, { disabled, active })}
  >
    <div className={cx('tab-component')}>
      {children}
    </div>
  </div>
);

export const NewTab = ({ children, disabled, active, onClick, className }) => (
  <div
    onClick={disabled ? null : onClick}
    className={cx('tab', className, { disabled, active })}
  >
    <div>
      {children}
    </div>
  </div>
);

export const TabPanels = ({ children, activeIndex, className }) => (
  <div className={cx('tab-panels', className)}>
    <div><span>deeply<span>nested<Huge className={cx(className)}>item</Huge></span></span></div>
    {children[activeIndex]}
  </div>
);

export const TabPanel = (props) => <div className={cx('tab-panel')}>{props.children}</div>;
