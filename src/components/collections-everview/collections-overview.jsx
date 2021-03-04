import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollcetionPreview from "../collection-preview/collection-preview";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.scss";

const CollectionsOverview = ({collections}) => {
  return (
    <div className='collections-overview'>
      {collections.map( ({id, ...otherCollectionProps}) => 
        <CollcetionPreview key={id}  {...otherCollectionProps}/>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})
 
export default connect(mapStateToProps)(CollectionsOverview);