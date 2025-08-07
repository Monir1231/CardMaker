import React from "react";
import Header from "../Components/Header";
import Head from "../Common/Head";
import Title from "../Common/TItle";
import Container from "../Common/Container";
import { incidentItem } from "../data/data";
import Button  from "../Common/Button";

function Incident() {
  return (
    <>
      <Header />
      <Container>
        <div className="my-16 lg:max-w-[820px] mx-auto">

          <div className="flex  flex-col justify-center items-center mx-auto space-y-3 ">
            <Head>Let’s get started</Head>

            <Title className='text-center'>
              Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar
              sit general sac mascho werhoLorem ipsum dolar sit gene
            </Title>

             <div className="my-4 xl:w-[609px] xl:h-[29px] w-fit">
                <img src="Line.png"/>
             </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 ">
            {incidentItem.map((item,index)=>(
            <div key={index} className="p-4 bg-[#F4F4F5] rounded-md border-[#F4F4F9] ">
               <img className="mb-10 size-[50px]" src={item.img}/>
               <h4 className="text-[20px] font-bold max-w-[190px]">{item.title}</h4>
               <p className="text-[14px] max-w-[195px] text-[#71717A]">{item.des}</p>
            </div>
          ))}

          
          </div>
           
        </div>

        <div className="flex justify-center items-center mx-auto py-10">
            <Button >Get started</Button>
           </div>
        
      </Container>
    </>
  );
}

export default Incident;