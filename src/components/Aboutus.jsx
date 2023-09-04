import React, { useMemo } from 'react'



const Aboutus = ({
    imageDimensions,
    sectionTitle,
    propTop,
    propWidth,
    propLeft,
    propWidth1,
  }) => {
    const frameDivStyle = useMemo(() => {
      return {
        top: propTop,
        width: propWidth,
      };
    }, [propTop, propWidth]);
  
    const rectangleIconStyle = useMemo(() => {
      return {
        left: propLeft,
      };
    }, [propLeft]);
  
    const rectangleIcon1Style = useMemo(() => {
      return {
        width: propWidth1,
      };
    }, [propWidth1]);
  


  return (
    <div
      className="absolute top-[947px] left-[195px] w-[167.04px] h-[60px] text-left text-3xl text-white font-roboto-condensed"
      style={frameDivStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[16.04px] h-[60px]"
        alt=""
        src="/rectangle-39.svg"
      />
      <img
        className="absolute top-[0px] left-[151px] w-[16.04px] h-[60px]"
        alt=""
        src="/rectangle-39.svg"
        style={rectangleIconStyle}
      />
      <img
        className="absolute top-[4px] left-[22px] w-[123px] h-[52px]"
        alt=""
        src={imageDimensions}
        style={rectangleIcon1Style}
      />
      <div className="absolute top-[22px] left-[37px] font-medium">
        {sectionTitle}
      </div>
    </div>
    
  )
};

export default Aboutus;
