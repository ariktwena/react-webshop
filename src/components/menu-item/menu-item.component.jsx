import React from "react";

import './menu-item.styles.scss';

//We destructure our props to better display what we need, props => { title, imageUrl, size}
const MenuItem = ({ title, imageUrl, size }) => (
    //We give the large div's a bigger size, by incl. the class "large" via the size props that comes from the product array
    <div className={`menu-item ${size}`}>

        {/*//We can style our div with style={{font-color: blue}} etc. We write url's like this: `url(${imageUrl})`*/}
        {/*We can close a div like a component with: <div />*/}
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})` }} />

        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>

    </div>
)

export default MenuItem;
