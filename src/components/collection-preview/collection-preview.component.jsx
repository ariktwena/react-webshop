import React from "react";

import './collection-preview.styles.scss';

//Import CollectionItem
import CollectionItem from "../collection-item/collection-item.component";

//We destructure the props like we did in the directory, props => { title, }
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>

            {/*We will map over the items array*/}
            {
                //We filter, so we only show 4 items
                items
                    .filter((item, index) => index < 4) //index 0, 1, 2, 3 is 4 element. currentElement = item
                    .map(({ id, ...otherItemProps}) => ( //We destructor the items props
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }

        </div>
    </div>
)

export default CollectionPreview;