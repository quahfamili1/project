import React from "react";

import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const AddressList = ({ addresses }) => {
  const arr = [
    { code: "12H", id: "1" },
    { code: "4gf", id: "2" },
  ];
  const AllRows = () =>
    addresses.map((address, index) => (
      <div key={index}>{address.address}</div>
    ));
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          itemCount={addresses.length}
          itemSize={35}
          width={width}
        >
          {AllRows}
        </List>
      )}
    </AutoSizer>
  );
};

export default AddressList;
