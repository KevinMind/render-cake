import React from 'react';
import cn from 'classnames/bind';
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import Compound from './Compound';
import Render from './Render';

import styles from './App.scss'
const cx = cn.bind(styles);

const NavBar = ({ children, to, location }) => (
  <div className={cx('nav-bar')}>
    {
      React.Children.map(children, (child, index) => {
        const active = location.pathname === child.props.to;
        return (
          React.cloneElement(child, {
            className: cx('link', { active })
          })
        )
      })
    }
  </div>
)

const Menu = withRouter(NavBar)

const App = () => (
  <React.Fragment>
    <Menu>
      <Link to="/compound">Compound</Link>
      <Link to="/render">Render</Link>
    </Menu>
    <Switch>
      <Route exact path="/compound" component={Compound} />
      <Route exact path="/render" component={Render} />
    </Switch>
  </React.Fragment>
);

export default App;
