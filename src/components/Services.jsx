import { useMemo } from "react";

const Services = ({
  imageDimensions,
  propTop,
  propLeft,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[1797px] left-[1120px] w-[169px] h-[213px] flex flex-col items-center justify-center gap-[20px] text-justify text-lg text-darkslateblue-100 font-roboto-condensed"
      style={frameDiv1Style}
    >
      <img
        className="relative w-[100px] h-[100px]"
        alt=""
        src={imageDimensions}
      />
      <div className="relative font-medium">Water Treatment Plants</div>
      <div className="rounded-10xs bg-white box-border w-[164px] h-[60px] flex flex-col items-center justify-center text-left text-mini border-[1px] border-solid border-darkslateblue-100">
        <div className="relative font-medium">Know More</div>
      </div>
    </div>
  );
};

export default Services;
