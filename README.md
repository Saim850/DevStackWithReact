# DevStack

DevStack is a simple and responsive web application where users can explore different technologies and build their own technology stack.

## Features

* Explore different technologies
* Add technologies to your stack
* Remove specific technologies from your stack
* Remove all technologies from your stack
* Responsive design
* Clean and simple user interface

## Sections

* Navbar
* Hero Section
* Explore Technologies
* Footer

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* Vite

## Author

Sayeem Ahmed

---

# Questions & Answers

### 1. What is JSX, and why is it used in React?

**Ans:** JSX are allow to write HTML code in Javascript function. We use JSX to write HTML code in javascript function.

---

### 2. What is the difference between props and state?

**Ans:** Props are use to pass data from parent components to child components and State are use to store data in react.

---

### 3. What does the useState hook do, and where did you use it in this project?

**Ans:** useState are mainly used to store data or information about the component and that can change over time.

---

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

**Ans:** useEffect are used to run side effect code after react renders a components.

---

### 5. Why does every item in a .map() list need a unique key prop?

**Ans:** Every items in React map list need a unique so React can identify which items have change, added or removed.

---

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

**Ans:** Conditional rendering is used in React to render blocks of code based on conditions.

**Example:**

```jsx
{stack.length === 0 ?
    <p>No technologies selected yet.</p>
:
    <p>{stack.length} Technologies Selected</p>
}
```

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

**Ans:** In React we can pass data from a parent component to a child component using props and a child component can't pass data from a parent components but a parent component pass function as a props to a child component and child call that function with the data.
