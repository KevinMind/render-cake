import React from 'react';

export default (children, childProps, renderProps) => {
  console.log(renderProps);
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

  return (
    React.Children.map(children, (child, index) => {
      let Child = React.cloneElement(child, {});
      childProps.map(prop => {
        Child = <Child {...prop(Child, index)} />;
        return;
      });
      return Child;
    })
  )
}
