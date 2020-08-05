import React from "react";

import './collections-overview.styles.scss';

//Import collection-preview component
import CollectionPreview from '../collection-preview/collection-preview.component';

//Import higher component for redux
import { connect } from 'react-redux';

//Redux selectors
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {
            //Se "directory" file for pointers why we do this. Here we just first convert "state" to a const
            //We use ...otherSectionProps to auto fill the values for the props with the exact props name
            collections.map( ({ id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
        }
    </div>
)

//ADVANCED WAY of destructuring the globalState
const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
// export default CollectionsOverview;