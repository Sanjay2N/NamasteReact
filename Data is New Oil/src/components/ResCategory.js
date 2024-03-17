import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = (props) => {
  const { data, showItem, setShowIndex, index, showIndex } = props;
  function clickHandler() {
    if (index == showIndex) {
      setShowIndex(-1);
      return;
    }
    setShowIndex(index);
  }
  return (
    <div className="w-6/12 mx-auto mt-3 border-solid p-4 border-black border-[1px] rounded-md shadow-xl">
      <div
        key={data.id}
        className="  justify-between flex flex-wrap  cursor-pointer"
        onClick={clickHandler}
      >
        <h2 className="font-bold">
          {data.title} ({data.itemCards.length})
        </h2>
        <span>Down</span>
      </div>
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default ResCategory;
