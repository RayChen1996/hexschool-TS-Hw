import Nav from "../components/Navbar";
import Svg from "../components/svg/login_deco";
import CheckSvg from "../components/svg/check";
import { Link } from "react-router-dom";
export default function Singup2() {
  return (
    <div className="">
      <Nav />
      <div className="mb-10 h-screen mt-10 flex flex-row">
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
                className=" bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入姓名"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className=" label-text">手機號碼</span>
            </label>
            <div className="join">
              <input
                className=" bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入手機號碼"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">生日</span>
            </label>
            <div className="join flex flex-row gap-3">
              <select className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs">
                <option disabled selected>
                  1990 年
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <select className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs">
                <option disabled selected>
                  8 月
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <select className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs">
                <option disabled selected>
                  15 日
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">地址</span>
            </label>
            <div className="join flex flex-row gap-3">
              <select className=" bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs">
                <option disabled selected>
                  高雄市
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <select className="bg-[#ECECEC] text-[#4B4B4B] select w-full max-w-xs">
                <option disabled selected>
                  新興區
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <br />
            <div className="join">
              <input
                className="bg-[#ECECEC] input input-bordered focus:input-primary invalid:input-error w-full join-item"
                placeholder="請輸入詳細地址"
              />
            </div>
          </div>
          <div className="form-control flex flex-row gap-2">
            <input id="readme" type="checkbox" className=" checkbox       " />
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
