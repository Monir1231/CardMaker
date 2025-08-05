import React, { useState } from "react";
import Logo from "../Common/Logo";
import Container from "../Common/Container";
import Link from "../Common/Link";
import Ballicon from "../Common/Ball";
import Account from "../Common/Account";
import MobileMenu from "../Common/MobileMenu";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const ToggleMenu = () => setOpen((pre) => !pre);

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
            <div>
              <Link />
            </div>

            {/* profile  */}
            <div className="hidden lg:flex items-center justify-between gap-3">
              <Ballicon />
              <div className="hidden lg:block">
                <Account />
              </div>
            </div>

            {/* mobile  */}
            <div className="lg:hidden flex items-center justify-center gap-4">
              <Ballicon />
              <button
                className="lg:hidden flex text-accent"
                onClick={ToggleMenu}
              >
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                  <span className="block w-6 h-0.5 bg-black" />
                </div>
              </button>
            </div>
          </div>

          {isOpen && <MobileMenu ToggleMenu={ToggleMenu} />}
        </Container>
      </nav>
    </>
  );
}

export default Header;
