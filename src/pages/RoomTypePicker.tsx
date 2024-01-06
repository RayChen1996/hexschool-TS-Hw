import Nav from "../components/Nav";

export default function RoomTypePicker() {
  return (
    <div className=" h-screen">
      <Nav />

      <div className="Section w-[1296px] h-[2150px] flex-col justify-start items-start gap-20 inline-flex">
        <div className="Heading flex-col justify-start items-start gap-4 flex">
          <div className=" text-neutral-600 text-xl font-bold font-['Noto Serif TC'] leading-normal tracking-wide">
            房型選擇
          </div>
          <div className=" text-black text-opacity-20 text-5xl font-bold font-['Noto Serif TC'] leading-[57.60px] tracking-widest">
            各種房型，任您挑選
          </div>
        </div>
        <div className="RoomGroup flex-col justify-start items-start gap-12 flex">
          <div className="CardRoom w-[1296px] rounded-[20px] justify-start items-start inline-flex">
            <div className="ImgRoom w-[773px] px-6 pt-[200px] pb-6 flex-col justify-end items-center gap-[173px] inline-flex">
              <div className="Arrow self-stretch justify-between items-start inline-flex">
                <div className="ArrowButton w-14 h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowLeft w-10 h-10 relative" />
                </div>
                <div className="ArrowButton h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowRight w-10 h-10 relative" />
                </div>
              </div>
              <div className="SlideIndicator h-1 justify-start items-start gap-2 inline-flex">
                <div className="Rectangle w-[60px] h-1 bg-black bg-opacity-20 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
              </div>
            </div>
            <div className="Content w-[523px] p-10 bg-white flex-col justify-center items-start gap-10 inline-flex">
              <div className="Intro self-stretch h-[104px] flex-col justify-center items-start gap-2 flex">
                <div className=" text-black text-[40px] font-bold font-['Noto Serif TC'] leading-[48px] tracking-widest">
                  尊爵雙人房
                </div>
                <div className=" self-stretch text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                  享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                </div>
              </div>
              <div className="Detail justify-start items-center gap-4 inline-flex">
                <div className="Frame4072 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcSize w-6 h-6 relative" />
                  <div className=" self-stretch text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    24 坪
                  </div>
                </div>
                <div className="Frame4073 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcBed w-6 h-6 relative">
                    <div className="Group w-5 h-3.5 left-[2px] top-[5px] absolute"></div>
                  </div>
                  <div className=" text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    1 張大床
                  </div>
                </div>
                <div className="Frame4071 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcPerson w-6 h-6 relative" />
                  <div className="4 text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2-4 人
                  </div>
                </div>
              </div>
              <div className="DecoLine self-stretch h-[0px] border-2 border-stone-400"></div>
              <div className="Frame4070 self-stretch justify-start items-center gap-4 inline-flex">
                <div className="Nt10000 grow shrink basis-0 text-black text-opacity-20 text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                  NT$ 10,000
                </div>
                <div className="Button py-4 rounded-[100px] justify-center items-center flex">
                  <div className="Container justify-center items-center gap-1 flex">
                    <div className="Text text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                      查看更多
                    </div>
                    <div className="IcArrowright w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardRoom w-[1296px] rounded-[20px] justify-start items-start inline-flex">
            <div className="ImgRoom w-[773px] px-6 pt-[200px] pb-6 flex-col justify-end items-center gap-[173px] inline-flex">
              <div className="Arrow self-stretch justify-between items-start inline-flex">
                <div className="ArrowButton w-14 h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowLeft w-10 h-10 relative" />
                </div>
                <div className="ArrowButton h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowRight w-10 h-10 relative" />
                </div>
              </div>
              <div className="SlideIndicator h-1 justify-start items-start gap-2 inline-flex">
                <div className="Rectangle w-[60px] h-1 bg-black bg-opacity-20 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
              </div>
            </div>
            <div className="Content w-[523px] p-10 bg-white flex-col justify-center items-start gap-10 inline-flex">
              <div className="Intro self-stretch h-[104px] flex-col justify-center items-start gap-2 flex">
                <div className=" text-black text-[40px] font-bold font-['Noto Serif TC'] leading-[48px] tracking-widest">
                  景觀雙人房
                </div>
                <div className=" self-stretch text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                  景觀雙人房擁有絕美的高雄市景觀，讓您在舒適的環境中欣賞城市之美。
                </div>
              </div>
              <div className="Detail justify-start items-center gap-4 inline-flex">
                <div className="Frame4072 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcSize w-6 h-6 relative" />
                  <div className=" self-stretch text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    28 坪
                  </div>
                </div>
                <div className="Frame4073 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcBed w-6 h-6 relative">
                    <div className="Group w-5 h-3.5 left-[2px] top-[5px] absolute"></div>
                  </div>
                  <div className=" text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    1 張大床
                  </div>
                </div>
                <div className="Frame4071 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcPerson w-6 h-6 relative" />
                  <div className="4 text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2-4 人
                  </div>
                </div>
              </div>
              <div className="DecoLine self-stretch h-[0px] border-2 border-stone-400"></div>
              <div className="Frame4070 self-stretch justify-start items-center gap-4 inline-flex">
                <div className="Nt10000 grow shrink basis-0 text-black text-opacity-20 text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                  NT$ 10,000
                </div>
                <div className="Button py-4 rounded-[100px] justify-center items-center flex">
                  <div className="Container justify-center items-center gap-1 flex">
                    <div className="Text text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                      查看更多
                    </div>
                    <div className="IcArrowright w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardRoom w-[1296px] rounded-[20px] justify-start items-start inline-flex">
            <div className="ImgRoom w-[773px] px-6 pt-[200px] pb-6 flex-col justify-end items-center gap-[173px] inline-flex">
              <div className="Arrow self-stretch justify-between items-start inline-flex">
                <div className="ArrowButton w-14 h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowLeft w-10 h-10 relative" />
                </div>
                <div className="ArrowButton h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowRight w-10 h-10 relative" />
                </div>
              </div>
              <div className="SlideIndicator h-1 justify-start items-start gap-2 inline-flex">
                <div className="Rectangle w-[60px] h-1 bg-black bg-opacity-20 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
              </div>
            </div>
            <div className="Content w-[523px] p-10 bg-white flex-col justify-center items-start gap-10 inline-flex">
              <div className="Intro self-stretch h-[104px] flex-col justify-center items-start gap-2 flex">
                <div className=" text-black text-[40px] font-bold font-['Noto Serif TC'] leading-[48px] tracking-widest">
                  豪華雅緻房
                </div>
                <div className=" self-stretch text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                  享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
                </div>
              </div>
              <div className="Detail justify-start items-center gap-4 inline-flex">
                <div className="Frame4072 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcSize w-6 h-6 relative" />
                  <div className=" self-stretch text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    36 坪
                  </div>
                </div>
                <div className="Frame4073 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcBed w-6 h-6 relative">
                    <div className="Group w-5 h-3.5 left-[2px] top-[5px] absolute"></div>
                  </div>
                  <div className=" text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2 張大床
                  </div>
                </div>
                <div className="Frame4071 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcPerson w-6 h-6 relative" />
                  <div className="4 text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2-4 人
                  </div>
                </div>
              </div>
              <div className="DecoLine self-stretch h-[0px] border-2 border-stone-400"></div>
              <div className="Frame4070 self-stretch justify-start items-center gap-4 inline-flex">
                <div className="Nt10000 grow shrink basis-0 text-black text-opacity-20 text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                  NT$ 10,000
                </div>
                <div className="Button py-4 rounded-[100px] justify-center items-center flex">
                  <div className="Container justify-center items-center gap-1 flex">
                    <div className="Text text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                      查看更多
                    </div>
                    <div className="IcArrowright w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="CardRoom w-[1296px] rounded-[20px] justify-start items-start inline-flex">
            <div className="ImgRoom w-[773px] px-6 pt-[200px] pb-6 flex-col justify-end items-center gap-[173px] inline-flex">
              <div className="Arrow self-stretch justify-between items-start inline-flex">
                <div className="ArrowButton w-14 h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowLeft w-10 h-10 relative" />
                </div>
                <div className="ArrowButton h-14 p-2 bg-white rounded-[100px] justify-between items-start flex">
                  <div className="IcArrowRight w-10 h-10 relative" />
                </div>
              </div>
              <div className="SlideIndicator h-1 justify-start items-start gap-2 inline-flex">
                <div className="Rectangle w-[60px] h-1 bg-neutral-600 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
                <div className="Rectangle w-8 h-1 bg-stone-200 rounded-[100px]" />
              </div>
            </div>
            <div className="Content w-[523px] p-10 bg-white flex-col justify-center items-start gap-10 inline-flex">
              <div className="Intro self-stretch h-[104px] flex-col justify-center items-start gap-2 flex">
                <div className=" text-black text-[40px] font-bold font-['Noto Serif TC'] leading-[48px] tracking-widest">
                  景觀尊榮家庭房
                </div>
                <div className=" self-stretch text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                  景觀尊榮家庭房不僅有寬敞的空間，還有絕美的市景視野，是帶給家庭最尊榮的待遇。
                </div>
              </div>
              <div className="Detail justify-start items-center gap-4 inline-flex">
                <div className="Frame4072 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcSize w-6 h-6 relative" />
                  <div className=" self-stretch text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    48 坪
                  </div>
                </div>
                <div className="Frame4073 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcBed w-6 h-6 relative">
                    <div className="Group w-5 h-3.5 left-[2px] top-[5px] absolute"></div>
                  </div>
                  <div className=" text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2 張大床
                  </div>
                </div>
                <div className="Frame4071 w-[97px] h-[97px] p-4 rounded-lg border border-stone-200 flex-col justify-center items-start gap-2 inline-flex">
                  <div className="IcPerson w-6 h-6 relative" />
                  <div className="4 text-neutral-600 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2-4 人
                  </div>
                </div>
              </div>
              <div className="DecoLine self-stretch h-[0px] border-2 border-stone-400"></div>
              <div className="Frame4070 self-stretch justify-start items-center gap-4 inline-flex">
                <div className="Nt10000 grow shrink basis-0 text-black text-opacity-20 text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                  NT$ 10,000
                </div>
                <div className="Button py-4 rounded-[100px] justify-center items-center flex">
                  <div className="Container justify-center items-center gap-1 flex">
                    <div className="Text text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                      查看更多
                    </div>
                    <div className="IcArrowright w-6 h-6 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
