import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { removeItems } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const dispatch = useDispatch()
  return (
    <>
      <div className="text-center text-2xl font-bold mb-8">Cart</div>
      <button onClick={()=>  dispatch(removeItems())}>Empty Cart</button>
      <div className="w-7/12 m-auto">
        <ItemsList items={cartItems} />
      </div>
    </>
  );
};
export default Cart;
