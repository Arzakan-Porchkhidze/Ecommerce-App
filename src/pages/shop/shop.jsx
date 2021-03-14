import React, {useEffect, useState} from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import {  firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

import { updateCollections } from "../../redux/shop/shop.actions";

import CollectionsOverview from "../../components/collections-everview/collections-overview";
import CollectionPage from "../collection/collection";
import withSpinner from "../../components/with-spinner/with-spinner";
import collectionsOverview from "../../components/collections-everview/collections-overview";

const CollectionsOverviewWithSpinner = withSpinner(collectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage)


const ShopPage = ({match, updateCollections}) => {

  let usubscribeFromSnapShot = null;
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then( snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      setLoading(false)
    });
  },[])

  return(
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
      <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}/>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  updateCollections:collections => dispatch(updateCollections(collections))
})

export default connect(null,mapDispatchToProps)(ShopPage);