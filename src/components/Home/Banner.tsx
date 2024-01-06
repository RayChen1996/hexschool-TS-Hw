import BannerText from "../svg/bannerText";
export default function Banner() {
  return (
    <>
      <div className=" bg-opacity-30 bg-cover bg-[url('/images/bannerBg.png')] ">
        <div className=" lg:flex flex-row  gap-8 justify-center items-center">
          {/*  */}
          <div className=" sm:flex sm:justify-center sm:items-center sm:h-96 ">
            <BannerText />

            <div className=" sm:hidden lg:relative lg:w-96 h-2 mt-5">
              <div className="absolute h-[2px] w-full bg-gradient-to-t from-white to-transparent via-transparent"></div>
            </div>
          </div>

          <div className=" sm:ml-[64px] sm:mr-[20px] lg:relative rounded-[80px] lg:w-[924px] h-[678px] border-t border-r border-0  border-solid    border-[#F5F7F9] bg-gradient-to-t from-white to-transparent via-transparent ">
            <header className="lg:absolute sm:ml-[-40px]  sm:mt-[100px]  lg:left-[-35px] lg:top-[1px] text-left  sm:text-[48px] lg:text-[100px] font-bold">
              高雄
            </header>
            <header className="lg:absolute sm:ml-[-40px]  sm:mt-[5px]  sm:text-left  lg:left-[-35px] top-[200px] sm:text-[48px]  lg:text-[100px] font-bold">
              豪華住宿之選
            </header>
            <p className="lg:absolute  sm:ml-[-40px]  sm:mt-[15px]   sm:text-[16px] sm:text-left lg:left-[-35px] top-[340px]  text-[32px] font-[600px]  ">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <a
              className="  sm:flex  sm:ml-[-40px]  sm:mt-[35px] "
              href="/hexschool-TS-Hw/RoomTypePicker"
            >
              <button className=" lg:absolute gap-2 hover:bg-[#BF9D7D] left-[-35px] top-[410px] w-4/5 border-none  flex  flex-row  btn bg-[#ECECEC]">
                <span className=" flex-1"></span>
                <span className="  w-64 text-black flex items-center justify-end">
                  <a href="/hexschool-TS-Hw/RoomTypePicker">
                    <span className="  ">立即訂房</span>
                  </a>

                  <span className="relative w-1/3">
                    <span className="absolute h-[1px] w-full bg-black"></span>
                  </span>
                </span>
                <span className="w-10 text-black"></span>
              </button>
            </a>
          </div>
        </div>

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
    </>
  );
}
