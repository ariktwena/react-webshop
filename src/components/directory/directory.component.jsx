import React, { Component } from "react";

//Import styles
import './directory.styles.scss';

//Import MenuItem
import MenuItem from "../menu-item/menu-item.component";

//We make a class component because we need to create a state
class Directory extends Component {
    constructor(props) {
        super(props);

        //We set our state value
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    size: '',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    size: '',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    size: '',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    //We give this object a size, so we can style it, if the class has the "large" class
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }

    }

    render() {
        return (
            <div className='directory-menu'>
                {/*We loop trough our sections in the state, and generate a new "MenuItem" for every section in the sections array*/}
                {/*We destructure the "currentElement" => currentElement = { title, imageUrl, id }*/}
                {
                    //We use ...otherSectionProps to auto fill the values for the props with the exact props name
                    this.state.sections.map( ({ id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>))
                    //This is how we write it in the old way
                    // this.state.sections.map( ({ title, imageUrl, id, size, linkUrl }) => (
                    //     <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>))
                }
            </div>
        )
    }
}

export default Directory;