import { CDN_URL } from "../utils/constant";

export default function ResturantCard({ res }) {
  const { name, cuisines, areaName, avgRating, cloudinaryImageId } = res?.info;
  return (
    <div className="shadow-lg box-border p-3 rounded-md bg-gray-200 hover:bg-gray-300 ">
      <div>
        <img className="rounded-md" src={CDN_URL + cloudinaryImageId}></img>
      </div>
      <h3 className="font-bold py-2 text-xl">{name}</h3>
      <p>
        {" "}
        <span className="font-bold">Cuisine -</span> {cuisines.join(", ")}
      </p>
      <h5>{areaName}</h5>
      <h5>Rating - {avgRating}</h5>
    </div>
  );
}

export const withResturantPromoted = (ResturantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white px-4 rounded-md m-1">Promoted</label>
        <ResturantCard {...props} />
      </>
    );
  };
};
