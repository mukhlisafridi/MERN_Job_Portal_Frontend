import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {
  const searchJobHandler = (cat) => {
    // Your search logic here
    console.log("Searching for:", cat);
  };

  return (
    <>
      <div className="w-full px-4">
        <Carousel className="w-full max-w-xl mx-auto my-10">
          <CarouselContent className="gap-1 -ml-1">
            {category.map((cat, index) => (
              <CarouselItem 
                key={index} 
                className="pl-1 basis-auto"
              >
                <Button
                  onClick={() => searchJobHandler(cat)}
                  variant="outline"
                  className="rounded-full whitespace-nowrap"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </>
  );
};

export default CategoryCarousel;