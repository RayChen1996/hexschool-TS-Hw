import { useState } from "react";
import Nav from "../components/Nav";
import Svg from "../components/svg/Avator";
import DecoSvg from "../components/svg/deco22";
// css
import clsx from "clsx";
export default function Profile() {
  const [focus, setFocus] = useState(1);

  return (
    <div className=" min-h-full w-full">
      <Nav />
      <div className=" mt-4 ">
        <div className=" relative  ">
          <img
            className=" h-[384px] w-[1800px] bg-contain  "
            src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" absolute top-32 left-64   flex flex-row justify-center items-center gap-6">
            <Svg />
            <label className=" text-[#FFFFFF] text-[48px]" htmlFor="">
              Hello，Jessica
            </label>
          </div>
        </div>
        <div className="  w-1/2 mt-3">
          <div>
            <ul className=" flex  gap-3 justify-center items-center">
              <li
                onClick={() => {
                  setFocus(1);
                }}
                className=" cursor-pointer  flex flex-col justify-center items-center"
              >
                個人資料
                <div
                  className={clsx(
                    focus === 0 && " bg-opacity-0   ",
                    "bg-[#BF9D7D] h-1 rounded-[10px] w-6 text-center mt-3 "
                  )}
                ></div>
              </li>
              <li
                onClick={() => {
                  setFocus(0);
                }}
                className=" cursor-pointer flex flex-col justify-center items-center"
              >
                我的訂單
                <div
                  className={clsx(
                    focus === 1 && " bg-opacity-0 ",
                    "bg-[#BF9D7D] h-1 rounded-[10px] w-6 text-center mt-3"
                  )}
                ></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-sceen">
        <div className=" mt-9 mb-24 flex flex-row w-full justify-center  gap-3 ">
          <div>
            <div className="Frame4098 w-[527px] h-[285px] p-10 bg-white rounded-[20px] flex-col justify-start items-start gap-10 inline-flex">
              <div className=" text-black text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                修改密碼
              </div>
              <div className="Input self-stretch h-[136px] flex-col justify-start items-start gap-6 flex">
                <div className="Frame4102 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="Title w-[447px] text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                    電子信箱
                  </div>
                  <div className="JessicaExsampleCom self-stretch h-6 text-black text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    Jessica@exsample.com
                  </div>
                </div>
                <div className="Frame4105 self-stretch justify-start items-center gap-4 inline-flex">
                  <div className="Frame4103 grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="Title w-[447px] h-6 text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                      密碼
                    </div>
                    <div className="Password py-2 justify-start items-start gap-2 inline-flex">
                      <div className="Ellipse1 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse2 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse3 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse4 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse5 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse6 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse7 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse8 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse9 w-2 h-2 bg-black rounded-full" />
                      <div className="Ellipse10 w-2 h-2 bg-black rounded-full" />
                    </div>
                  </div>
                  <div className="Frame4104 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Button justify-center items-center inline-flex">
                      <div className="Container justify-center items-center gap-1 flex">
                        <div className="Text text-center text-black text-opacity-20 text-base font-bold font-['Noto Serif TC'] underline leading-normal tracking-tight">
                          重設
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="Frame4099 w-[730px] h-[541px] p-10 bg-white rounded-[20px] flex-col justify-start items-start gap-10 inline-flex">
              <div className=" text-black text-2xl font-bold font-['Noto Serif TC'] leading-[28.80px] tracking-wide">
                基本資料
              </div>
              <div className="Input self-stretch h-[296px] flex-col justify-start items-start gap-6 flex">
                <div className="Frame4102 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="Title self-stretch h-6 text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                    姓名
                  </div>
                  <div className="JessicaAng self-stretch h-6 text-black text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    Jessica Ｗang
                  </div>
                </div>
                <div className="Frame4103 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="Title self-stretch h-6 text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                    手機號碼
                  </div>
                  <div className="886912345678 self-stretch h-6 text-black text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    +886 912 345 678
                  </div>
                </div>
                <div className="Frame4104 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="Title self-stretch h-6 text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                    生日
                  </div>
                  <div className="815 self-stretch h-6 text-black text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    1990 年 8 月 15 日
                  </div>
                </div>
                <div className="Frame4105 self-stretch h-14 flex-col justify-start items-start gap-2 flex">
                  <div className="Title self-stretch h-6 text-neutral-600 text-base font-medium font-['Noto Serif TC'] leading-normal tracking-tight">
                    地址
                  </div>
                  <div className="123 self-stretch h-6 text-black text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    高雄市新興區六角路 123 號
                  </div>
                </div>
              </div>
              <div className="Button px-8 py-4 bg-white rounded-lg border border-black border-opacity-20 justify-center items-center inline-flex">
                <div className="Container justify-center items-center gap-1 flex">
                  <div className="Text text-center text-black text-opacity-20 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    編輯
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex justify-center items-center ">
        <DecoSvg />
      </div>
    </div>
  );
}
