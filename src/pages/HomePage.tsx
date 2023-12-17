import Banner from "../components/Home/Banner";
import News from "../components/Home/News";
import AboutUs from "../components/Home/about";

import RoomType from "../components/Home/RoomType";

export default function HomePage() {
  return (
    <div className=" ">
      <Banner />
      <News />
      <AboutUs />
      <RoomType />
    </div>
  );
}
