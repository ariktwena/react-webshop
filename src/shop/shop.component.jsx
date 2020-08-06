import React from "react";

import './shop.styles.scss';

import { Route } from 'react-router';

//Import collection-preview component
import CollectionPreview from "../components/collection-preview/collection-preview.component";
import CollectionsOverview from "../components/collections-overview/collections-overview.component";
import CollectionPage from "../pages/collection/collection.component";

//Import higher component for redux
import { connect } from 'react-redux';

//Redux selectors
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from '../redux/shop/shop.selectors';


//Import fake shop collection items
import SHOP_DATA from "../shopping_data/shop.data";
//****** Before global state
// class ShopPage extends React.Component{
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             collections: SHOP_DATA,
//         }
//     }
//
//     render() {
//
//         //We make state to a constant
//         const { collections } = this.state;
//
//         return (
//             <div>
//                 {
//                     //Se "directory" file for pointers why we do this. Here we just first convert "state" to a const
//                     //We use ...otherSectionProps to auto fill the values for the props with the exact props name
//                     collections.map( ({ id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
//                 }
//
//             </div>
//         )
//     }
//
// }


//********* After global state
// const ShopPage = ({ collections }) =>
//     (
//         <div>
//             {
//                 //Se "directory" file for pointers why we do this. Here we just first convert "state" to a const
//                 //We use ...otherSectionProps to auto fill the values for the props with the exact props name
//                 collections.map( ({ id, ...otherCollectionProps}) => (<CollectionPreview key={id} {...otherCollectionProps}/>))
//             }
//
//         </div>
//         )

//***** After making a Collections-overview
//match, location and history is automatically being passed in from the Route in the App.js file
const ShopPage = ({ match }) => {

    //Display match.path in the console
    console.log(match);
    console.log(match.path);

    return (
        <div>
            {/*We make nested routing depending on the page/collection we want to view */}
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            {/*We want to route to the categories, and by using ":categoryId" we now have it as a parameter in the CategoryPage component*/}
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </div>
    )
}



// //ADVANCED WAY of destructuring the globalState
// const mapStateToProps = createStructuredSelector({
//     collections: selectShopCollections,
// });
//
// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;