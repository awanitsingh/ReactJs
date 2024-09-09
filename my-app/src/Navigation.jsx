import React from 'react';
import './Navigation.css';
function Navigation(props)
{
    return (
        <nav class='nav'>
        <span class="title"><a href='#home'>{props.title}</a></span>
        <span><a href='#contact'>{props.type}</a></span>
        <span><a href='#About'>About US</a></span>
        <div>
            <input type="search" placeholder='Search here'/>
            <button>Go</button>
        </div>
        </nav>
        
    )
};
Navigation.defaultProps={
    title: "React"
}
export default Navigation;