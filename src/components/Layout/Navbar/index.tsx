import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const labelRef = useRef<HTMLLabelElement>(null);

  const handleMenuClick = () => {
    if (labelRef.current) {
      labelRef.current?.click();
    }
  };

  return (
    <>
      <div className="navbar bg-white text-black">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <Link to={"/"}>
              <svg
                width="76"
                height="26"
                viewBox="0 0 76 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M69.3672 0.732693C71.9572 -0.201223 73.4108 -0.286313 76.0004 0.732693V24.5667C73.409 25.3845 71.9582 25.4433 69.3672 24.5667V0.732693Z"
                  fill="black"
                />
                <path
                  d="M66.0567 17.8793H52.7903C52.9095 18.9414 53.1968 19.7326 53.652 20.2529C54.2915 21.0008 55.126 21.3747 56.1557 21.3747C56.806 21.3747 57.4238 21.2121 58.0091 20.887C58.3668 20.681 58.7515 20.3179 59.1634 19.7977C59.9383 18.8188 65.4877 19.0715 65.6828 20.3992C64.6856 22.1334 63.4826 23.3798 62.0735 24.1385C60.6645 24.8864 58.6431 25.2603 56.0094 25.2603C53.7224 25.2603 51.9232 24.9406 50.6118 24.3011C49.3003 23.6508 48.211 22.6265 47.3439 21.2284C46.4877 19.8194 46.0596 18.1665 46.0596 16.2697C46.0596 13.5709 46.9212 11.387 48.6446 9.71782C50.3787 8.04868 52.7686 7.21411 55.8143 7.21411C58.2855 7.21411 60.2364 7.58804 61.6671 8.3359C63.0978 9.08376 64.1871 10.1676 64.9349 11.5875C65.6828 13.0073 66.0567 14.8553 66.0567 17.1314V17.8793ZM59.326 14.709C59.1959 13.43 58.8491 12.5142 58.2855 11.9614C57.7327 11.4086 57.0011 11.1323 56.0907 11.1323C55.0393 11.1323 54.1993 11.5495 53.5707 12.3841C53.1697 12.9044 52.915 13.6793 52.8066 14.709H59.326Z"
                  fill="black"
                />
                <path
                  d="M23.8623 16.286C23.8623 13.6522 24.7511 11.4845 26.5286 9.78285C28.3061 8.07036 30.7069 7.21411 33.7308 7.21411C37.1883 7.21411 39.8004 8.21668 41.5671 10.2218C42.9869 11.8368 43.6969 13.8256 43.6969 16.1884C43.6969 18.8439 42.8135 21.0224 41.0468 22.7241C39.291 24.4149 36.8577 25.2603 33.7471 25.2603C30.9724 25.2603 28.7288 24.5558 27.0163 23.1468C24.9136 21.4018 23.8623 19.1149 23.8623 16.286ZM30.4955 16.2697C30.4955 17.8088 30.8044 18.9469 31.4222 19.6839C32.0508 20.4209 32.8366 20.7894 33.7796 20.7894C34.7334 20.7894 35.5138 20.4263 36.1207 19.7001C36.7385 18.9739 37.0474 17.8088 37.0474 16.2047C37.0474 14.709 36.7385 13.598 36.1207 12.8718C35.5029 12.1348 34.7388 11.7663 33.8284 11.7663C32.8637 11.7663 32.0671 12.1402 31.4385 12.8881C30.8098 13.6251 30.4955 14.7523 30.4955 16.2697Z"
                  fill="black"
                />
                <path
                  d="M20.7125 24.3622C17.4701 25.2797 15.6727 25.3449 13.0713 24.3622L0 2.78802C3.08702 1.01318 4.76331 0.829609 7.59241 2.78802L20.7125 24.3622ZM0 24.3622V4.83651L6.25927 15.0952V24.3622C4.05716 25.269 2.71911 25.3857 0 24.3622ZM20.7125 2.78802V22.3137L14.4532 12.0062V2.78802C17.0301 1.20204 18.3973 1.17726 20.7125 2.78802Z"
                  fill="black"
                />
              </svg>
            </Link>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}>首頁</Link>
            </li>

            <li>
              <Link to={"/Portfolio"}>作品集</Link>
            </li>

            <li>
              <Link to={"/Service"}>服務項目</Link>
            </li>

            <li>
              <Link to={"/Blog"}>部落格</Link>
            </li>

            <li>
              <Link to={"/Contract"}>聯絡我</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div
            onClick={() => {
              handleMenuClick();
            }}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              width="30"
              height="20"
              viewBox="0 0 30 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66667 20C1.19444 20 0.798611 19.8403 0.479167 19.5208C0.159722 19.2014 0 18.8056 0 18.3333C0 17.8611 0.159722 17.4653 0.479167 17.1458C0.798611 16.8264 1.19444 16.6667 1.66667 16.6667H28.3333C28.8056 16.6667 29.2014 16.8264 29.5208 17.1458C29.8403 17.4653 30 17.8611 30 18.3333C30 18.8056 29.8403 19.2014 29.5208 19.5208C29.2014 19.8403 28.8056 20 28.3333 20H1.66667ZM1.66667 11.6667C1.19444 11.6667 0.798611 11.5069 0.479167 11.1875C0.159722 10.8681 0 10.4722 0 10C0 9.52778 0.159722 9.13194 0.479167 8.8125C0.798611 8.49306 1.19444 8.33333 1.66667 8.33333H28.3333C28.8056 8.33333 29.2014 8.49306 29.5208 8.8125C29.8403 9.13194 30 9.52778 30 10C30 10.4722 29.8403 10.8681 29.5208 11.1875C29.2014 11.5069 28.8056 11.6667 28.3333 11.6667H1.66667ZM1.66667 3.33333C1.19444 3.33333 0.798611 3.17361 0.479167 2.85417C0.159722 2.53472 0 2.13889 0 1.66667C0 1.19444 0.159722 0.798611 0.479167 0.479167C0.798611 0.159722 1.19444 0 1.66667 0H28.3333C28.8056 0 29.2014 0.159722 29.5208 0.479167C29.8403 0.798611 30 1.19444 30 1.66667C30 2.13889 29.8403 2.53472 29.5208 2.85417C29.2014 3.17361 28.8056 3.33333 28.3333 3.33333H1.66667Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="   drawer-toggle" />
        <div className="drawer-content">
          <label
            ref={labelRef}
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary  hidden "
          ></label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu z-[999px]  mt-16 p-4  w-full  min-h-60 bg-white text-base-content ">
            <li className=" flex justify-center items-center">
              <Link
                to={"/"}
                className=" w-full flex justify-center items-center"
              >
                首頁
              </Link>
            </li>
            <li className=" flex justify-center items-center">
              <Link
                to={"/Portfolio"}
                className=" w-full flex justify-center items-center"
              >
                作品集
              </Link>
            </li>

            <li className=" flex justify-center items-center">
              <Link
                to={"/Service"}
                className=" w-full flex justify-center items-center"
              >
                服務項目
              </Link>
            </li>

            <li className=" flex justify-center items-center">
              <Link
                to={"/Blog"}
                className=" w-full flex justify-center items-center"
              >
                部落格
              </Link>
            </li>
            <li className=" flex justify-center items-center">
              <Link
                to={"/Contract"}
                className=" w-full flex justify-center items-center"
              >
                聯絡我
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
