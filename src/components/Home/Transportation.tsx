import CarSvg from "../svg/Car";
import MRTSvg from "../svg/MRT";
import CarServiceSvg from "../svg/carService";

export default function Transportation() {
  return (
    <div className=" bg-[#140F0A]  h-screen p-10 ">
      <div className="  ">
        <div className=" absolute lg:left-32  flex flex-row gap-5">
          <div>
            <span className=" text-[#BF9D7D] text-[48px]">交通</span>
            <br />
            <span className=" text-[#BF9D7D] text-[48px]">方式</span>
          </div>
          <div className=" ml-6 flex items-center border-y-1 w-[165px]  h-[165px]  ">
            <div className="  h-[2px] w-[165px] bg-white bg-gradient-to-l from-[#BE9C7C]-500 to-[#FFFFFF]-500  "></div>
          </div>
        </div>
      </div>

      {/* <p className="  text-left mb-2  bg-[#140F0A]">
        台灣高雄市新興區六角路123號
      </p> */}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className=" flex justify-center items-center">
        <img
          width={1200}
          src="https://github.com/RayChen1996/hexschool-TS-Hw/blob/main/public/images/home_Map.png?raw=true"
          alt="Map"
        />
      </div>

      <br />
      <br />
      <br />
      <br />

      <div className="    lg:flex flex-row text-left gap-3 justify-around">
        <div className=" mt-3">
          <CarSvg />
          <header className=" text-[24px]">自行開車</header>
          <p>
            如果您選擇自行開車，可以透過國道一號下高雄交流道 ，<br />
            往市區方向行駛，並依路標指示即可抵達「享樂酒店」。
            <br />
            飯店內設有停車場，讓您停車方便。
          </p>
        </div>

        <div className=" mt-10">
          <MRTSvg />
          <header className=" text-[24px]">高鐵/火車</header>
          <p>
            如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程
            <br />
            車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘
            <br />
            捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
          </p>
        </div>

        <div className=" mt-3">
          <CarServiceSvg />
          <header className=" text-[24px]">禮賓車服務</header>
          <p>
            承億酒店提供禮賓專車接送服務，但因目的地遠近會有不
            <br />
            同的收費，請撥打電話將由專人為您服務洽詢專線：
            <br />
            (07)123-4567
          </p>
        </div>
      </div>
    </div>
  );
}
