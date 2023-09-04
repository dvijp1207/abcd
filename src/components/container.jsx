import React from "react";

const Container = () => {
    return (
      <div className="w-[1149px] h-[147px] flex flex-row items-center justify-start gap-[99px] text-left text-31xl text-white font-roboto-condensed">
        <div className="rounded-10xs box-border w-[317px] h-[147px] flex flex-col py-0 px-[84px] items-end justify-center border-[2px] border-solid border-white">
          <div className="w-[148px] h-[69px] flex flex-col items-center justify-start gap-[20px]">
            <div className="relative font-medium">100+</div>
            <div className="relative text-lg font-medium">HAPPY CUSTOMERS</div>
          </div>
        </div>
        <div className="rounded-10xs box-border w-[317px] h-[147px] flex flex-col py-0 px-[49px] items-center justify-start gap-[20px] border-[2px] border-solid border-white">
          <div className="relative font-medium">10+</div>
          <div className="relative text-lg font-medium">
            PASSIONATE TEAM MEMBERS
          </div>
        </div>
        <div className="rounded-10xs box-border w-[317px] h-[147px] flex flex-col py-0 pr-[49px] pl-[50px] items-center justify-start gap-[20px] border-[2px] border-solid border-white">
          <div className="relative font-medium">1,000+</div>
          <div className="relative text-lg font-medium">
            SUCCESSFUL INSTALLATIONS
          </div>
        </div>
      </div>
    );
  };
  
  export default Container;