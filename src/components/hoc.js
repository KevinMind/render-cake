import React from 'react';

export default (children, childProps, renderProps) => {
  console.log(children);
  if (typeof children === 'function') {
    return children(renderProps)
  }
  return (
    React.Children.map(children, (child, index) => {
      const props = childProps(child, index);
      return React.cloneElement(child, {
        ...props
      })
    })
  );
}
