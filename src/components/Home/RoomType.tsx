import React from "react";

export default function RoomType() {
  return (
    <>
      <div className=" bg-opacity-30     ">
        <div className=" flex flex-row  gap-8 justify-center items-center">
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
            <header className=" text-left  text-[40px] font-bold">
              尊爵雙人房
            </header>

            <p className=" text-[16px] font-[600px]  ">
              享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
            </p>
            <span className=" text-[32px] font-[600px]  ">NT$ 10,000</span>
            <button className=" gap-2 hover:bg-[#BF9D7D] left-[-35px] top-[410px] w-4/5 border-none  flex  flex-row  btn bg-[#ECECEC]">
              <span className=" flex-1"></span>
              <span className="  w-64 text-black flex items-center justify-end">
                <span className="  ">查看更多</span>

                <span className="relative w-1/3">
                  <span className="absolute h-[1px] w-full bg-black"></span>
                </span>
              </span>
              <span className="w-10 text-black"></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
