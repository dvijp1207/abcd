import React from "react";

const Address = () => {
    return (
      <div className="w-[574px] h-[326.78px] flex flex-col items-start justify-start gap-[50px] text-left text-17xl text-white font-roboto-condensed">
        <div className="relative">Corporate Office</div>
        <div className="relative text-lg text-justify inline-block w-[574px] h-[43px] shrink-0">
          Give us a call or drop by anytime, we endeavor to answer all inquiries
          within 24 hours on business days. We will be happy to answer your
          questions.
        </div>
        <div className="relative w-[234px] h-[157.78px] text-xs">
          <img
            className="absolute h-[20.76%] w-[17.09%] top-[0%] right-[82.91%] bottom-[79.24%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/black5.svg"
          />
          <div className="absolute top-[0px] left-[50px] w-[131px] h-[31px] flex flex-col items-start justify-start gap-[3px]">
            <div className="relative">EMAIL</div>
            <div className="relative font-medium">info@neptunetechnology.in</div>
          </div>
          <img
            className="absolute h-[25.4%] w-[17.09%] top-[72.7%] right-[82.91%] bottom-[1.9%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/black6.svg"
          />
          <div className="absolute top-[112.78px] left-[50px] w-[184px] h-[45px] flex flex-col items-start justify-start gap-[3px]">
            <div className="relative">VISIT</div>
            <div className="relative font-medium">
              <p className="m-0">Neptune House</p>
              <p className="m-0">Ahmedabad - 380060, (Gujarat) INDIA.</p>
            </div>
          </div>
          <div className="absolute top-[57.76px] left-[50px] w-[81px] h-[31px] flex flex-col items-start justify-start gap-[3px]">
            <div className="relative">PHONE</div>
            <div className="relative font-medium">+91 8320086504</div>
          </div>
          <img
            className="absolute h-[25.36%] w-[17.09%] top-[33.44%] right-[82.91%] bottom-[41.2%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/black7.svg"
          />
        </div>
      </div>
    );
  };
  
  export default Address;
  