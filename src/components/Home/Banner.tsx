import BannerText from "../svg/bannerText";
export default function Banner() {
  return (
    <>
      <div className=" bg-opacity-30 bg-cover bg-[url('/images/bannerBg.png')] ">
        <div className=" flex flex-row  gap-8 justify-center items-center">
          {/*  */}
          <div className=" ">
            <BannerText />

            <div className="relative w-96 h-2 mt-5">
              <div className="absolute h-[2px] w-full bg-gradient-to-t from-white to-transparent via-transparent"></div>
            </div>
          </div>

          <div className=" relative rounded-[80px] w-[924px] h-[678px] border-t border-r border-0  border-solid    border-[#F5F7F9] bg-gradient-to-t from-white to-transparent via-transparent ">
            <header className="absolute   left-[-35px] top-[80px] text-left  text-[100px] font-bold">
              高雄
            </header>
            <header className="absolute   left-[-35px] top-[200px] text-[100px] font-bold">
              豪華住宿之選
            </header>
            <p className="absolute   left-[-35px] top-[340px]  text-[32px] font-[600px]  ">
              我們致力於為您提供無與倫比的奢華體驗與優質服務
            </p>
            <button className=" absolute gap-2 hover:bg-[#BF9D7D] left-[-35px] top-[410px] w-4/5 border-none  flex  flex-row  btn bg-[#ECECEC]">
              <span className=" flex-1"></span>
              <span className="  w-64 text-black flex items-center justify-end">
                <span className="  ">立即訂房</span>

                <span className="relative w-1/3">
                  <span className="absolute h-[1px] w-full bg-black"></span>
                </span>
              </span>
              <span className="w-10 text-black"></span>
            </button>
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
