import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Button from "../../components/interaction/Button";
import { useAuth } from "../../contexts/AuthContext";
import { redirect } from "react-router-dom";

interface FormState {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    password: "",
  });

  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuth();



  const logout = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLogged(false);
    setAuthUser(null);
  };

  const login = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsLogged(false);
    setAuthUser(null);
  };

  const [adminToggle, setAdminToggle] = useState<number>(0);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (isLogged) {
      console.log("Kappa")

      redirect("/dashboard")
    }
  }, []);

  const handleAdminButtonPress = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAdminToggle((prevState) => (prevState === 0 ? 1 : 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log(formState);

    const xhttp = new XMLHttpRequest();
    const obj = {};
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log("Login succesful");
          setIsLogged(true);
          var values = JSON.parse(xhttp.responseText);
          setAuthUser({
            _id: values.user._id,
            email: values.user.email,
            fname: values.user.fname,
            lname: values.user.lname,
            password: values.user.password,
            company: values.user.company
          });
          console.log(authUser);
          console.log(isLogged);
          redirect("/dashboard")
          // location.href = '/user/home';
        } else if (xhttp.status !== 200) {
        }
        //console.log(xhttp.responseText);
      }
    };
    //console.log("sending : ", formState);
    xhttp.open("POST", "http://localhost:3000/user/auth/login");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(formState));
  };

  return (
    <div className="w-full flex h-5/6 justify-center">
      <div className=" lg:w-2/6 md:w-1/2 w-full rounded-lg flex flex-col place-self-center drop-shadow-xl p-8">
        <p className="text-xl leading-7 font-bold py-4">
          Log in to your account
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label className="flex flex-col w-full py-4">
            <span className="label-text">
              {adminToggle ? "Email" : "Username"}
            </span>
            <input
              type="email"
              name="email"
              className="input w-full input-bordered"
              value={formState.email}
              onChange={handleInputChange}
            />
          </label>

          <label className="flex flex-col w-full py-4 pb-8">
            <span className="label-text">Password</span>
            <input
              type="password"
              name="password"
              className="input w-full input-bordered"
              value={formState.password}
              onChange={handleInputChange}
            />
          </label>

          <Button styles="btn btn-primary">
            <input type="submit" value="Submit" />
          </Button>
          <br />
        </form>
        <Button styles="btn btn-ghost" onClick={handleAdminButtonPress}>
          Login as {adminToggle ? "administrator" : "user"}
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
