


import React, { useState } from 'react';
import Container from '../Common/Container';
import Massage from '../Common/Massage';

function Clickbtn() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => setOpenMenu(prev => !prev);

  return (
    <Container>
      <div className="flex justify-end items-center">
        {openMenu ? <Massage toggleMenu={toggleMenu}/> : (
          <button onClick={toggleMenu} className="pt-4 pb-6">
              <img className=" size-[40px] md:size-[77px] mb-20" src="click.png" alt="click-icon"/>
            </button>
        )}
      </div>

      
    </Container>
  );
}

export default Clickbtn;
