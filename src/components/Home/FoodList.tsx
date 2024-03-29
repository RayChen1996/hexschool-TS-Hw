import { useRef } from "react";
import DecoSvg from "../svg/foodDeco";
import DecoLine from "../svg/DecoLine";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "swiper/swiper-bundle.min.css";

// import Swiper from "swiper/bundle";
interface FoodList {
  foodName: string;
  dateStr: string;
  TimeStr: string;
  foodDescription: string;
  foodUrl: string;
}
export default function FoodList() {
  // useEffect(() => {
  //   const mySwiper = new Swiper(".swiper-container", {
  //     // Swiper 配置项
  //   });
  // }, []);
  const swiperRef = useRef<any | null>();
  const FoodList: Array<FoodList> = [
    {
      foodUrl:
        "https://images.unsplash.com/photo-1624938823487-d62ba4a5cf0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      foodName: "海霸",
      dateStr: "SUN-MON",
      TimeStr: "11:00 - 20:30",
      foodDescription:
        "以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。",
    },
    {
      foodUrl:
        "https://images.unsplash.com/photo-1628543108325-1c27cd7246b3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      foodName: "日食",
      dateStr: "SUN-MON",
      TimeStr: "17:00 - 22:00",
      foodDescription:
        "為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。",
    },
    {
      foodUrl:
        "https://images.unsplash.com/photo-1621916805571-2e804f82170c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      foodName: "山臻",
      dateStr: "SUN-MON",
      TimeStr: "11:00 - 20:30",
      foodDescription:
        "帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。",
    },
    {
      foodUrl:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      foodName: "月永",
      dateStr: "SUN-MON",
      TimeStr: "11:00 - 20:00",
      foodDescription:
        "從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。",
    },

    {
      foodUrl:
        "https://images.unsplash.com/photo-1517084166762-9edca41416e6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      foodName: "天潮",
      dateStr: "SUN-MON",
      TimeStr: "14:00 - 19:30",
      foodDescription:
        "我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。",
    },
  ];
  return (
    <div className=" mb-3 relative   h-screen bg-[#F7F2EE]">
      <div className=" sm:hidden lg:block absolute left-1">
        <DecoSvg />
      </div>

      <div className=" lg:absolute left-64 top-12 text-black ">
        <div className=" sm:absolute sm:left-1  sm:top-20 lg:flex flex-row lg:gap-5">
          <div>
            <span className=" text-[#BF9D7D] text-[48px]">佳餚</span>
            <br />
            <span className=" text-[#BF9D7D] text-[48px]">美饌</span>
          </div>
          <span className=" lg:absolute lg:left-32 lg:top-16">
            <DecoLine />
          </span>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" lg:ml-80">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          navigation={true}
          slidesPerGroup={1}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 150,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 200,
            },
            1920: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // when ready
          // onSwiper={(swiper) => {
          //   swiperRef.current = swiper;
          // }}
        >
          {FoodList.map((food, index) => (
            <SwiperSlide key={index}>
              <FoodCardItem key={index} {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
interface FoodCardItemProps extends FoodList {}

function FoodCardItem({
  foodName,
  dateStr,
  TimeStr,
  foodDescription,
  foodUrl,
}: FoodCardItemProps) {
  return (
    <div
      className=" h-96 md:h-96 lg:h-96    w-96       relative   rounded-[8px]  shadow-xl   "
      style={{
        backgroundImage: `url(${foodUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" h-36 md:h-36 lg:h-36    absolute bottom-0 left-0 card-body    via-transparent backdrop-blur-md   ">
        <h2 className="card-title flex justify-between">
          <span className=" text-[24px]">{foodName}</span>
          <span className="  flex-1"></span>
          <span>{dateStr}</span>
          <span>{TimeStr}</span>
        </h2>
        <p className=" text-left">{foodDescription}</p>
      </div>
    </div>
  );
}
