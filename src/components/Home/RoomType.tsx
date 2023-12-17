import LeftSvg from "../svg/left";
import RightSvg from "../svg/right";
import Deco from "../svg/deco";
import RoomDeco from "../svg/rommtypedeco";
import RoomTypeDeco from "../svg/roomtypedeco";

export default function RoomType() {
  return (
    <>
      <div className=" relative bg-opacity-30     ">
        <div className=" flex flex-row   justify-center items-center">
          <div className=" rounded-tt-[80px] rounded-bt-[80px]  w-[900px] ">
            <img
              className="  rounded-tt-[80px] rounded-bt-[80px]    "
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className=" mt-12 h-10   flex flex-row  gap-8 justify-center items-center">
              <ul className=" flex flex-row gap-2">
                <li className=" bg-[#BF9D7D] w-[60px]  rounded-[100px] h-[4px] "></li>
                <li className="bg-white w-[32px] h-[4px] rounded-[100px]"></li>
                <li className="bg-white w-[32px] h-[4px] rounded-[100px]"></li>
                <li className="bg-white w-[32px] h-[4px] rounded-[100px]"></li>
                <li className="bg-white w-[32px] h-[4px] rounded-[100px]"></li>
              </ul>
            </div>
          </div>

          <div className="   rounded-[80px] w-[924px] h-[678px]        ">
            <div className=" w-7 h-9">
              <Deco />
            </div>

            <header className="ml-20  mt-72 text-left  text-[40px] font-bold">
              尊爵雙人房
            </header>

            <p className="ml-20 text-left text-[16px] font-[600px]  ">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
            <div className="ml-20  mt-5 text-left text-[32px] font-[600px]  ">
              NT$ 10,000
            </div>
            <button className=" ml-20 gap-2 hover:bg-[#BF9D7D] left-[-35px] top-[410px] w-4/5 border-none  flex  flex-row  btn bg-[#ECECEC]">
              <span className=" flex-1"></span>
              <span className="  w-64 text-black flex items-center justify-end">
                <span className="  ">查看更多</span>

                <span className="relative w-1/3">
                  <span className="absolute h-[1px] w-full bg-black"></span>
                </span>
              </span>
              <span className="w-10 text-black"></span>
            </button>
            <div className=" flex justify-end mr-36 mt-10 ">
              <LeftSvg />
              <RightSvg />
            </div>
          </div>
        </div>

        <div className=" absolute right-20 bottom-0  ">
          <RoomDeco />
        </div>

        <div className=" absolute top-40 right-0">
          <RoomTypeDeco />
        </div>
      </div>
    </>
  );
}
