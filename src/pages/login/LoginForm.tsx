import React, { ChangeEvent, FormEvent, useState } from "react";
import Button from "../../components/interaction/Button";

interface FormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

const LoginForm = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formState);

    var urlEnd = 'http://localhost:3000/user/auth/login'
    await fetch(urlEnd, {
      method: "POST",
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(data => console.log(data))
  };

  return (
    <div className="w-full flex h-5/6 justify-center">
      <div className=" w-2/6 rounded-lg flex flex-col place-self-center drop-shadow-xl p-8">
        <p className="text-xl leading-7 font-bold py-4">Log in to your account</p>
        <form onSubmit={handleSubmit} className="flex flex-col" >


          <label className="flex flex-col w-full py-4">
            <span className="label-text">E-mail</span>
            <input
              type="email"
              name="email"
              className="input w-full input-bordered"
              value={formState.email}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col w-full py-4">
          <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              className="input w-full input-bordered"
              value={formState.password}
              onChange={handleInputChange}
            />
          </label>
          
          <label className="label cursor-pointer w-1/3 pb-8 pt-4">
          <span className="label-text">Remember me</span> 
            <input
              type="checkbox"
              name="rememberMe"
              className="checkbox checkbox-primary"
              checked={formState.rememberMe}
              onChange={handleCheckboxChange}
            />
          </label>

          <Button styles="btn btn-primary">

          <input type="submit" value="Submit" />
          </Button>
          <br/>
          <Button styles="btn btn-ghost">
            Login as administrator
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
