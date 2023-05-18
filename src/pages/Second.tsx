import React from "react";
import Grid from "../components/Grid";
import DepartmentList from "../components/Departments";

type Props = {};

const data = [
  {
    department: "Customer_service",
    sub_departments: ["Support", "Customer_success"],
  },
  {
    department: "Design",
    sub_departments: ["Graphic_design", "Product_design", "Web_design"],
  },
  {
    department: "Agriculture and Fishery",
    sub_departments: [
      "Agriculture",
      "Crops",
      "Farming Animals & livestock",
      "Fishery",
    ],
  },
  {
    department: "Business",
    sub_departments: [
      "Accounting",
      "Auction",
      "Career Management",
      "Commercial Principal",
    ],
  },
];

const second = (props: Props) => {
  return (
    <div className="">
      <div>
        <Grid />
      </div>
      <div>
        <DepartmentList departments={data} />
      </div>
    </div>
  );
};

export default second;
