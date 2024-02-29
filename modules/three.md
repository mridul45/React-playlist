# Components

The naming convention of a Component is capital only.

__Components are Javascript funvtion.__

Below is an example of a functional component.

```
function App(){
  return <h1>
    This is the stating of the react tut.
  </h1>
}

export default App;

```

__Functional Component vs className Based Components__

| Feature                        | Functional Components                | className-based Components              |
| ------------------------------ | ------------------------------------ | ---------------------------------- |
| **Syntax**                     | Uses function keyword                | Uses className keyword                 |
| **State**                      | No local state                       | Can have local state using `this.state` |
| **Lifecycle Methods**          | No lifecycle methods                 | Has lifecycle methods like `componentDidMount`, `componentDidUpdate`, etc. |
| **Usage of 'this' Keyword**    | No 'this' keyword                    | Uses 'this' to access className properties and methods |
| **State Management**           | Uses `useState` hook for state       | Uses `this.setState` for state management |
| **Code Organization**          | Generally shorter and cleaner code   | More boilerplate and verbose code  |
| **Readability**                | Generally considered more readable   | May be considered more complex and harder to read |
| **Performance**                | Slightly more efficient due to lightweight nature | Slightly less efficient due to the overhead of className instantiation and method binding |
| **Use of Refs**                | Uses `useRef` hook for refs          | Uses `ref` attribute for refs      |
| **Context API**                | Can use context with `useContext`    | Can use context with `this.context` or `static contextType` |
| **Hooks**                       | Uses hooks like `useState`, `useEffect`, etc. | Does not use hooks (prior to React 16.3) |


__JSX__

1. JSX determines how the UI will look wherever the component is used.
2. Though it resembles HTML , actually JSX stands for Javascript and XML.
3. JSX gets converted to regular JavaScript.


__Note__

```
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


```

The above code is loaded in the browser. The JSX is injected in the root div.

__Hense with the help of React we can make custom components__.


# Making a Button component.

__Button.jsx__

```
function Button(){
    return <button>React</button>
}

export default Button;

```


__App.jsx__

```
import Button from "./Button";

function App(){
  return <>
    <h1>
      Hello
    </h1>

    <Button/>
  </>
}

export default App;

```


# Exporting Components

Enables the use of components in other parts of the project.

1. _Default Exporting_: Allows exports a single component as the default form a module.
2. _Named Export_: Allows exporting multiple items from a module.
3. _Importing_: To use an exported component, you need to import it in the destination file using import syntax.


# Other Important Points.

1. Naming must be capitaised.
2. Unlike vanilla JS , where we cannot directly write HTML , in React we can embed HTML like syntax using JSX.
3. In React, CSS can be direclty imported into component files, allowing for modular and component specific styling.


# Dynamic Components

1. __Dynamic Content__: JSX allows the creaion of dynamic and interactive UI components.
2. __JavaScript Expressions__: Using {}, we can embed any JS expression directly within JSX. This included variables, function calls and more.


_Below is an example of a Dynamic Component_

```
function Hello(){

    let myName = "Mridul";
    let messageNum = 50;
    let fullName = () => {
        return "Mridul Singhal"
    }

    return <h3>Message no. {messageNum} Hello this is the future speaking. I am the man {fullName()}</h3>
}

export default Hello;

```


# Resuable Component

1. __Modularity__: Components are moduler, allowing for easy reuse across different parts of an application.
2. __Consistancy__: Reusing components ensures UI consistency and reduces the chance of discrepancies.
3. __Efficiencies__: Reduces development time and effort by avoiding duplication of code.
4. __Maintainability__: Changes made to a reused component reflect everywhere it's used, simplifying updates and bug fixes. 