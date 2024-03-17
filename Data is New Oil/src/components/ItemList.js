import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-b-2 boarder-black flex flex-wrap justify-between"
          >
            <div className="w-10/12">
              <div className="text-left font-semibold">
                <span>{item.card.info.name}</span>

                <span>
                  {" "}
                  -{" ₹"}
                  {item.card.info?.defaultPrice
                    ? item.card.info.defaultPrice / 100
                    : item.card.info.price / 100}
                </span>
              </div>

              <div>
                <p className="text-sm ">{item.card.info.description}</p>
              </div>
            </div>
            <div className="w-24 h-24">
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-full"
              ></img>
              {/* <button className="absolute ">Add</button> */}
              <div className="absolute mx-6 -my-8 ">
                <button className="rounded bg-black px-3  text-white ">
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
