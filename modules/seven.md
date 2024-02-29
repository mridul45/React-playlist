# Context API

1. Context API addresses __prop drilling__ , component composition is alternative.
2. Use a store folder for context files.
3. Use React.createCOntext with initial state and export it.
4. Implement with contextName.Provider in components.
5. Use the useContext hook.
6. Combine context value with state.
7. Context can also export functions for actions.
8. Helps to keep ui and business logic separate.


# Use Reducer

1. Is a hook in React that offers more control over state operations compared to use state, especially for complex state logic.

2. It involves two main components reducer and action. A reducer is a pure function that takes the current state and an action and returns a new state. An action is an object describing what happened, typically having a type property.

3. It's invoked as const[state,dispatch] = useReducer(reducer,initialState).
4. Actions are dispatched using the dispatch function, which invokes the dispatch function, which invokes the reducer with the current state and the given action.

5. Particularly useful for managing state in large components or when the next state depends on the previos ones.

6. Due to strict structure, it leads to more predictable and maintainable state management.