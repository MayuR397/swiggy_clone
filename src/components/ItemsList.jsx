import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch()
  console.log(items)
  function handelAddItems (data){
      dispatch(addItems(data))
  }
  return (
    <>
      <div className="">
        {items.map((ele) => (
          <div key={ele.card.info.id} className="flex m-4 mb-8 border-b-2 pb-8">
            <div className="w-10/12">
              <p className="fo  nt-bold text-gray-700">{ele.card.info.name}</p>
              <p className="text-gray-600 mb-4">
                ₹
                {ele.card.info.defaultPrice
                  ? ele.card.info.defaultPrice / 100
                  : ele.card.info.price / 100}
              </p>
              <p className="text-gray-500">{ele.card.info.description}</p>
            </div>
            <div className="w-2/12">
                <button onClick={()=> handelAddItems(ele)} className="bg-black text-white px-2 rounded-md absolute ml-6 mt-2 border border-white" >Add +</button>
                <img src={CDN_URL+ ele.card.info.imageId} alt="" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
