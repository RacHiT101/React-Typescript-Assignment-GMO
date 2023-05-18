import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";



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
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/4 mx-auto border-gray-400 bg-gray-200 rounded-xl ">
        <div className="text-center text-2xl ">Form</div>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            label="Phone Number"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            fullWidth
            margin="dense"
          />
          <div className="py-5">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default First;
