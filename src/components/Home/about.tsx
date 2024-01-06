import DecoSvg from "../svg/decoHelf";

export default function About() {
  return (
    <div className=" text-left bg-black py-24 relative ">
      <div className=" absolute top-0 left-28">
        <DecoSvg />
      </div>
      <div className=" rounded-md sm:p-10 lg:flex flex-row h-screen  lg:p-10  bg-cover  bg-[url('/images/home_About.png')]  bg-white gap-8 justify-center items-center mx-auto">
        <div className=" lg:p-20 sm:m-15  sm:p-10 rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[0px]    border-t-0 border-r-0 border-b-[1px] border-l-[1px]     border-solid    border-[#F5F7F9] bg-gradient-to-b from-[#140F0ACC] to-[#BE9C7CCC]  ">
          <div className=" flex lg:gap-10 flex-col  text-left">
            <div className=" flex flex-row gap-5">
              <div>
                <span className=" sm:text-[32px] lg:text-[48px]">關於</span>
                <br />
                <span className="sm:text-[32px] lg:text-[48px]">我們</span>
              </div>
              <div className=" sm:relative  lg:flex sm:mt-12 items-center border-y-1 w-[165px]  h-[165px]  ">
                <div className=" sm:absolute sm:left-0   h-[2px] w-[165px] bg-white"></div>
              </div>
            </div>

            <div className="   text-white">
              <p>
                享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
                <br />
                我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
              </p>

              <br />
              <p>
                我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
                <br />
                我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
              </p>

              <br />

              <p>
                在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻
                <br />
                的佳餚，體驗無與倫比的味覺盛宴。
              </p>

              <br />
              <p>
                享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們
                <br />
                共同編織一段難忘的高雄故事。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
