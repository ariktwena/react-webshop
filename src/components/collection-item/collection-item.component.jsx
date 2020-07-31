import React from "react";

import './collection-item.styles.scss';

import CustomButton from "../custom-button/custom-button.component";

const CollectionItem = ({ name, imageUrl, price }) => (
    <div className='collection-item'>

        <div className='image' style={{ backgroundImage: `url(${imageUrl})`}}>
            {/*<img src={imageUrl} alt=''/>*/}
        </div>

        <div className='collection-footer'>

            <span className='name'>{name}</span>
            <span className='price'>{price}</span>

        </div>

        {/*Custom button*/}
        <CustomButton inverted>Add to cart</CustomButton>

    </div>
)

export default CollectionItem;