import { NavLink, useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
// import { useState } from "react";
import Cancel from "../../assets/dashboard_img/profile/cancel.svg";
import Logo from "../../assets/dashboard_img/Logo.svg";
// import Cancel from "../assets/dashboard_img/profile/cancel.svg";

interface MobileNavProps {
  // onClose: boolean;
  close: () => void;
}

const Sidebar: React.FC<MobileNavProps> = ({ close }) => {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout); // Get logout function from store

  return (
    <>
      <div className="flex flex-col h-full  justify-between">
        <ul className="flex  flex-col gap-[0.3rem] ">
          <li className="flex mb-5 items-center justify-between ">
            <div>
              <img src={Logo} className="w-[9rem] mt-5 ml-3" alt="logo image" />
            </div>
            <button
              className="mr-3 p-4 cursor-pointer block md:hidden "
              onClick={close}
            >
              <img src={Cancel} className="w-5" alt="" />
            </button>
          </li>
          <li className="flex items-center gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center w-[56%] text-[16px] gap-2 transition-colors rounded-r-[50px] duration-100 py-[12px]  pl-[1.7rem] ${
                  isActive
                    ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                    : "text-[#27014F]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6  ${
                      isActive ? "#fff" : "text-[#2014F]"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.27446 10.1262C5 10.7229 5 11.4018 5 12.7595V16.9999C5 18.8856 5 19.8284 5.58579 20.4142C6.11733 20.9457 6.94285 20.9949 8.5 20.9995V16C8.5 14.8954 9.39543 14 10.5 14H13.5C14.6046 14 15.5 14.8954 15.5 16V20.9995C17.0572 20.9949 17.8827 20.9457 18.4142 20.4142C19 19.8284 19 18.8856 19 16.9999V12.7595C19 11.4018 19 10.7229 18.7255 10.1262C18.4511 9.52943 17.9356 9.08763 16.9047 8.20401L15.9047 7.34687C14.0414 5.74974 13.1098 4.95117 12 4.95117C10.8902 4.95117 9.95857 5.74974 8.09525 7.34687L7.09525 8.20401C6.06437 9.08763 5.54892 9.52943 5.27446 10.1262ZM13.5 20.9999V16H10.5V20.9999H13.5Z"
                    />
                  </svg>
                  Dashboard
                </>
              )}
            </NavLink>
          </li>

          {/* <li className="flex items-center gap-2">
          <NavLink
            to="/bills_payment"
            className={({ isActive }) =>
              `flex items-center gap-2 transition-colors w-[70%] rounded-r-[50px] duration-100 py-[10px]  p-[1rem] ${
                isActive
                  ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                  : "text-[#27014F]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 21V7C2 5.11438 2 4.17157 2.58579 3.58579C3.17157 3 4.11438 3 6 3H16C16.8317 3 17.4778 3 18.0037 3.02706C15.7519 3.2741 14 5.18245 14 7.5V11.0002L13.9012 20.9671L11 20L8 21L5 20L2 21ZM21 11L16 11V7.5C16 6.11929 17.1193 5 18.5 5C19.8807 5 21 6.11929 21 7.5V11ZM4 7C4 6.44772 4.44772 6 5 6H11C11.5523 6 12 6.44772 12 7C12 7.55228 11.5523 8 11 8H5C4.44772 8 4 7.55228 4 7ZM4 11C4 10.4477 4.44772 10 5 10H7C7.55228 10 8 10.4477 8 11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11ZM4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5C4.44772 16 4 15.5523 4 15Z"
                    fill="currentColor" // Ensures color is controlled by CSS
                    className={`w-6 h-6  ${
                      isActive ? "#fff" : "text-[#2014F]"
                    }`}
                  />
                </svg>
                Bills Payment
              </>
            )}
          </NavLink>
        </li> */}

          {/* <li className="flex items-center gap-2">
          <NavLink
            to="/giftcards"
            className={({ isActive }) =>
              `flex items-center gap-2 w-[70%] transition-colors rounded-r-[50px] duration-100 py-[10px]  p-[1rem] ${
                isActive
                  ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                  : "text-[#27014F]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M5.625 0.159912H3.09375C2.27324 0.159912 1.48633 0.490206 0.906138 1.07813C0.325948 1.66606 0 2.46346 0 3.29491V5.85991H2.5515C2.30389 5.42526 2.20473 4.91995 2.26939 4.42237C2.33406 3.92479 2.55893 3.46273 2.90914 3.10785C3.25936 2.75296 3.71534 2.52509 4.20637 2.45957C4.69741 2.39404 5.19606 2.49452 5.625 2.74543V0.159912ZM6.75 4.71991V5.85991H7.875C8.0975 5.85991 8.31501 5.79305 8.50002 5.66779C8.68502 5.54252 8.82922 5.36448 8.91436 5.15617C8.99951 4.94786 9.02179 4.71865 8.97838 4.49751C8.93498 4.27637 8.82783 4.07324 8.6705 3.91381C8.51316 3.75438 8.31271 3.6458 8.09448 3.60182C7.87625 3.55783 7.65005 3.58041 7.44448 3.66669C7.23891 3.75297 7.06321 3.89909 6.9396 4.08656C6.81598 4.27403 6.75 4.49444 6.75 4.71991ZM9.8235 5.85991C10.0711 5.42526 10.1703 4.91995 10.1056 4.42237C10.0409 3.92479 9.81607 3.46273 9.46585 3.10785C9.11564 2.75296 8.65966 2.52509 8.16863 2.45957C7.67759 2.39404 7.17894 2.49452 6.75 2.74543V0.159912H14.9063C15.7268 0.159912 16.5137 0.490206 17.0939 1.07813C17.6741 1.66606 18 2.46346 18 3.29491V5.85991H9.8235ZM7.54537 6.99991L9.39825 8.87635C9.50387 8.98338 9.56321 9.12855 9.56321 9.27991C9.56321 9.43128 9.50387 9.57644 9.39825 9.68347C9.29263 9.7905 9.14937 9.85063 9 9.85063C8.85063 9.85063 8.70737 9.7905 8.60175 9.68347L6.75 7.80589V13.8399H14.9063C15.7268 13.8399 16.5137 13.5096 17.0939 12.9217C17.6741 12.3338 18 11.5364 18 10.7049V6.99991H7.54537ZM5.625 13.8399V7.80589L3.77325 9.68347C3.66763 9.7905 3.52437 9.85063 3.375 9.85063C3.22563 9.85063 3.08237 9.7905 2.97675 9.68347C2.87113 9.57644 2.81179 9.43128 2.81179 9.27991C2.81179 9.12855 2.87113 8.98338 2.97675 8.87635L4.82963 6.99991H0V10.7049C0 11.5364 0.325948 12.3338 0.906138 12.9217C1.48633 13.5096 2.27324 13.8399 3.09375 13.8399H5.625ZM5.625 4.71991C5.625 4.49444 5.55902 4.27403 5.4354 4.08656C5.31179 3.89909 5.13609 3.75297 4.93052 3.66669C4.72495 3.58041 4.49875 3.55783 4.28052 3.60182C4.06229 3.6458 3.86184 3.75438 3.70451 3.91381C3.54717 4.07324 3.44002 4.27637 3.39662 4.49751C3.35321 4.71865 3.37549 4.94786 3.46064 5.15617C3.54578 5.36448 3.68998 5.54252 3.87498 5.66779C4.05999 5.79305 4.2775 5.85991 4.5 5.85991H5.625V4.71991Z"
                    fill="currentColor" // Ensures color is controlled by CSS
                    className={`w-6 h-6  ${
                      isActive ? "#fff" : "text-[#2014F]"
                    }`}
                  />
                </svg>
                Gift Cards
              </>
            )}
          </NavLink>
        </li> */}
          {/* <li className="flex items-center gap-2">
          <NavLink
            to="/crypto"
            className={({ isActive }) =>
              `flex w-[70%] items-center  gap-2 transition-colors rounded-r-[50px] duration-100 py-[10px] p-[1rem] ${
                isActive
                  ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                  : "text-[#27014F]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.4875 12.7292C10.4133 12.7258 12.4375 12.7183 12.4142 11.4308C12.3917 10.1142 10.4475 10.1933 9.5 10.2325C9.39334 10.2375 9.30111 10.2406 9.22334 10.2417L9.26667 12.7308C9.33 12.7292 9.40361 12.7286 9.4875 12.7292ZM9.38917 9.10167C10.1617 9.10084 11.8475 9.09917 11.8275 7.92834C11.8058 6.73084 10.1867 6.80167 9.39584 6.83667C9.30695 6.84112 9.22972 6.84389 9.16417 6.845L9.20334 9.1025L9.38917 9.10167Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.58013 19.7009C12.9385 21.0367 18.3651 17.7759 19.701 12.4192C21.0368 7.06174 17.7751 1.63508 12.4168 0.300076C7.0618 -1.03659 1.63513 2.22508 0.300134 7.58341C-1.0357 12.9401 2.22513 18.3667 7.58097 19.7017M11.1493 5.51841C12.611 5.62174 13.7743 6.05008 13.9268 7.38674C14.0401 8.36508 13.6401 8.96091 12.991 9.30591C14.0743 9.54591 14.7618 10.1751 14.6535 11.6151C14.5193 13.4026 13.1968 13.9051 11.2985 14.0476L11.3301 15.9226L10.2001 15.9426L10.1676 14.0926C9.87541 14.0981 9.5743 14.1004 9.2643 14.0992L9.29764 15.9576L8.16763 15.9776L8.1343 14.0992L7.81514 14.1017C7.65291 14.1017 7.49014 14.1034 7.3268 14.1067L5.85513 14.1317L6.05597 12.7784C6.05597 12.7784 6.89264 12.7767 6.87764 12.7642C7.19764 12.7576 7.27847 12.5267 7.29597 12.3817L7.2443 9.41674L7.32514 9.41508H7.36347C7.32366 9.41025 7.28356 9.4083 7.24347 9.40924L7.2068 7.29258C7.1593 7.06424 7.00597 6.80091 6.54847 6.80924C6.56097 6.79258 5.7268 6.82341 5.7268 6.82341L5.70514 5.61674L7.26514 5.59008V5.59591C7.50014 5.59146 7.73986 5.58424 7.9843 5.57424L7.95264 3.71674L9.08264 3.69758L9.1143 5.51758C9.41597 5.50674 9.7193 5.49508 10.0168 5.49008L9.98514 3.68174L11.116 3.66174L11.1493 5.51841Z"
                    fill="currentColor" // Ensures color is controlled by CSS
                    className={`w-6 h-6  ${
                      isActive ? "#fff" : "text-[#2014F]"
                    }`}
                  />
                </svg>
                Crypto
              </>
            )}
          </NavLink>
        </li> */}
          <li className="flex items-center gap-2">
            <NavLink
              to="/wallet"
              className={({ isActive }) =>
                `flex items-center w-[56%] text-[16px] gap-2 transition-colors rounded-r-[50px] duration-100 py-[12px] pl-[1.7rem] ${
                  isActive
                    ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                    : "text-[#27014F]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.87868 3.87868C2 4.75736 2 6.17157 2 9V15C2 17.8284 2 19.2426 2.87868 20.1213C3.75736 21 5.17157 21 8 21H18C18.93 21 19.395 21 19.7765 20.8978C20.8117 20.6204 21.6204 19.8117 21.8978 18.7765C22 18.395 22 17.93 22 17H16C14.3431 17 13 15.6569 13 14C13 12.3431 14.3431 11 16 11H22V9C22 6.17157 22 4.75736 21.1213 3.87868C20.2426 3 18.8284 3 16 3H8C5.17157 3 3.75736 3 2.87868 3.87868ZM7 7C6.44772 7 6 7.44772 6 8C6 8.55228 6.44772 9 7 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H7Z"
                      fill="currentColor"
                    />
                    <path
                      d="M17 14H16"
                      stroke="#27014F"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className={`w-6 h-6  ${
                        isActive ? "#fff" : "text-[#2014F]"
                      }`}
                    />
                  </svg>
                  Wallet
                </>
              )}
            </NavLink>
          </li>

          <li className="flex items-center gap-2">
            <NavLink
              to="/transactions"
              className={({ isActive }) =>
                `flex items-center text-[16px]  gap-2 transition-colors rounded-r-[50px] w-[56%] duration-100 py-[12px] pl-[1.7rem] ${
                  isActive
                    ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                    : "text-[#27014F]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M3 7C3 5.11438 3 4.17157 3.58579 3.58579C4.17157 3 5.11438 3 7 3H17C18.8856 3 19.8284 3 20.4142 3.58579C21 4.17157 21 5.11438 21 7V17C21 18.8856 21 19.8284 20.4142 20.4142C19.8284 21 18.8856 21 17 21H7C5.11438 21 4.17157 21 3.58579 20.4142C3 19.8284 3 18.8856 3 17V7Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 10H12.6569C11.8394 10 11.4306 10 11.0631 9.84776C10.6955 9.69552 10.4065 9.40649 9.82843 8.82843L9.82843 8.82843L9.17157 8.17157C8.59351 7.59351 8.30448 7.30448 7.93694 7.15224C7.5694 7 7.16065 7 6.34315 7H3V17C3 18.8856 3 19.8284 3.58579 20.4142C4.17157 21 5.11438 21 7 21H17C18.8856 21 19.8284 21 20.4142 20.4142C21 19.8284 21 18.8856 21 17V7C21 7.93188 21 8.39782 20.8478 8.76537C20.6448 9.25542 20.2554 9.64477 19.7654 9.84776C19.3978 10 18.9319 10 18 10ZM7 15C6.44772 15 6 15.4477 6 16C6 16.5523 6.44772 17 7 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H7Z"
                      fill="currentColor"
                      className={`w-6 h-6  ${
                        isActive ? "#fff" : "text-[#2014F]"
                      }`}
                    />
                  </svg>
                  Transactions
                </>
              )}
            </NavLink>
          </li>

          <li className="flex items-center gap-2">
            <NavLink
              to="/referrals"
              className={({ isActive }) =>
                `flex items-center text-[16px]  gap-2 transition-colors rounded-r-[50px] w-[56%] duration-100 py-[12px] pl-[1.7rem] ${
                  isActive
                    ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                    : "text-[#27014F]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9 6.31592H2C1.05719 6.31592 0.585786 6.31592 0.292893 6.60881C0 6.9017 0 7.37311 0 8.31592V9.57908C0 10.5219 0 10.9933 0.292893 11.2862C0.585786 11.5791 1.05719 11.5791 2 11.5791H3.33333V11.6314H9V6.31592ZM3.33333 13.6314V18.0001C3.33333 18.9429 3.33333 19.4143 3.62623 19.7072C3.91912 20.0001 4.39052 20.0001 5.33333 20.0001H9V13.6314H3.33333ZM11 20.0001H14.6667C15.6095 20.0001 16.0809 20.0001 16.3738 19.7072C16.6667 19.4143 16.6667 18.9429 16.6667 18.0001V13.6314H11V20.0001ZM16.6667 11.6314V11.5791H18C18.9428 11.5791 19.4142 11.5791 19.7071 11.2862C20 10.9933 20 10.5219 20 9.57908V8.31592C20 7.37311 20 6.9017 19.7071 6.60881C19.4142 6.31592 18.9428 6.31592 18 6.31592H11V11.6314H16.6667Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14.7382 5.17032L16.3799 4.65192C17.2119 4.38916 17.7776 3.60857 17.7776 2.73601C17.7776 1.38875 16.4688 0.41331 15.1841 0.819011C13.6005 1.3191 12.1512 2.17241 10.9456 3.31454L9.99981 4.21053V5.26316H14.136C14.3403 5.26316 14.5434 5.23185 14.7382 5.17032Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.26177 5.17032L3.62015 4.65192C2.78809 4.38916 2.22241 3.60857 2.22241 2.73601C2.22241 1.38875 3.53123 0.41331 4.81595 0.819011C6.39955 1.3191 7.84885 2.17241 9.05443 3.31454L10.0002 4.21053V5.26316H5.86403C5.65971 5.26316 5.4566 5.23185 5.26177 5.17032Z"
                      fill="currentColor"
                      className={`w-6 h-6  ${
                        isActive ? "#fff" : "text-[#2014F]"
                      }`}
                    />
                  </svg>
                  Referrals
                </>
              )}
            </NavLink>
          </li>

          <li className="flex items-center text-[16px] gap-2">
            <a
              href="http://rates.twjhub.com"
              target="_blank"
              className="flex items-center w-[70%] gap-2 transition-colors  duration-100 py-[10px]    rounded-r-[50px] pl-[1.7rem]  text-[#27014F]"
            >
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.87868 2.87868C2 3.75736 2 5.17157 2 8V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 8 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V8C22 5.17157 22 3.75736 21.1213 2.87868C20.2426 2 18.8284 2 16 2H8C5.17157 2 3.75736 2 2.87868 2.87868ZM17.8321 9.5547C18.1384 9.09517 18.0142 8.4743 17.5547 8.16795C17.0952 7.8616 16.4743 7.98577 16.1679 8.4453L13.1238 13.0115L12.6651 12.094C11.9783 10.7205 10.0639 10.6013 9.2121 11.8791L6.16795 16.4453C5.8616 16.9048 5.98577 17.5257 6.4453 17.8321C6.90483 18.1384 7.5257 18.0142 7.83205 17.5547L10.8762 12.9885L11.3349 13.906C12.0217 15.2795 13.9361 15.3987 14.7879 14.1209L17.8321 9.5547Z"
                    fill="currentColor"
                    className="w-6 h-6 text-[#2014F]"
                  />
                </svg>
                Rates
              </>
            </a>
          </li>

          <li className="flex items-center gap-2">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex items-center text-[16px] w-[56%] gap-2 transition-colors rounded-r-[50px] duration-100 py-[12px]  pl-[1.7rem] ${
                  isActive
                    ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                    : "text-[#27014F]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="8" r="4" fill="#currentColor" />
                    <path
                      d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z"
                      fill="currentColor"
                      className={`w-6 h-6  ${
                        isActive ? "#fff" : "text-[#2014F]"
                      }`}
                    />
                  </svg>
                  Profile
                </>
              )}
            </NavLink>
          </li>
        </ul>

        <ul className="mb-[12%] flex flex-col gap-2">
          <li className="flex items-center  ">
            <NavLink to="/support"
                     className={({ isActive }) =>
                      `flex items-center w-[68%] gap-2 transition-colors rounded-r-[50px] duration-100 py-[12px]  pl-[1.7rem] ${
                        isActive
                          ? "white bg-[#8003A9] rounded-r-[50px] pr-[30px] text-[#fff]"
                          : "text-[#27014F]"
                      }`
                    }>
                      
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"  
                      >
                        <path
                          d="M19.3259 5.77772C20 6.78661 20 8.19108 20 11C20 13.8089 20 15.2134 19.3259 16.2223C19.034 16.659 18.659 17.034 18.2223 17.3259C17.3409 17.9148 16.1577 17.9892 14 17.9986V18L12.8944 20.2111C12.5259 20.9482 11.4741 20.9482 11.1056 20.2111L10 18V17.9986C7.8423 17.9892 6.65907 17.9148 5.77772 17.3259C5.34096 17.034 4.96596 16.659 4.67412 16.2223C4 15.2134 4 13.8089 4 11C4 8.19108 4 6.78661 4.67412 5.77772C4.96596 5.34096 5.34096 4.96596 5.77772 4.67412C6.78661 4 8.19108 4 11 4H13C15.8089 4 17.2134 4 18.2223 4.67412C18.659 4.96596 19.034 5.34096 19.3259 5.77772Z"
                          fill="currentColor"
                          fillOpacity="0.25"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 9L15 9"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 13H12"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Help
                    </>
                
                 </NavLink>
          </li>
          <li className="flex  items-center gap-2">
            <div className="relative">
              <div
                onClick={() => {
                  // /console.log("Button clicked"); // Debugging
                  // setIsModalOpen(true);
                  logout(navigate);
                }}
                className=" flex cursor-pointer text-[16px] pl-[1.7rem] pb-[10px] items-center justify-center gap-2 text-[#27014F] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <ellipse
                    cx="6"
                    cy="6"
                    rx="6"
                    ry="6"
                    transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 21 18)"
                    fill="#7E869E"
                    fillOpacity="0.25"
                  />
                  <path
                    d="M8.7 12C8.7 8.52061 11.5206 5.7 15 5.7C18.4794 5.7 21.3 8.52061 21.3 12C21.3 15.4794 18.4794 18.3 15 18.3C11.5206 18.3 8.7 15.4794 8.7 12Z"
                    stroke="#7E869E"
                    strokeOpacity="0.25"
                    strokeWidth="0.6"
                  />
                  <path
                    d="M9 18.9282C10.2162 19.6303 11.5957 20 13 20C14.4043 20 15.7838 19.6303 17 18.9282C18.2162 18.2261 19.2261 17.2162 19.9282 16C20.6303 14.7838 21 13.4043 21 12C21 10.5957 20.6303 9.21615 19.9282 8C19.2261 6.78385 18.2162 5.77394 17 5.0718C15.7838 4.36965 14.4043 4 13 4C11.5957 4 10.2162 4.36965 9 5.0718"
                    stroke="#27014F"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M3 12L2.41435 11.5315L2.03953 12L2.41435 12.4685L3 12ZM12 12.75C12.4142 12.75 12.75 12.4142 12.75 12C12.75 11.5858 12.4142 11.25 12 11.25V12.75ZM6.41435 6.53148L2.41435 11.5315L3.58565 12.4685L7.58565 7.46852L6.41435 6.53148ZM2.41435 12.4685L6.41435 17.4685L7.58565 16.5315L3.58565 11.5315L2.41435 12.4685ZM3 12.75H12V11.25H3V12.75Z"
                    fill="#27014F"
                  />
                </svg>
                <div>Log Out</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
