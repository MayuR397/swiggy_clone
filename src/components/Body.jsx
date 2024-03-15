import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ResturantCard, { withResturantPromoted } from "./ResturantCard";
import Shimer from "./Shimer";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  const [resList, setResList] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [search, setSearch] = useState("");
  const onlineStatus = useOnlineStatus();

  const ResturantPromoted = withResturantPromoted(ResturantCard);

  useEffect(() => {
    fetchRes();
  }, []);

  async function fetchRes() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9160035&lng=77.64267889999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    console.log(
      res.data.cards[1].card
    );
    setResList(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResturant(
      res.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  async function updateData() {
    const url = "https://www.swiggy.com/dapi/restaurants/list/update";
    const requestData = {
      filters: {},
      lat: 12.9160035,
      lng: 77.64267889999999,
      nextOffset: "COVCELQ4KIDg6bOdkrSwdDCnEw==",
      page_type: "DESKTOP_WEB_LISTING",
      seoParams: {
        seoUrl: "https://www.swiggy.com/",
        pageType: "FOOD_HOMEPAGE",
        apiName: "FoodHomePage",
      },
      widgetOffset: {
        NewListingView_category_bar_chicletranking_TwoRows: "",
      },
      _csrf: "3kFh3GjvbYpF-qJyYr56ib0hjBUvBgH3fx81X_YA",
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {},
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error; // Propagate the error if needed
    }
  }

  if (onlineStatus == false) return <h1>Looks like you are offline...</h1>;

  return (
    <div className="body-section">
      <div className="search-filter-div flex mb-4">
        <div className="search-div">
          <input
            className=" border border-black rounded-sm ml-4 mr-4"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className=" bg-green-300 p-1 rounded-md"
            onClick={() => {
              const filteredRes = resList.filter((ele) =>
                ele.info.name.toLowerCase().includes(search.toLocaleLowerCase())
              );
              setFilteredResturant(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn ml-40 bg-gray-200 p-1 rounded-md"
            onClick={() => {
              const filteredData = resList.filter(
                (ele) => ele.info.avgRating > 4.4
              );
              setFilteredResturant(filteredData);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
      </div>

      {filteredResturant.length === 0 ? (
        <Shimer />
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filteredResturant.map((ele) => (
            <Link key={ele.info.id} to={"resturant/" + ele.info.id}>
              {ele.info.avgRating >= 4.4 ? (
                <ResturantPromoted res={ele}/>
              ) : (
                <ResturantCard res={ele} />
              )}
            </Link>
          ))}
        </div>
      )}

      <button onClick={updateData}>Show More</button>
    </div>
  );
}
