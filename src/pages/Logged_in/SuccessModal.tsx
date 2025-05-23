import React from "react";
import Check from "../../assets/dashboard_img/dashboard_icons/greenCheck.svg";
import DeleteAccount from "../../assets/dashboard_img/profile/cancel.svg";

interface SuccessModalProps {
  title: string;
  message: string;
  onClose: () => void;
  button?: React.ReactNode; // Optional button
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  message,
  onClose,
  button,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black/40 bg-opacity-50">
      <div className="p-[0.7rem] rounded-[20px] bg-[#fff]/20">
        <div className="bg-white rounded-lg shadow-lg px-6 pb-[2rem] w-[500px] text-center">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="cursor-pointer pt-[20px] p-[1px]"
            >
              <img src={DeleteAccount} className="w-[1reM]" alt="" />
            </button>
          </div>

          {/* Constant Image */}
          <img src={Check} alt="Success" className="mx-auto  mt-[1rem] mb-4" />

          {/* Dynamic Text */}
          <h5 className="text-[24px] mt-[1rem] font-semibold text-[#27014F]">
            {title}
          </h5>
          <div className="w-full flex justify-center ">
            <p className="text-[#0A2E65]/60 w-[70%] text-[20px] text-center leading-5.5 mt-2 mb-[1.5rem]">
              {message}
            </p>
          </div>
          {button && <div className="mt-4">{button}</div>}
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
