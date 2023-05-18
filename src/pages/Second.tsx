import React from "react";
import Grid from "../components/Grid";
import DepartmentList from "../components/Departments";

type Props = {};

const data = [
    {
      department: "customer_service",
      sub_departments: ["support", "customer_success"],
    },
    {
      department: "design",
      sub_departments: [
        "graphic_design",
        "product_design",
        "web_design",
      ],
    },
  ]

const second = (props: Props) => {
  return (
    <div>
      <div>
        <Grid />
      </div>
      <div>
        <DepartmentList
          departments={data}
        />
      </div>
    </div>
  );
};

export default second;
