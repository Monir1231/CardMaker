import React from "react";
import Container from "../Common/Container";
import { CardData } from "../data/data";

function Card() {
  return (
    <div className="py-10">
      <Container>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 space-y-5">
          {CardData.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <img className="" src={item.img} />
                <div className="flex items-center gap-1 py-1 px-1.5 bg-white rounded-full absolute top-[10px] xl:left-[180px] lg:left-[125px] md:left-[127px] left-[95px] small-size ">
                  <img className="size-[16px]" src={item.rainImg} />
                  <h4 className="text-[12px] font-bold">{item.rainText}</h4>
                </div>
              </div>

              <div>
                <h4 className="text-[#09090B] text-base font-bold pt-2.5">
                  {item.title}
                </h4>
                <p className="text-sm space-y-3">{item.des}</p>
                <h3 className="text-[#09090B] text-base font-bold">
                  {item.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Card;
