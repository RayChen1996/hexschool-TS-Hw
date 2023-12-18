import Banner from "../components/Home/Banner";
import News from "../components/Home/News";
import AboutUs from "../components/Home/about";

import RoomType from "../components/Home/RoomType";

import FoodList from "../components/Home/FoodList";
import TranpotType from "../components/Home/Transportation";
import Nav from "../components/Nav";

export default function HomePage() {
  return (
    <div className=" ">
      <Nav />
      <Banner />
      <News />
      <AboutUs />
      <RoomType />

      <FoodList />

      <TranpotType />
    </div>
  );
}
