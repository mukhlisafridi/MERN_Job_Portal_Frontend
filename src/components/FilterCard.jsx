import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const filterData = [
  {
    filterType: "Location",
    options: [
      { label: "Karachi", value: "karachi" },
      { label: "Lahore", value: "lahore" },
      { label: "Hyderabad", value: "hyderabad" },
      { label: "Islamabad", value: "islamabad" },
      { label: "Quetta", value: "quetta" },
    ],
  },
  {
    filterType: "Industry",
    options: [
      { label: "Frontend Developer", value: "frontend" },
      { label: "Backend Developer", value: "backend" },
      { label: "FullStack Developer", value: "fullstack" },
    ],
  },
  {
    filterType: "Salary",
    options: [
      { label: "0 - 40k", value: "0-40000" },
      { label: "1 Lakh", value: "100000" },
      { label: "1 Lakh to 5 Lakh", value: "100000-500000" },
    ],
  },
];

const FilterCard = ({ selectedFilters, setSelectedFilters, onClose }) => {
  const handleChange = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  return (
    <div className="w-full bg-white p-4 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="my-3" />

      {filterData.map((data, index) => (
        <div key={index}>
          <h2 className="font-semibold mt-4">{data.filterType}</h2>

          <RadioGroup
            value={selectedFilters[data.filterType] || ""}
            onValueChange={(value) =>
              handleChange(data.filterType, value)
            }
          >
            {data.options.map((item, idx) => {
              const id = `${data.filterType}-${idx}`;
              return (
                <div key={id} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={item.value} id={id} />
                  <Label htmlFor={id}>{item.label}</Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>
      ))}

      {/* Mobile buttons */}
      <div className="flex gap-2 mt-5 lg:hidden">
        <Button variant="outline" className="w-1/2" onClick={clearFilters}>
          Clear
        </Button>
        <Button className="w-1/2" onClick={onClose}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default FilterCard;
