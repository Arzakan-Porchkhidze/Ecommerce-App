import React, {useState} from "react";
import CollcetionPreview from "../../components/collection-preview/collection-preview";
import Shop_Data from "./shop.data";

const ShopPage = () => {
  const [collections, setCollection] = useState(Shop_Data);

  return(
    <div className='shop-page'>
      {collections.map( ({id, ...otherCollectionProps}) => 
        <CollcetionPreview key={id}  {...otherCollectionProps}/>
      )}
    </div>
  );
}


export default ShopPage;