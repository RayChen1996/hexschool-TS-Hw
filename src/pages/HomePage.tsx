import Banner from "../components/Home/Banner";
import News from "../components/Home/News";
import AboutUs from "../components/Home/about";

import RoomType from "../components/Home/RoomType";
import { useEffect } from "react";
import { useAxios } from "../lib/axios";

import FoodList from "../components/Home/FoodList";
import TranpotType from "../components/Home/Transportation";
import Nav from "../components/Nav";
import axios from "axios";
import { faker } from "@faker-js/faker";
export default function HomePage() {
  const axiosInstance = useAxios();
  useEffect(() => {
    //https://odd-hospital-gown-mite.cyclic.app/

    fetch("http://localhost:3005/api/v1/user/singup", { method: "POST" })
      .then((response) => response.json())
      .then((res) => {
        // { status: 'true', result: [{...}] }
        console.log(res);
      });

    //"http://localhost:3005/api/v1/user/login"
    const randomEmail = faker.internet.email();
    console.log(randomEmail);
    axios
      .post("http://127.0.0.1:3005/api/v1/user/singup", {
        headers: {
          Accept: "application/json",
        },
        name: " Lori Murphy",
        email: randomEmail,
        password: "as123df000",
        phone: "(663) 742-3828",
        birthday: "1982/2/4",
        address: {
          zipcode: 802,
          detail: "文山路23號",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // 在這裡使用 axiosInstance 發送請求
    // fetch("http://localhost:3005/api/v1/user/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     // 將您要傳送的資料放在這個物件中，並使用 JSON.stringify 將其轉換為 JSON 字串
    //     email: "ray@gmail.com",
    //     password: "as123df000",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((res) => {
    //     // { status: 'true', result: [{...}] }
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error("Error:", err);
    //   });
    //https://hexschool-video-course-api.onrender.com/swagger/#/Users%20-%20%E4%BD%BF%E7%94%A8%E8%80%85/post_api_v1_user_signup
  }, [axiosInstance]);
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
