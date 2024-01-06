// import React from "react";
import Nav from "../components/Navbar";
import Svg from "../components/svg/login_deco";
import { useForm, type SubmitHandler } from "react-hook-form";

import { SignInSchema, defaultValues, resolver } from "../form/singIn";
import { Link, useNavigate } from "react-router-dom";
import useTokenStore from "../zustand/useTokenStore";

export default function Login() {
  return (
    <div className="">
      <Nav />
      <div className="h-screen lg:mt-10 lg:flex flex-row">
        <div className=" sm:hidden md:hidden  lg:block">
          <img
            className="lg:w-[960px] h-screen bg-cover"
            src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div className="lg:w-1/2">
          <FormArea />
        </div>
      </div>
    </div>
  );
}

function FormArea() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: resolver,
    defaultValues: defaultValues,
  });
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<SignInSchema> = () => {
    console.log(getValues());

    const { email, password } = getValues();

    fetch(`https://hexschool-video-course-api.onrender.com/api/v1/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer `,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        // { status: 'true', result: [{...}] }
        console.log(res);
        if (res?.status) {
          useTokenStore.getState().setToken(res.token);
          useTokenStore.getState().setUserName(res.result.name);
          setTimeout(() => {
            navigate("/");
            // redirect("/hexschool-TS-Hw/");
          }, 0);
        }
      });
  };
  return (
    <div className="card lg:relative">
      <form className="  card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className=" lg:absolute lg:right-1 lg:top-1 ">
          <Svg className=" w-80" />
        </div>

        <br className=" sm:hidden lg:block" />

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
              {...register("email")}
              className=" bg-[#ECECEC] text-[#000] input input-bordered focus:input-primary invalid:input-error w-full join-item"
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
              {...register("password")}
              type="password"
              className="bg-[#ECECEC] text-[#000] input input-bordered focus:input-primary invalid:input-error w-full join-item"
              placeholder="請輸入密碼"
            />
            {errors.password?.message && ""}
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
  );
}
