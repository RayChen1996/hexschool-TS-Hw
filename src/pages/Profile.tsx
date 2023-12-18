import Nav from "../components/Navbar";
import Svg from "../components/svg/Avator";
export default function Profile() {
  return (
    <div>
      <Nav />
      <div className="mb-10 h-screen mt-4 ">
        <div className=" relative  ">
          <img
            className=" h-[384px] w-[1800px] bg-cover  "
            src="https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className=" absolute top-32 left-64   flex flex-row justify-center items-center gap-6">
            <Svg />
            <label className="text-[48px]" htmlFor="">
              Hello，Jessica
            </label>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}
