import React from 'react';

export default (children, childProps, renderProps) => {
  if (typeof children === 'function') {
    return children(renderProps)
  }
  return (
    React.Children.map(children, (child, index) => {
      return React.cloneElement(child, {
        ...childProps(child, index)
      })
    })
  );
}
