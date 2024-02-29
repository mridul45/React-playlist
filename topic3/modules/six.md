# Managing State

1. State Represents the data that changes over time.
2. State is local and private to the component.
3. State changes cause the component to re-render.
4. For functional components use the useState hook.
5. React functions that start with use are called hooks.
6. Hooks should only be used inside components.
7. Parent components can pass state down to children via props.
8. Lifting state up: share state between components by moving it to their closest common ancestor.



# State vs Props

__State__

1. Local and mutable data within a component.
2. Initialized within a component.
3. Can change over time.
4. Causes rerender when updated.
5. Managed using useState in functional components.


__Props__

1. Passed into a componentfrom its parent.
2. Read only within the receiving component.
3. Allow parent-to-child component communication.
4. Changes in props can also cause a rerender.