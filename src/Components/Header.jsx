import React from "react";
import Logo from "../Common/Logo";
import Container from "../Common/Container";
import Link from "../Common/Link";
 import Ballicon from "../Common/Ball";
 import Account from "../Common/Account"


function Header() {
  return (
    <>
      <nav className="py-4 border-b-1 bg-[#f1f1f6] border-[#E4E4E7] ">
        <Container>
          <div className="flex justify-between items-center gap-5">

            {/* logo  */}
          <div>
            <Logo />
          </div>

          {/* link  */}
          <div><Link/></div>

          {/* profile  */}
          <div className="flex items-center justify-between gap-3">
          <Ballicon/>
           <div>
            <Account/>
           </div>
               
          </div>

          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;
