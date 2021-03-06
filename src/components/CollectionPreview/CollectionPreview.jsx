import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";

import "./CollectionPreview.scss";

const CollectionPreview = ({ title, items }) => {
  console.log(items);
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
