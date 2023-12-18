// import React from "react";
import Nav from "../components/Navbar";
import Svg from "../components/svg/login_deco";
export default function Singup() {
  return (
    <div className="">
      <Nav />
      <div className="h-screen mt-10 flex flex-row">
        <div>
          <img
            className="w-[960px] h-screen bg-cover"
            src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <FormArea />
        </div>
      </div>
    </div>
  );
}

function FormArea() {
  return (
    <>
      <div className="card relative">
        <form className="  card-body">
          <div className=" absolute right-1 top-1">
            <Svg />
          </div>

          <br />

          <label className=" text-left text-[#BF9D7D] text-[16px]">
            享樂酒店，誠摯歡迎
          </label>
          <h2 className="card-title text-[48px]"> 立即註冊</h2>
          <br />
          <div className=" form-contol">
            <div className="Div w-[416px] h-[60px] justify-center items-center gap-2 inline-flex">
              <div className=" flex-col justify-center items-center gap-1 inline-flex">
                <div className="Frame4014 w-8 h-8 bg-black bg-opacity-20 rounded-[80px] flex-col justify-center items-center flex">
                  <div className=" rounded-[80px] bg-[#BF9D7D] self-stretch text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    1
                  </div>
                </div>
                <div className="Title text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                  輸入信箱及密碼
                </div>
              </div>
              <div className="Frame4066 w-[188px] h-0.5 relative bg-neutral-400 rounded-[10px]" />
              <div className=" flex-col justify-center items-center gap-1 inline-flex">
                <div className="Frame4014 w-8 h-8 rounded-[100px] border border-neutral-400 flex-col justify-center items-center flex">
                  <div className=" self-stretch text-center text-neutral-400 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    2
                  </div>
                </div>
                <div className="Title text-center text-neutral-400 text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                  填寫基本資料
                </div>
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text">電子信箱</span>
            </label>
            <div className="join">
              <input
                className=" bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="hello@exsample.com"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">密碼</span>
            </label>
            <div className="join">
              <input
                className="bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入密碼"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">確認密碼</span>
            </label>
            <div className="join">
              <input
                className="bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請再輸入一次密碼"
              />
            </div>
          </div>

          <br />
          <div className="card-actions flex-col">
            <button
              type="submit"
              className=" bg-[#ECECEC] border-none text-[#909090] btn btn-primary btn-block"
            >
              下一步
            </button>
          </div>

          <div className="card-actions flex-col">
            <span>
              已經有會員了嗎？
              <a
                className=" underline text-[#BF9D7D]"
                href="/hexschool-TS-Hw/login"
              >
                立即登入
              </a>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
