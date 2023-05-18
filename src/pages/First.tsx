import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

interface User {
  name: string;
  phone: string;
  email: string;
}

const First = (props: Props) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/second");
    console.log(user);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user.name === "" || user.phone === "" || user.email === "") {
      navigate("/");
      alert("Please enter all information ");
    } else {
      navigate("/second");
    }
  };
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/4 mx-auto border-gray-400 p-5 shadow-md shadow-gray-600 bg-gray-300 rounded-xl">
        <div className="text-center text-2xl">Form</div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <TextField
              label="Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              required
              fullWidth
              margin="dense"
            />
          </div>
          <div className="my-4">
            <TextField
              label="Phone Number"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
              fullWidth
              margin="dense"
            />
          </div>
          <div className="my-4">
            <TextField
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              fullWidth
              margin="dense"
            />
          </div>
          <div className="py-5">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
            <Link to={"/second"}>
              {" "}
              <Button onClick={handleClick} type="submit" variant="contained" color="primary">
                Next Page
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default First;
