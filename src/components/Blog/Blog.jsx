import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full flex-wrap">
                    <p className='text-2xl font-semibold'>Tell us the differences between uncontrolled and controlled components.</p>
                    <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM elements current value and update the state accordingly.</p>
                </div>
                <div id="item2" className="carousel-item w-full flex-wrap">
                    <p className='text-2xl font-semibold'>How to validate React props using PropTypes</p>
                    <p>When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>
                </div>
                <div id="item3" className="carousel-item w-full flex-wrap">
                    <p className='text-2xl font-semibold'>Tell us the difference between nodejs and express js.</p>
                    <p>An extension of JavaScript, NodeJS is an open-source server-side runtime environment built around the NodeJS language. Using a single-threaded approach for web loading and asynchronous programming, the framework has achieved great success in being highly-performant and scalable. In addition, you may also benefit from using it to improve the backend functionality of your project by implementing Node JS-based frameworks like Express, Socket.io, and Meteor.</p>
                    {/* <p>ExpressJS is a framework for developing web applications with NodeJS. Among the two options, it is the most significant difference. The ExpressJS development services framework provides several exceptional features that make developing web apps easy and fast. By contrast, using the latter alone makes developing web apps more complex.</p> */}
                </div>
                <div id="item4" className="carousel-item w-full flex-wrap">
                    <p className='text-2xl font-semibold'>What is a custom hook, and why will you create a custom hook?</p>
                    <p>Custom React JS hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. Usually, if there is a requirement to add a feature, one can install a third-party library and solve the problem.</p>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Blog;