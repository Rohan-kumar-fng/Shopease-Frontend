import React from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { HomeSectionCardData } from "../HomeSectionCard/HomeSectionCardData";

function HomeSectionCarosel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = HomeSectionCardData.map((item) => <HomeSectionCard product={item} />);
  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4.5 },
  };

  const slidePrev = () => {
    console.log("SlidePrev :", activeIndex);
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideNext = () => {
    console.log("SlideNext :", activeIndex);
    setActiveIndex((prev) => Math.min(prev + 1, items.length - 1));
  };

  const syncActiveIndex = (e) => {
    console.log("Sync value is :", e.item);
    setActiveIndex(e.item);
  };

  const onUpdated = (e) => {
    console.log("ActiveIndex is :",activeIndex);
    console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
  };

  return (
    <div className="relative px-4 lh:px-8">
      <div className="relative p-5 border-gray shadow">
        <AliceCarousel
           mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          activeIndex={activeIndex}
          onSlideChanged={syncActiveIndex}
          onUpdated={onUpdated}
        />
        {activeIndex !== items.length - responsive[1024].items && (
          <Button
            onClick={slideNext}
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "3rem",
              transform: "translateX(50%)",
              bgcolor: "white",
            }}
          >
            <KeyboardDoubleArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            className="z-50"
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "3rem",
              transform: "translateX(-50%) rotate(180deg)",
              bgcolor: "white",
            }}
          >
            <KeyboardDoubleArrowRightIcon sx={{ color: "black" }} />
          </Button>
        )}
      </div>
    </div>
  );
}

export default HomeSectionCarosel;
