import React from "react";
import Header from "../Components/Header";
import Desh from "../Components/Desh";
import Container from "../Common/Container";
import Head from "../Common/Head";
import Title from "../Common/TItle";
import SmallDeshText from "../Common/SmallDeshText";
import DeshText from "../Common/DeshText";
import Button from "../Common/Button";
import { Icondata } from "../data/data";

function NewIncident() {
  return (
    <>
      <Header />

       <div className="pt-6 bg-[#f1f1f6] py-3">
        <Container>
       
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            {/* first part */}
            <div className="flex items-center gap-4">
              <div>
                <button
                  className="bg-[#E4E4E7] size-[40px] rounded-full text-3xl self-end"
                  aria-label="close-meun"
                >
                  &times;{" "}
                </button>
              </div>

              <div>
                <SmallDeshText>Home - Incidents - New Incident</SmallDeshText>
                <DeshText>New Incident</DeshText>
              </div>
            </div>

            {/* secend part  */}
            <div>
              <img
                className="w-[400px] xl:w-[552px] lg:w-[400px] md:w-[220px] "
                src="linefit.png"
              />
            </div>

            {/* last part  */}

            <div className="flex items-center gap-3">
              <Button className="bg-[#FAFAFA] text-mygray">Back</Button>
              <Button>Next step</Button>
            </div>
          </div>

        </Container>
          </div>


           {/* card part  */}
       <Container>
          <div className="my-16 lg:max-w-[820px] mx-auto">
             <Head>Which of these best describes the incident?</Head>

             <div className="mt-5 md:mt-10 mb-32 md:mb-56 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 ">
                {Icondata.map((item,index)=>(
                    <div key={index} className="flex items-center gap-2  p-3 bg-[#F4F4F5] rounded-md hover:bg-Orange hover:text-[#FAFAFA] hover:transition-all duration-300 cursor-pointer">
                       <img className="size-[24px]" src={item.img}/>
                       <h4 className="text-sm">{item.text}</h4>
                    </div>
                ))}
             </div>
         </div>
       </Container>
      
    </>
  );
}

export default NewIncident;
