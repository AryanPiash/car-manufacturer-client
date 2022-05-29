import React from 'react';

const Blogs = () => {
    return (
        <div className='my-12'>
            <div className='mb-4 w-4/5 mx-auto border p-4 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>How will you improve the performance of a React Application?</h1>
                <p>Several clever and performance optimization techniques are used in React internally to minimize the number of costly DOM operations required to update the UI. This generally leads to a faster user interface without specifically optimizing for performance for many cases, and there are ways where you can still speed up your React application..Use a Production build before deployment.Avoid Adding Extra Nodes to the DOM by using React. Fragment.Immutable Data Structures.Avoid Anonymous Functions.App's loading time improvement by lazy loading.</p>
            </div>
            <div className='mb-4 w-4/5 mx-auto border p-4 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>What are the different ways to manage a state in a React application?</h1>
                <p>There have some different way to manage state: Communication State,That's when you introduced the communication system in your app. Data State,Data state covers information that your React application stores temporarily for various business functions. Control State,Contrary to the state mentioned above in a React app, the control state does not represent the application's environment. Session State,Session states can only be read when a component is mounted, which means that you store a copy of the information already present in the Control state.  Location State,Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them</p>
            </div>
            <div className='mb-4 w-4/5 mx-auto border p-4 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>How does prototypical inheritance work?</h1>
                <p>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.All JavaScript objects inherit properties and methods from a prototype.</p>
            </div>
            <div className='mb-4 w-4/5 mx-auto border p-4 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>What is a unit test? Why should write unit tests?</h1>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.Reasons Why should write Unit Test: Discipline and Rigor,Reduce Cyclomatic Complexity,Your Software Is Used Before Delivery,Measure the Effort Needed to Modify an Existing Feature,Enforces Inversion of Control/Dependency Injection Patterns,Code Coverage,Performance,Enables Continuous Integration.</p>
            </div>
            <div className='mb-4 w-4/5 mx-auto border p-4 rounded-xl'>
                <h1 className='text-xl font-semibold mb-4'>What is a unit test? Why should write unit tests?</h1>
                <p>One should never update the state directly because of the following reasons:If you update it directly, calling the setState() afterward may just replace the update you made.When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.You will lose control of the state across all components.In React, whenever a component is rendering either in theMounting phase or in Updating Phase, it always renders all the components that are in its tree.</p>
            </div>
        </div>
    );
};

export default Blogs;