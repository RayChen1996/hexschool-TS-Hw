import LeftSvg from "../svg/left";
import RightSvg from "../svg/right";
// import Deco from "../svg/deco";
// import RoomDeco from "../svg/rommtypedeco";
// import RoomTypeDeco from "../svg/roomtypedeco";

// interface CarouselItem {}

export default function RoomType() {
  return (
    <>
      <div className=" h-screen lg:flex flex-row  justify-center lg:relative lg:bg-opacity-30     ">
        <div className="carousel lg:w-1/2  flex flex-col  ">
          <div className=" flex-1"></div>
          <div
            id="slide1"
            className=" h-3/4 flex-1   carousel-item relative w-full"
          >
            <img
              src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room1.png?raw=true"
              className="w-full bg-cover"
            />
            <ul className=" w-full absolute bottom-4 flex gap-4 justify-center items-center ">
              <li className=" h-1 w-8 bg-[#BF9D7D] rounded-full "></li>
              <li className=" h-1 w-8 bg-[#F1EAE4] rounded-full "></li>
              <li className=" h-1 w-8 bg-[#F1EAE4] rounded-full "></li>
              <li className=" h-1 w-8 bg-[#F1EAE4] rounded-full "></li>
              <li className=" h-1 w-8 bg-[#F1EAE4] rounded-full "></li>
            </ul>
          </div>
          <div className=" flex-1"></div>
        </div>

        <div className=" text-left lg:w-1/2  flex flex-col ">
          <div className=" flex-1"></div>
          <div className="h-3/4 flex flex-col flex-1 carousel-item relative w-full">
            {/* 区块1 */}
            <div className="mb-4 ">
              <img
                alt=""
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/line2.png?raw=true"
                className="w-full object-contain"
              />
            </div>

            <br />
            <br />
            <br />

            {/* 区块2 */}
            <div className="mb-4  relative ">
              <img
                src="https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/bg.png?raw=true"
                alt=""
                className="w-full   transform object-contain"
              />
              <div className="p-5 relative">
                <header className="text-[40px]">尊爵雙人房</header>
                <p className="text-[16px]">
                  享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                </p>
                <span className="text-[32px]">NT$ 10,000</span>
                <button className="flex w-80 btn bg-[#ffffff]">
                  <div className="flex-1"></div>
                  <div className="text-[24px]">查看更多</div>
                  <div className="w-6 h-1 bg-black"></div>
                </button>
                <div className="flex flex-row justify-end">
                  <LeftSvg />
                  <RightSvg />
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-1"></div>
        </div>
      </div>
    </>
  );
}
