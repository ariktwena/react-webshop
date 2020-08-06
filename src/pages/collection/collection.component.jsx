import React from "react";

import './collection.styles.scss';

//Imported components
import CollectionItem from "../../components/collection-item/collection-item.component";

//Import higher component for redux
import { connect } from 'react-redux';

//Redux selectors
import { selectCollection } from '../../redux/shop/shop.selectors';

//match, location and history is automatically being passed in from the Route in the Shop.component.jsx file
//We have access to the "categoryId" because of the :categoryId in the Shop.component.jsx file
const CollectionPage = ({ match, collection }) => {

    // We can log the :collectionId and se for example /hats if we write localhost:3000/shop/hats
    //Params -> collectionId: hats.
    console.log(match);
    console.log(match.params.collectionId);
    console.log(collection);

    //Destructure collection
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>

            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item}/>)
                }
            </div>

        </div>
    )
}

//This advance routing need a part of the original state to know where to go
//The "ownProps" gives us all the usual props like "match" from the route
const mapStateToProps = ( state, ownProps ) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
// export default CollectionPage;