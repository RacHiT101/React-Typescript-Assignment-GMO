import Grid from "../components/Grid";
import DepartmentList from "../components/Departments";


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

const second = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-3/5 my-10">
        <Grid />
      </div>
      <div>
        <DepartmentList departments={data} />
      </div>
    </div>
  );
};

export default second;
