import React from "react";
import Container from "../Common/Container";
import DeshText from "../Common/DeshText";
import Search from "../Common/Search";
 import Sort from "../Common/Sort";
 import Button from "../Common/Button";
 import SmallDeshText from "../Common/SmallDeshText";

function Desh() {
  return (
    <div className="pt-6 bg-[#f1f1f6] py-3">
   
      <Container>
       
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
           <div>
             <SmallDeshText>Welcome back</SmallDeshText>
            <DeshText>Dashboard</DeshText>
           </div>
             <div className=" flex   justify-center items-center md:gap-3 gap-4 py-3 md:py-0">
                <Search />
                <Sort/>
                <Button className=''>Cypher AI</Button>
             </div>
        </div>

        
      </Container>
    </div>
  );
}

export default Desh;
