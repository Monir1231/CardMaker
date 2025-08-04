import React from "react";
import Sms from "./Sms";
 import MesInput from "./MesInput";
 import Button from "./Button";
 import CloseIcon from '@mui/icons-material/Close';

function Massage() {
  return (
    <div>
    <div className="w-[331px] pb-3  rounded-md   bg-[#F4F4F5]  z-50">
      <div className="py-2.5 bg-Orange rounded-t-md ">
        <h1 className="text-[18px] font-bold text-white px-3">
          Chat with Cypher
        </h1>
      </div>
      {/* massage  */}

      <div className="px-3">


        <div className="text-white flex items-center justify-end ">
           <div className="mt-4">
             <Sms className="text-mygray ">
              Lorem ipsum dolar sit general sac mascho werho
            </Sms>
           </div>
        </div>

        <div className="text-white flex justify-start ">
           <div className="mt-4">
             <Sms className="text-mygray bg-[#E4E4E7] ">
              Lorem ipsum dolar sit general sac mascho werho
            </Sms>
           </div>
        </div>

        <div className="text-white flex justify-start ">
           <div className="mt-4">
             <Sms className="text-mygray bg-[#E4E4E7] ">
              Lorem ipsum dolar sit general sac mascho werho
            </Sms>
           </div>
        </div>

        <div className="text-white flex justify-end ">
           <div className="mt-4">
             <Sms className="text-mygray  ">
              Lorem ipsum dolar sit general sac mascho werho
            </Sms>
           </div>
        </div>
       
         <MesInput/>

         <div className="flex justify-between items-center mt-4">
          <div className=" flex items-center gap-1">
            <img  src="camara.png"/>
            <img  src="img.png"/>
            <img  src="uplode.png"/>
          </div>
           <Button className='rounded-full'>Send</Button>
         </div>


      </div>
     
    </div>
    <div className=" w-[331px] flex items-center justify-end my-8">
    <div className="  size-[77px] bg-[#FAFAFA] rounded-full shadow-2xl flex items-center justify-center ">
     <CloseIcon/>
    </div>
    </div>

    </div>
  );
}

export default Massage;
