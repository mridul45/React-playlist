# How does react works.

__Root Component__

1. The app is the main or root component of a React application.
2. It's the starting point of your React's component tree.

__Virtual DOM__

1. React creates an in memory structure called the virtual DOM.
2. Different from the actual browser DOM.
3. Lightweight representation where each node stands for a component and it's attributes.


__Reconciliation Process__

1. When component data changes, React updates the virtual DOM state to mirror these changes.
2. React then compares the current and previous versions of the virtual DOM.
3. It identifies the specific nodes that needs updating.
4. Only these nodes are updated in the real browser DOM , making it efficient.


__React and ReactDOM__

1. The actual updating of the browser's DOM isn't done by React itself.4
2. It is handled by a companion library called react-dom.


__Root Element__

1. The root div acts as a container for the React app.
2. The script tag is where the React app starts executing.
3. If you check main.tsx, the component tree is rendered inside this root element.


__Strict Mode Component__

1. It's a speciall component in React.
2. Dosen't have a visual representation.
3. It's purpose is to spot pontential issues in your React app.


__Platform Independence__

1. React's design allows it to be platform-agnostic.
2. While React-dom helps build web uis using React , React Native can be used to craft mobile app UIs.