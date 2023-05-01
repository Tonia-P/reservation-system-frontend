import React, { useState } from "react";
import Button from "../../components/interaction/Button";

type FormState = {
  email: string;
  password: string;
  fname: string;
  lname: string;
  company: string;
  safequest: string;
};

const RegisterForm = () => {
  const [values, setValues] = useState<FormState>({
    email: "",
    password: "",
    fname: "",
    lname: "",
    company: "",
    safequest: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(values);

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
        } else if (xhttp.status !== 200) {
        }
        console.log(xhttp.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:3000/user/auth/register");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(values));
  };

  return (
    <div className="w-full flex justify-center h-5/6">
      <div className=" lg:w-2/6 md:w-1/2 w-full rounded-lg flex flex-col place-self-center drop-shadow-xl p-8">
        <p className="text-xl leading-7 font-bold py-4">
          Log in to your account
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="flex flex-col w-full py-4">
            <span className="label-text">E-mail</span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              className="input w-full input-bordered"
            />
          </label>
          
          <label className="flex flex-col w-full py-4">
            <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="input w-full input-bordered"
            />
          </label>

          <label className="flex flex-col w-full py-4">
          <span className="label-text">First name</span>
            <input
              type="text"
              name="fname"
              onChange={handleChange}
              className="input w-full input-bordered"
            />
          </label>
          <label className="flex flex-col w-full py-4">
          <span className="label-text">Last name</span>
            <input
              type="text"
              name="lname"
              className="input w-full input-bordered"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col w-full py-4">
          <span className="label-text">Company</span>
            <input
              type="text"
              name="company"
              className="input w-full input-bordered"
              onChange={handleChange}
            />
          </label>
          
          <label className="flex flex-col w-full py-4">
          <span className="label-text">What is your favourite dish?</span>
            <input
              type="text"
              name="safequest"
              className="input w-full input-bordered"
              onChange={handleChange}
            />
          </label>
          <br />
          <Button styles="btn btn-primary">
            <input type="submit" value="Submit" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
