// import React from "react";
import Nav from "../components/Navbar";
import Svg from "../components/svg/login_deco";
import { Link } from "react-router-dom";

export default function Login() {
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
          <h2 className="card-title text-[48px]"> 立即開始旅程</h2>
          <br />
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
          <div className="form-control flex flex-row gap-2">
            <input type="checkbox" className=" checkbox       " />
            <span>記住帳號</span>
            <span className=" flex-1"></span>
            <span>忘記密碼？</span>
          </div>
          <br />
          <div className="card-actions flex-col">
            <button
              type="submit"
              className=" bg-[#ECECEC] border-none text-[#909090] btn btn-primary btn-block"
            >
              會員登入
            </button>
          </div>

          <div className="card-actions flex-col">
            <span>
              沒有會員嗎？
              <Link to="/Singup">前往註冊</Link>
              {/* <a className=" underline text-[#BF9D7D]" href="/">
                前往註冊
              </a> */}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
