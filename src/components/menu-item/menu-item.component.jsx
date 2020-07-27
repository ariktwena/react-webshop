import React from "react";

//Import of history from Router => withRouter is a function that we use to wrap "MenuItem" in, so it gets access to history
import { withRouter } from "react-router"; //This is "react-router" that comes with "react-router-dom" install

import './menu-item.styles.scss';

//We destructure our props to better display what we need, props => { title, imageUrl, size}
//From the withRouter we get access to history and match
const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
    //We give the large div's a bigger size, by incl. the class "large" via the size props that comes from the product array
    <div className={`menu-item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>

        {/*//We can style our div with style={{font-color: blue}} etc. We write url's like this: `url(${imageUrl})`*/}
        {/*We can close a div like a component with: <div />*/}
        {/*We put the background in it'sown div, because we only want the image to resize when we hover*/}
        {/*<div className='background-image' style={{backgroundImage: `url(${imageUrl})` }} />*/}
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})` }} />

        <div className='content'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>

    </div>
)

export default withRouter(MenuItem);
