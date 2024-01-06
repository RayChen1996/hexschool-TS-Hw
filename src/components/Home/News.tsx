import DecoLine from "../svg/DecoLine";

export default function News() {
  return (
    <div className="flex  flex-row  p-10    bg-white gap-8 justify-center items-center mx-auto">
      <div className=" text-black   lg:flex flex-row  ">
        <div className=" w-64">
          <span className=" text-[#BF9D7D] font-[700] text-[48px] ">最新</span>
          <br />
          <span className=" text-[#BF9D7D] font-[700] text-[48px] ">消息</span>
          <span>
            <DecoLine />
          </span>
        </div>
        <div className=" w-auto ">
          <NewsCardItem />
        </div>
      </div>
    </div>
  );
}

function NewsCardItem() {
  const data = [
    {
      id: 1,
      label: "秋季旅遊，豪華享受方案",
      url: "https://images.unsplash.com/photo-1615722440048-da4ccf6de048?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適 \n\r 的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家\n\r人共度美好時光，都能在這裡找到最適合的方案。",
    },
    {
      id: 2,
      label: "輕鬆住房專案",
      url: "https://images.unsplash.com/photo-1445991842772-097fea258e7b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕 \n\r 鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，\n\r我們都會以最貼心的服務，讓您感到賓至如歸。",
    },
    {
      id: 1,
      label: "耶誕快樂，住房送禮",
      url: "https://images.unsplash.com/photo-1479740030693-66ad10f3a7b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，\n\r還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！",
    },
  ];
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="lg:flex flex-row gap-2 m-5">
          <div>
            <img
              className="w-[474px] h-auto rounded-[8px] bg-cover"
              src={item.url}
              alt=""
            />
          </div>
          <div className=" p-5 h-60 ">
            <header className="  text-left text-[32px] font-bold">
              {item.label}
            </header>
            <p className="text-left text-[16px] text-[#4B4B4B] whitespace-pre-line">
              {" "}
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
