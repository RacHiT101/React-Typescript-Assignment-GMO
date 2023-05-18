import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

interface Department {
  department: string;
  sub_departments: string[];
}

interface Props {
  departments: Department[];
}

const DepartmentList: React.FC<Props> = ({ departments }) => {
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<
    string[]
  >([]);

  const handleToggleDepartment = (department: string) => {
    if (expandedDepartments.includes(department)) {
      setExpandedDepartments((prevState) =>
        prevState.filter((dep) => dep !== department)
      );
      setSelectedDepartments((prevState) =>
        prevState.filter((dep) => dep !== department)
      );
      setSelectedSubDepartments((prevState) =>
        prevState.filter((subDep) => !subDep.startsWith(`${department}_`))
      );
    } else {
      setExpandedDepartments((prevState) => [...prevState, department]);
      setSelectedDepartments((prevState) => [...prevState, department]);
      setSelectedSubDepartments((prevState) => [
        ...prevState,
        ...(departments
          .find((dept) => dept.department === department)
          ?.sub_departments.map(
            (subDep) => `${department}_${subDep}`
          ) as string[]),
      ]);
    }
  };

  const handleToggleSubDepartment = (
    subDepartment: string,
    parentDepartment: string
  ) => {
    if (selectedSubDepartments.includes(subDepartment)) {
      setSelectedSubDepartments((prevState) =>
        prevState.filter((subDep) => subDep !== subDepartment)
      );
      if (
        !selectedSubDepartments.some((subDep) =>
          subDep.startsWith(parentDepartment)
        )
      ) {
        setSelectedDepartments((prevState) =>
          prevState.filter((dep) => dep !== parentDepartment)
        );
      }
    } else {
      setSelectedSubDepartments((prevState) => [...prevState, subDepartment]);
      if (
        departments
          .find((dept) => dept.department === parentDepartment)
          ?.sub_departments.every(
            (subDep) =>
              selectedSubDepartments.includes(
                `${parentDepartment}_${subDep}`
              ) || subDep === subDepartment
          )
      ) {
        setSelectedDepartments((prevState) => [...prevState, parentDepartment]);
      }
    }
  };

  return (
    <div>
      <ol>
        {departments.map((dept, index) => (
          <li key={dept.department}>
            <h3
              onClick={() => handleToggleDepartment(dept.department)}
              className={`cursor-pointer ${
                expandedDepartments.includes(dept.department) ? "expanded" : ""
              } ${
                selectedDepartments.includes(dept.department) ? "selected" : ""
              }`}
            >
              <Checkbox />
              {index + 1}. {dept.department}
            </h3>
            {expandedDepartments.includes(dept.department) &&
              dept.sub_departments.map((subDept) => {
                const subDepartment = `${dept.department}_${subDept}`;
                return (
                  <div key={subDept} className="ml-14">
                    <Checkbox
                      checked={selectedSubDepartments.includes(subDepartment)}
                      onChange={() =>
                        handleToggleSubDepartment(
                          subDepartment,
                          dept.department
                        )
                      }
                    />
                    <label>{subDept}</label>
                  </div>
                );
              })}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DepartmentList;
