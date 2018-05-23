## What is better than a render prop, a map children, or a hoc?

## An hoc that conditionally renders children or render props.


##Main Problems renderWrapper solves:

1. customizing render of nested children from complex components.

<component>
  <child>
    <grandchild classname='can-not-touch' />
  </child>
</component>

2. separates presentation development, and implementation development.

I can change anything about render function without touching my parent component.

The key is:

1. function focused components consider their rendering a black box.
All they care about is managing their state, generating render data, and spitting it out.

2. presentation focused components consider the data they receive a black box.
They are given data, and they work with it. Default render components have the
implementation of the render baked in, easy, quick, hard to customize. Render functions
do the same thing, but let you control the render to your hearts content.

##DownSides:

1. can be difficult if you want to put styles into default render props.

##why is Render wrapper better than render prop.

It does everything render prop does, but uses children rather than prop. This keeps
dev experience consistent.

The two patterns below are more or less the same. You can think about them the same and in fact
their end result is the same. One lets you see and interact with your components
children rendering, the other handles it for you.

<Component>
  <child />
</Component>

<Component>
  {
    (props) => <child custom="foo" {...props} />
  }
</Component>

## The question of render={() => <This />} versus <component>{() => <This />}</component>

Pros:
1. in the question above, a render prop looks cleaner and is actually less code.
2. render prop is more explicit than relying on typeof children.
3. render prop function allows me to keep my data and render concerns coupled, which is nice.

Cons:
1. render prop requires we pass a data prop as well to map over. This makes implementation more complicated.
2. the implementation of renderprop is not as intuitively similar to render function

##presentation

1. install project
2. overview of structure

src/
--components/
----compoundtabs
----rendertabs
----common.js
----hoc.js
Compound.js
Render.js
App.js
*

3. Demonstrate accessing styles on common.js componenst from Compound.js,
4. Add a nested styled component to TabPanels called Huge.
5. Try to change style with className (BAD)
6. Try to change style with props. (BAD)
7. Try to change stlye with className object (BAD)

4. Introduce idea of render prop method.
5. you can implement the exact same behavior and allow customization by changing
very little code.
6. with a few more tweaks you have a pattern that is reusable and safe.

renderPropFunction

1. parent must return renderWrap hof which accepts (children, childProps, and defaultProps)
2. parent must have childProps function which accepts child component and index
3. parent.children must be either function <parent>{(props) => <children {...props} />}</parent>
or default children components.
4. go over benefits and draw backs.

5. demonstrate overriding render components
6. demonstrate how default props are passed.


7. Conclusion:

  The results of this approach are a different way of thinking about component composition.

  1. Components that care about props of their children should not explicitly render them.
  The state and props and methods that are important should be passed to a childProps function which
  will invest these properties to the children.
  2. Render Component Design should not be overly complicated. If you Tabs component
  requires 5 layers of nested components, it should be broken up into smaller chunks that
  are then composed separately.

  <Tab /> ==> this component should not be responsible for rendering more than
  1 or 2 layers of render components.
