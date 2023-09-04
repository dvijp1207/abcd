import React from "react";
import Aboutus from "./Aboutus";
import Address from "./Address";
import Boxcontainer from "./Boxcontainer";
import Container from "./container";
import Services from "./Services";

const Mainpage = () => {
  return (
    <div className="relative bg-white w-full h-[4951px] overflow-hidden text-left text-lg text-white font-roboto-condensed">
      <div className="absolute top-[0px] left-[calc(50%_-_960px)] bg-white w-[1920px] h-10" />
      <div className="absolute top-[39px] left-[-1px] box-border w-[1922px] h-0.5 border-t-[2px] border-dashed border-gray" />
      <div className="absolute top-[169px] left-[-1px] box-border w-[1922px] h-0.5 border-t-[2px] border-dashed border-gray" />
      <img
        className="absolute h-[0.22%] w-[0.73%] top-[0.28%] right-[89.11%] bottom-[99.5%] left-[10.16%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/black.svg"
      />
      <div className="absolute top-[13px] left-[217px] text-xs text-gray">{`Neptune House, Plot No: 4/2, Laxmi Industrial Estate, Near: Science City Circle, Bhadaj, Gujarat 380060 `}</div>
      <div className="absolute top-[40px] left-[calc(50%_-_960px)] bg-white w-[1920px] h-32" />
      <img
        className="absolute top-[62px] left-[192px] w-[244px] h-[83.56px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <div className="absolute top-[95px] left-[960px] w-[523px] h-7 flex flex-col items-start justify-start gap-[10px] text-mini text-gray">
        <div className="relative w-[523px] h-[18px]">
          <div className="absolute top-[0px] left-[0px] font-medium text-darkslateblue-100">
            Home
          </div>
          <div className="absolute top-[0px] left-[91px]">About us</div>
          <div className="absolute top-[0px] left-[201px]">
            Solution Provider
          </div>
          <div className="absolute top-[0px] left-[365px]">Career</div>
          <div className="absolute top-[0px] left-[459px]">Contact us</div>
        </div>
        <div className="relative box-border w-[30px] h-0.5 border-t-[2px] border-solid border-yellowgreen" />
      </div>
      <div className="absolute top-[74px] left-[1562px] rounded-10xs bg-darkslateblue-100 w-[164px] h-[60px] flex flex-col items-center justify-center text-mini">
        <div className="relative font-medium">SHOP NOW</div>
      </div>
      <img
        className="absolute top-[178px] left-[calc(50%_-_960px)] w-[1920px] h-[660px] object-cover"
        alt=""
        src="/rectangle-33@2x.png"
      />
      <div className="absolute top-[178px] left-[calc(50%_-_960px)] [background:linear-gradient(90deg,_rgba(0,_0,_0,_0.6),_rgba(0,_0,_0,_0))] w-[1920px] h-[660px]" />
      <div className="absolute top-[381px] left-[192px] w-[702px] h-[254px] flex flex-col items-start justify-start gap-[20px] text-[48px]">
        <b className="relative">
          <p className="m-0">Providing excellence in water supply</p>
          <p className="m-0">and pressure boosting</p>
        </b>
        <div className="relative text-lg font-medium">
          <p className="m-0">
            We offer high-quality, future-oriented water pump solutions that
            help our customers to ensure a
          </p>
          <p className="m-0">
            cost-effective water supply and pressure boosting.
          </p>
        </div>
        <div className="rounded-10xs bg-white w-[137px] h-[60px] flex flex-col items-center justify-center text-mini text-darkslateblue-100">
          <div className="relative font-medium">LEARN MORE</div>
        </div>
      </div>
      <img
        className="absolute top-[413px] right-[0px] w-[145px] h-[190px]"
        alt=""
        src="/group-26.svg"
      />
      <div className="absolute top-[838px] left-[-8px] w-[1936px] h-[768px]">
        <div className="absolute top-[0px] left-[0px] h-[768px] flex flex-row items-center justify-start">
          <div className="w-[484px] flex flex-col items-center justify-start">
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="w-[484px] flex flex-col items-center justify-start">
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="w-[484px] flex flex-col items-center justify-start">
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
          <div className="w-[484px] flex flex-col items-center justify-start">
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
            <img
              className="relative w-[484px] h-96 object-cover"
              alt=""
              src="/image-4@2x.png"
            />
          </div>
        </div>
        <img
          className="absolute top-[145px] right-[8px] w-96 h-[74px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
        <img
          className="absolute top-[249px] right-[8px] w-96 h-[74px] object-cover"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <Aboutus imageDimensions="/rectangle-40.svg" sectionTitle="ABOUT US" />
      <div className="absolute top-[1057px] left-[193px] text-17xl text-black">
        <p className="m-0">Most Trusted Water</p>
        <p className="m-0">Solutions.</p>
      </div>
      <div className="absolute top-[1181px] left-[194px] text-gray text-justify inline-block w-[369px]">
        Neptune Technology was incorporated in 2014 with the prime goal of
        introducing ourselves as the fastest and most complete, trusted water
        pump solutions company. Our expertise includes water supply and pressure
        boosting systems, wastewater treatment systems, fire fighting pumps,
        multi-stage pressure pumps, water heating systems, swimming pool
        filtration systems, rainwater harvesting systems, etc. For us, our
        clients stand foremost - offering them cutting-edge services and
        products. Neptune Technology’s experienced and energetic technical
        service team involves professionals with promising quality of life.
      </div>
      <div className="absolute top-[1152px] left-[194px] box-border w-[351px] h-0.5 border-t-[2px] border-dashed border-gray" />
      <img
        className="absolute top-[1057px] left-[654px] w-[355px] h-[440px] object-cover"
        alt=""
        src="/rectangle-42@2x.png"
      />
      <img
        className="absolute top-[1057px] left-[1049px] w-[355px] h-[200px] object-cover"
        alt=""
        src="/rectangle-43@2x.png"
      />
      <img
        className="absolute top-[1297px] left-[1049px] w-[355px] h-[200px] object-cover"
        alt=""
        src="/rectangle-44@2x.png"
      />
      <div className="absolute top-[1606px] left-[calc(50%_-_960px)] bg-whitesmoke w-[1920px] h-[954px]" />
      <img
        className="absolute top-[1638px] left-[0px] w-[545px] h-[922px] object-cover"
        alt=""
        src="/image-5@2x.png"
      />
      <Aboutus
        imageDimensions="/rectangle-401.svg"
        sectionTitle="OUR SERVICES"
        propTop="1741px"
        propWidth="203.04px"
        propLeft="187px"
        propWidth1="159px"
      />
      <div className="absolute top-[1851px] left-[193px] text-17xl text-black">
        <p className="m-0">We provide a full range services</p>
        <p className="m-0">for your business</p>
      </div>
      <div className="absolute top-[1945px] left-[194px] box-border w-[450px] h-0.5 border-t-[2px] border-dashed border-gray" />
      <div className="absolute top-[1973px] left-[194px] text-gray text-justify inline-block w-[449px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.to, fringilla vel, aliquet nec, vulputate eget, arcu.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.to, fringilla vel, aliquet nec, vulputate eget, arcu.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.to, fringilla vel, aliquet nec, vulputate eget, arcu.
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.to, fringilla vel, aliquet nec, vulputate eget, arcu.
      </div>
      <div className="absolute top-[1741px] left-[683px] bg-white w-[323px] h-[324px]" />
      <div className="absolute top-[1741px] left-[1042px] bg-white w-[324px] h-[324px]" />
      <div className="absolute top-[1741px] left-[1402px] bg-white w-[323px] h-[324px]" />
      <div className="absolute top-[2101px] left-[683px] bg-white w-[323px] h-[324px]" />
      <div className="absolute top-[2101px] left-[1042px] bg-white w-[324px] h-[324px]" />
      <div className="absolute top-[2101px] left-[1402px] bg-white w-[323px] h-[324px]" />
      <div className="absolute top-[1797px] left-[763px] w-[164px] h-[213px] text-justify text-darkslateblue-100">
        <div className="absolute top-[0px] left-[32px] rounded-[50%] bg-darkslateblue-100 w-[100px] h-[100px]" />
        <img
          className="absolute h-[25.11%] w-[32.93%] top-[10.57%] right-[33.54%] bottom-[64.32%] left-[33.54%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/black1.svg"
        />
        <div className="absolute top-[120px] left-[22px] font-medium">
          Pumping System
        </div>
        <div className="absolute top-[153px] left-[0px] rounded-10xs bg-darkslateblue-100 w-[164px] h-[60px] flex flex-col items-center justify-center text-left text-mini text-white">
          <div className="relative font-medium">Know More</div>
        </div>
      </div>
      <Services imageDimensions="/group-41.svg" />
      <Services
        imageDimensions="/group-411.svg"
        propTop="2157px"
        propLeft="1479px"
      />
      <div className="absolute top-[2157px] left-[763px] w-[164px] h-[213px] flex flex-col items-center justify-center gap-[20px] text-justify text-darkslateblue-100">
        <img
          className="relative w-[100px] h-[100px]"
          alt=""
          src="/group-44.svg"
        />
        <div className="relative font-medium">Hot Water System</div>
        <div className="rounded-10xs bg-white box-border w-[164px] h-[60px] flex flex-col items-center justify-center text-left text-mini border-[1px] border-solid border-darkslateblue-100">
          <div className="relative font-medium">Know More</div>
        </div>
      </div>
      <div className="absolute top-[2157px] left-[1154px] rounded-[50%] bg-darkslateblue-100 w-[100px] h-[100px]" />
      <img
        className="absolute h-[0.86%] w-[2.81%] top-[44.16%] right-[35.89%] bottom-[54.98%] left-[61.3%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/black2.svg"
      />
      <div className="absolute top-[2277px] left-[1086px] font-medium text-darkslateblue-100 text-justify">
        Swimming Pool Filtration System
      </div>
      <div className="absolute top-[2310px] left-[1122px] rounded-10xs bg-white box-border w-[164px] h-[60px] flex flex-col items-center justify-center text-mini text-darkslateblue-100 border-[1px] border-solid border-darkslateblue-100">
        <div className="relative font-medium">Know More</div>
      </div>
      <div className="absolute top-[1797px] left-[1455px] w-[217px] h-[213px] text-justify text-darkslateblue-100">
        <div className="absolute top-[0px] left-[59px] rounded-[50%] bg-darkslateblue-100 w-[100px] h-[100px]" />
        <img
          className="absolute h-[22.02%] w-[24.88%] top-[12.72%] right-[37.33%] bottom-[65.26%] left-[37.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/black3.svg"
        />
        <div className="absolute top-[120px] left-[0px] font-medium">
          Waste Water Treatment Plants
        </div>
        <div className="absolute top-[153px] left-[27px] rounded-10xs bg-white box-border w-[164px] h-[60px] flex flex-col items-center justify-center text-left text-mini border-[1px] border-solid border-darkslateblue-100">
          <div className="relative font-medium">Know More</div>
        </div>
      </div>
      <div className="absolute top-[3162px] left-[-19px] w-[1958px] h-[1289px] text-sm">
        <div className="absolute top-[680px] left-[0px] w-[1958px] h-[609px]">
          <div className="absolute top-[0px] left-[0px] h-[609px] flex flex-row items-center justify-start">
            <div className="w-[489.5px] flex flex-col items-center justify-start">
              <img
                className="relative w-[489.5px] h-[305px] object-cover"
                alt=""
                src="/image-41@2x.png"
              />
              <img
                className="relative w-[489.5px] h-[304px] object-cover"
                alt=""
                src="/image-42@2x.png"
              />
            </div>
            <div className="w-[489.5px] flex flex-col items-center justify-start">
              <img
                className="relative w-[489.5px] h-[305px] object-cover"
                alt=""
                src="/image-43@2x.png"
              />
              <img
                className="relative w-[489.5px] h-[304px] object-cover"
                alt=""
                src="/image-44@2x.png"
              />
            </div>
            <div className="w-[489.5px] flex flex-col items-center justify-start">
              <img
                className="relative w-[489.5px] h-[305px] object-cover"
                alt=""
                src="/image-41@2x.png"
              />
              <img
                className="relative w-[489.5px] h-[304px] object-cover"
                alt=""
                src="/image-42@2x.png"
              />
            </div>
            <div className="w-[489.5px] flex flex-col items-center justify-start">
              <img
                className="relative w-[489.5px] h-[305px] object-cover"
                alt=""
                src="/image-43@2x.png"
              />
              <img
                className="relative w-[489.5px] h-[304px] object-cover"
                alt=""
                src="/image-44@2x.png"
              />
            </div>
          </div>
          <img
            className="absolute top-[145px] right-[8.09px] w-[388.36px] h-[74px] object-cover"
            alt=""
            src="/image-21@2x.png"
          />
          <img
            className="absolute top-[249px] right-[8.09px] w-[388.36px] h-[74px] object-cover"
            alt=""
            src="/image-21@2x.png"
          />
        </div>
        <img
          className="absolute top-[761px] left-[214px] w-[16.04px] h-[60px]"
          alt=""
          src="/rectangle-39.svg"
        />
        <img
          className="absolute top-[761px] left-[437px] w-[16.04px] h-[60px]"
          alt=""
          src="/rectangle-39.svg"
        />
        <img
          className="absolute top-[765px] left-[236px] w-[195px] h-[52px]"
          alt=""
          src="/rectangle-402.svg"
        />
        <div className="absolute top-[783px] left-[249px] text-3xl font-medium">
          CONNECT WITH US
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_765px)] bg-darkslateblue-100 w-[1530px] h-[200px]" />
        <div className="absolute top-[70.05px] left-[302px] w-[548px] h-[59.95px] flex flex-row pt-[59.952850341796875px] px-0 pb-0 box-border items-center justify-start gap-[50px] text-17xl">
          <img
            className="relative w-[60px] h-[59.95px]"
            alt=""
            src="/black4.svg"
          />
          <div className="relative">Give us Feedback Message on:</div>
        </div>
        <div className="absolute top-[70px] left-[1469px] rounded-10xs bg-white w-[198px] h-[60px] flex flex-col items-center justify-center text-mini text-darkslateblue-100">
          <div className="relative font-medium">info@neptunetechnology.in</div>
        </div>
        <img
          className="absolute top-[280px] left-[calc(50%_-_960px)] w-[1920px] h-[400px] object-cover"
          alt=""
          src="/rectangle-52@2x.png"
        />
        <div className="absolute top-[280px] left-[calc(50%_-_960px)] bg-darkslateblue-200 w-[1920px] h-[400px]" />
        <div className="absolute top-[369px] left-[405px] w-[1149px] h-[223px] flex flex-col items-center justify-center gap-[50px] text-17xl">
          <div className="relative">
            Make The Most Of A World-Class Team And Products
          </div>
          <Container />
        </div>
        <div className="absolute top-[871px] left-[214px] w-[830px] h-[50px] flex flex-row items-center justify-start gap-[30px] text-gray">
          <div className="w-[400px] h-[50px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">First Name</div>
            <div className="relative rounded-10xs bg-white box-border w-[400px] h-[35px] border-[1px] border-solid border-lightgray" />
          </div>
          <div className="w-[400px] h-[50px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">Last Name</div>
            <div className="relative rounded-10xs bg-white box-border w-[400px] h-[35px] border-[1px] border-solid border-lightgray" />
          </div>
        </div>
        <div className="absolute top-[951px] left-[213px] w-[831px] h-[50px] flex flex-row items-center justify-start gap-[30px] text-gray">
          <div className="w-[401px] h-[50px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">Email Id</div>
            <div className="relative rounded-10xs bg-white box-border w-[400px] h-[35px] border-[1px] border-solid border-lightgray" />
          </div>
          <div className="w-[400px] h-[50px] flex flex-col items-start justify-start gap-[5px]">
            <div className="relative font-medium">Mobile Number</div>
            <div className="relative rounded-10xs bg-white box-border w-[400px] h-[35px] border-[1px] border-solid border-lightgray" />
          </div>
        </div>
        <div className="absolute top-[1031px] left-[213px] w-[831px] h-[85px] flex flex-col items-start justify-start gap-[5px] text-gray">
          <div className="relative font-medium">Email Id</div>
          <div className="relative rounded-10xs bg-white box-border w-[830px] h-[70px] border-[1px] border-solid border-lightgray" />
        </div>
        <div className="absolute top-[1146px] left-[214px] rounded-10xs bg-darkslateblue-100 w-[140px] h-[60px] flex flex-col items-center justify-center text-mini">
          <div className="relative font-medium">SUBMIT</div>
        </div>
        <div className="absolute top-[773px] left-[1074px] rounded-[10px] bg-darkslateblue-100 w-[670px] h-[423px] flex flex-col items-center justify-center">
          <Address />
        </div>
      </div>
      <Boxcontainer />
      <div className="absolute top-[4451px] left-[calc(50%_-_960px)] bg-darkslateblue-100 w-[1920px] h-[500px]" />
      <div className="absolute top-[4487px] left-[195px] bg-darkslateblue-100 shadow-[0px_2px_10px_rgba(0,_0,_0,_0.35)] w-[1530px] h-[385px]" />
      <img
        className="absolute top-[4526px] left-[241px] w-[244px] h-[81.6px] object-cover"
        alt=""
        src="/image-7@2x.png"
      />
      <div className="absolute top-[4657.6px] left-[241px] w-[263px] h-[139px] flex flex-col items-start justify-start gap-[20px]">
        <div className="relative">Address</div>
        <div className="relative text-base">
          <p className="m-0">NEPTUNE HOUSE</p>
          <p className="m-0">Plot No: 4/2, Laxmi Industrial Estate</p>
          <p className="m-0">B/H. Aarkay Food Ltd</p>
          <p className="m-0">Near: Science City Circle,</p>
          <p className="m-0">Bhadaj-Hare Krishna Mandir Road Bhadaj,</p>
          <p className="m-0">Gujarat (INDIA) - 380060</p>
        </div>
      </div>
      <div className="absolute top-[4657.6px] left-[585px] w-[97px] h-[179px] flex flex-col items-start justify-start gap-[20px]">
        <div className="relative">Quick Access</div>
        <div className="relative text-base">
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            Testimonials
          </p>
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            About us
          </p>
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            Solutions
          </p>
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            Career
          </p>
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            Contact Us
          </p>
          <p className="m-0">Get A Quote</p>
        </div>
      </div>
      <div className="absolute top-[4657.6px] left-[975px] w-[204px] h-[90.4px] text-base">
        <div className="absolute top-[0px] left-[0px] text-lg">
          Get in Touch
        </div>
        <div className="absolute top-[33.4px] left-[32px]">
          <p className="[margin-block-start:0] [margin-block-end:8px]">
            info@neptunetechnology.in
          </p>
          <p className="m-0">+91 8320086504</p>
        </div>
        <div className="absolute top-[79.4px] left-[32px]">+91 9687501052</div>
        <img
          className="absolute top-[56.4px] left-[2px] w-5 h-5"
          alt=""
          src="/group-82.svg"
        />
        <img
          className="absolute top-[29.4px] left-[2px] w-5 h-5"
          alt=""
          src="/group-81.svg"
        />
      </div>
      <div className="absolute top-[4657.6px] left-[1365px]">
        Connect with us on
      </div>
      <img
        className="absolute h-[0.63%] w-[8.59%] top-[94.66%] right-[20.31%] bottom-[4.71%] left-[71.09%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-88.svg"
      />
      <div className="absolute top-[4905px] left-[calc(50%_-_172px)]">
        © 2023 Neptune Technology. All rights reserved.
      </div>
    </div>
  );
};
export default Mainpage;
