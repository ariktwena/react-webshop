import React from "react";

//Import Scss file styling
import './homepage.styles.scss';

//Import Directory component
import Directory from "../../components/directory/directory.component";

//We build a homepage component, that will hold the other smaller components inside
const HomePage = () => (
    <div className='homepage'>
        <Directory />
        {/*<div className='directory-menu'>*/}
        {/*    <div className='menu-item'>*/}
        {/*        <div className='content'>*/}
        {/*            <h1 className='title'>HATS</h1>*/}
        {/*            <span className='subtitle'>SHOP NOW</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className='menu-item'>*/}
        {/*        <div className='content'>*/}
        {/*            <h1 className='title'>JACKETS</h1>*/}
        {/*            <span className='subtitle'>SHOP NOW</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className='menu-item'>*/}
        {/*        <div className='content'>*/}
        {/*            <h1 className='title'>SNEAKERS</h1>*/}
        {/*            <span className='subtitle'>SHOP NOW</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className='menu-item'>*/}
        {/*        <div className='content'>*/}
        {/*            <h1 className='title'>WOMEN'S</h1>*/}
        {/*            <span className='subtitle'>SHOP NOW</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className='menu-item'>*/}
        {/*        <div className='content'>*/}
        {/*            <h1 className='title'>MEN'S</h1>*/}
        {/*            <span className='subtitle'>SHOP NOW</span>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
    </div>
)

export default HomePage;



