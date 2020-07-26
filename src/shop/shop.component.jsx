import React from "react";

import './shop.styles.scss';

//Import fake shop collection items
import SHOP_DATA from "../shopping_data/shop.data";

//Import collection-preview component
import CollectionPreview from "../components/collection-preview/collection-preview.component";


class ShopPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {

        //We make state to a constant
        const { collections } = this.state;

        return (
            <div>
                {
                    //Se "directory" file for pointers why we do this. Here we just first convert "state" to a const
                    //We use ...otherSectionProps to auto fill the values for the props with the exact props name
                    collections.map( ({ id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))}
                }

            </div>
        )
    }

}

export default ShopPage;