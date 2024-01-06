import React, { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import Svg from "../components/svg/login_deco";
import CheckSvg from "../components/svg/check";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import {
  AccountSchema,
  AccountDefaultValues,
  Accountresolver,
  BaseDataResolver,
  BaseDataDefaultValues,
  BaseDataSchema,
} from "../form/singup";
import useTokenStore from "../zustand/useTokenStore";

import { Link, useNavigate } from "react-router-dom";

import { atom, useAtomValue, useSetAtom } from "jotai";

import AreaList from "../assets/cityCountyData.json";
import { useCallback } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const stepAtom = atom(0);
const formInfo = atom<AccountSchema>({
  confirmPassword: "",
  email: "",
  password: "",
});

export default function Singup() {
  console.log(AreaList);
  return (
    <div className="">
      <Nav />
      <div className="h-screen lg:mt-10 lg:flex flex-row">
        <div className="sm:hidden lg:block">
          <img
            className="lg:w-[960px] lg:h-screen bg-cover"
            src="https://images.unsplash.com/photo-1630587148265-761cbd139043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="image"
          />
        </div>
        <div>
          <FormProvider {...useForm()}>
            <FormArea />
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

function FormArea() {
  const step = useAtomValue(stepAtom);

  switch (step) {
    case 0:
      return <Step1 />;

    case 1:
      return <Step2 />;

    default:
      break;
  }
}

function Step1() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<AccountSchema>({
    resolver: Accountresolver,
    defaultValues: AccountDefaultValues,
  });
  const setStep = useSetAtom(stepAtom);
  const setFormData = useSetAtom(formInfo);

  const _submit: SubmitHandler<AccountSchema> = useCallback(
    (data) => {
      console.log(data);
      const { password, confirmPassword } = getValues();
      if (password === confirmPassword) {
        setFormData(data);
        setStep(1);
      }
    },
    [getValues, setStep]
  );

  console.log(errors);
  return (
    <>
      <div className="card lg:relative   ">
        <form className="  card-body" onSubmit={handleSubmit(_submit)}>
          <div className=" lg:absolute lg:left-0  ">
            <Svg className=" w-40" />
          </div>

          <label className=" text-left text-[#BF9D7D] sm:text-[14px] lg:text-[16px]">
            享樂酒店，誠摯歡迎
          </label>
          <h2 className="card-title lg:text-[48px] sm:text-[32px] ">
            {" "}
            立即註冊
          </h2>
          <br className=" lg:block sm:hidden" />
          <div className="  lg:w-96 form-contol">
            <div className="     h-[120px] justify-center items-center gap-2 inline-flex">
              <div className=" flex-col justify-center items-center gap-1 inline-flex">
                <div className="   bg-black bg-opacity-20 rounded-[80px] flex-col justify-center items-center flex">
                  <div className=" w-10 h-10 flex justify-center items-center rounded-[80px] bg-[#BF9D7D] self-stretch text-center text-white text-base font-bold   leading-normal tracking-tight">
                    1
                  </div>
                </div>
                <div className=" sm:text-[14px] Title text-center text-white   font-bold   leading-normal tracking-tight">
                  輸入信箱及密碼
                </div>
              </div>
              <div className="   h-0.5 relative bg-neutral-400 rounded-[10px]" />
              <div className=" flex-col justify-center items-center gap-1 inline-flex">
                <div className="    rounded-[100px] border border-neutral-400 flex-col justify-center items-center flex">
                  <div className=" w-10 h-10 flex justify-center items-center  text-center text-neutral-400   font-bold   leading-normal  ">
                    2
                  </div>
                </div>
                <div className="sm:text-[14px] text-center text-neutral-400 lg:text-[16px] font-bold     ">
                  填寫基本資料
                </div>
              </div>
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className=" label-text">電子信箱</span>
            </label>
            <div className="join">
              <input
                {...register("email")}
                className=" bg-[#ECECEC] text-black input input-bordered focus:input-primary invalid:input-error  w-full  join-item"
                placeholder="hello@exsample.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-left">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">密碼</span>
            </label>
            <div className="join">
              <input
                type="password"
                {...register("password")}
                className="bg-[#ECECEC] text-black input input-bordered focus:input-primary invalid:input-error  w-full  join-item"
                placeholder="請輸入密碼"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-left">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">確認密碼</span>
            </label>
            <div className="join">
              <input
                type="password"
                {...register("confirmPassword")}
                className="bg-[#ECECEC] text-black input input-bordered focus:input-primary invalid:input-error  w-full  join-item"
                placeholder="請再輸入一次密碼"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-left">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <br />
          <div className="card-actions flex-col">
            <button
              type="submit"
              className="bg-[#ECECEC] border-none text-[#909090] btn btn-primary btn-block underline"
            >
              下一步
            </button>
          </div>

          <div className="card-actions flex-col">
            <span>
              已經有會員了嗎？
              <Link className=" underline text-[#BF9D7D]" to="/login">
                立即登入
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

function Step2() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<BaseDataSchema>({
    resolver: BaseDataResolver,
    defaultValues: BaseDataDefaultValues,
  });
  const setStep = useSetAtom(stepAtom);

  const initialCity = "臺北市"; // 預設城市
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [selectedArea, setSelectedArea] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - (100 - i));
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const daysRange = Array.from({ length: 31 }, (_, i) => i + 1);

  const [birthYear, setBirthYear] = useState<number>(0);
  const [birthMonth, setBirthMonth] = useState<number>(1);
  const [birthDay, setBirthDay] = useState<number>(1);
  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  };
  const navigate = useNavigate();

  const handleAreaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedArea(event.target.value);
  };
  const Step1Data = useAtomValue<AccountSchema>(formInfo) || {};
  const _submit: SubmitHandler<BaseDataSchema> = useCallback(() => {
    const { username, phone } = getValues();
    const Address = getValues("address.detail");

    const regForm = {
      ...Step1Data,
      name: username,
      email: Step1Data.email || "",
      password: Step1Data.password || "",
      phone: phone,
      birthday: `${birthYear}/${birthMonth}/${birthDay}`,
      address: {
        zipcode: selectedArea,
        detail: Address,
      },
    };
    console.log(regForm);

    fetch(
      `https://hexschool-video-course-api.onrender.com/api/v1/user/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer `,
        },
        body: JSON.stringify(regForm),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res?.err?.status) {
          useTokenStore.getState().setToken(res.token);
        }

        MySwal.fire({
          icon: res.status ? "success" : "error",
          title: res.status ? "註冊成功" : res.message,
        });
        if (res.status) {
          setTimeout(() => {
            navigate("/login");
          }, 0);
        } else {
          setStep(0);
        }

        console.log(res);
      });
  }, [getValues, Step1Data, selectedArea]);

  useEffect(() => {
    setBirthYear(new Date().getFullYear());
  }, []);

  console.log(errors);
  return (
    <>
      <div className="card relative">
        <form className="  card-body" onSubmit={handleSubmit(_submit)}>
          <div className=" absolute right-1 top-1">
            <Svg />
          </div>

          <h2 className="card-title text-[48px]"> 立即註冊</h2>
          <br />
          <div className=" form-contol">
            <div className="ComponentStepBar w-[416px] h-[92px] py-4 flex-col justify-start items-start gap-4 inline-flex">
              <div className="Div self-stretch justify-center items-center gap-2 inline-flex">
                <div className="ElementStep flex-col justify-center items-center gap-1 inline-flex">
                  <div className="Frame4014 bg-[#BF9D7D] rounded-2xl w-8 h-8 py-2 bg-black bg-opacity-20 rounded-[100px] flex-col justify-center items-center flex">
                    <CheckSvg />
                  </div>
                  <div className="Title text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    輸入信箱及密碼
                  </div>
                </div>
                <div className="Frame4066 w-[188px] h-0.5 relative bg-gray-200 rounded-[10px]" />
                <div className="ElementStep flex-col justify-center items-center gap-1 inline-flex">
                  <div className="Frame4014 w-8 h-8 bg-black bg-opacity-20 rounded-[80px] flex-col justify-center items-center flex">
                    <div className=" bg-[#BF9D7D] rounded-2xl self-stretch text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                      2
                    </div>
                  </div>
                  <div className="Title text-center text-white text-base font-bold font-['Noto Serif TC'] leading-normal tracking-tight">
                    填寫基本資料
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text">姓名</span>
            </label>
            <div className="join">
              <input
                {...register("username")}
                className=" bg-[#ECECEC] text-[#000] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入姓名"
              />
            </div>
            {errors.username && (
              <p className="text-red-500 text-left">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text">手機號碼</span>
            </label>
            <div className="join">
              <input
                {...register("phone")}
                className=" bg-[#ECECEC] text-[#000] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入手機號碼"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-left">{errors.phone.message}</p>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">生日</span>
            </label>
            <div className="join flex flex-row gap-3">
              <select
                className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs"
                value={birthYear}
                onChange={(e) => setBirthYear(Number(e.target.value))}
              >
                <option disabled value="">
                  年
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year} 年
                  </option>
                ))}
              </select>

              <select
                className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs"
                value={birthMonth}
                onChange={(e) => setBirthMonth(Number(e.target.value))}
              >
                <option disabled value="">
                  月
                </option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month} 月
                  </option>
                ))}
              </select>

              <select
                className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs"
                value={birthDay}
                onChange={(e) => setBirthDay(Number(e.target.value))}
              >
                <option disabled value="">
                  日
                </option>
                {daysRange.map((day) => (
                  <option key={day} value={day}>
                    {day} 日
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">地址</span>
            </label>
            <div className="join flex flex-row gap-3">
              <select
                {...register("address.zipcode")}
                onChange={handleCityChange}
                className=" bg-[#ECECEC] text-[#4B4B4B]  select w-full max-w-xs"
              >
                {AreaList.map((item) => (
                  <option>{item.CityName}</option>
                ))}
              </select>
              <select
                value={selectedArea}
                onChange={handleAreaChange}
                className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs"
              >
                <option disabled value="">
                  請選擇區域
                </option>
                {AreaList.find(
                  (item) => item.CityName === selectedCity
                )?.AreaList.map((area) => (
                  <option key={area.ZipCode} value={area.ZipCode}>
                    {area.AreaName}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="join">
              <input
                {...register("address.detail")}
                className="bg-[#ECECEC] input text-[#000] input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入詳細地址"
              />
            </div>
          </div>
          <div className="form-control flex flex-row gap-2">
            <input id="readme" type="checkbox" className=" checkbox" />
            <label htmlFor="readme">
              <span>我已閱讀並同意本網站個資使用規範</span>
            </label>
          </div>
          <br />
          <div className="card-actions flex-col">
            <button
              type="submit"
              className=" bg-[#BF9D7D] border-none text-[#FFFFFF] btn btn-primary btn-block"
            >
              完成註冊
            </button>
          </div>

          <div className="card-actions flex-col">
            <span>
              已經有會員了嗎？
              <Link className=" underline text-[#BF9D7D]" to="/login">
                立即登入
              </Link>
              {/* <a
                className=" underline text-[#BF9D7D]"
                href="/hexschool-TS-Hw/login"
              >
                立即登入
              </a> */}
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
