import React from "react";
import Container from "../Common/Container";
import DeshText from "../Common/DeshText";
import Search from "../Common/Search";
 import Sort from "../Common/Sort";
 import Button from "../Common/Button";

function Desh() {
  return (
    <div className="pt-6 bg-[#f1f1f6] py-3">
      <Container>
       
        <div className="flex justify-between items-center">
             <DeshText />
             <div className="hidden  md:flex justify-center items-center gap-3">
                <Search />
                <Sort/>
                <Button>Cypher AI</Button>
             </div>
        </div>

        
      </Container>
    </div>
  );
}

export default Desh;
