import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomType } from "../rooms/RoomsList";
import Button from "../../../components/interaction/Button";
import { useRoom } from "../../../contexts/RoomContext";
import { UserData, useAuth } from "../../../contexts/AuthContext";

interface FormState {
  desc: string;
  type: string;
  room: RoomType | undefined;
  startDate: string;
  endDate: string;
  user: UserData | null;
}

export const RoomDetails = () => {
  const { selectedRoom, setSelectedRoom } = useRoom();
  const { authUser } = useAuth();
  let { roomId } = useParams();
  const [formState, setFormState] = useState<FormState>({
    desc: "",
    type: "",
    room: undefined,
    startDate: "",
    endDate: "",
    user: authUser
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const getRoomDetails = () => {
    const xhttp = new XMLHttpRequest();
    const obj = {};
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log("Login succesful");

          var values = JSON.parse(xhttp.responseText);
          setSelectedRoom(values);
          setFormState((prevState) => ({
            ...prevState,
            room: values.newRoom,
          }));
          console.log(values);
          // location.href = '/user/home';
        } else if (xhttp.status !== 200) {
        }
      }
    };
    //console.log("sending : ", formState);
    xhttp.open("Get", "http://localhost:3000/user/room/" + roomId);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send();
  };

  const reserveRoom = () => {

    event.preventDefault();

    const xhttp = new XMLHttpRequest();
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
            company: values.user.company,
          });
          redirect("/dashboard");
        } else if (xhttp.status !== 200) {
        }
      }
    };
    xhttp.open("POST", "http://localhost:3000/user/auth/login");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(formState));
  }

  useEffect(() => {
    getRoomDetails();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    console.log(formState)
  };

  return (
    <div>
      <img
        className="border border-0 rounded-lg w-full h-60"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAIVBMVEXl5eX////y8vLz8/Po6Oj8/Pz39/ft7e3v7+/p6en6+voWpc14AAADrElEQVR4nO2d2XKkMAwAY274/w/eoVI25pQ0JPEs6n4NULhLyEYak68vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICfpJEpfYsfzBRkutI3+bH0CnshjKVv81NpVfoIv2N0wRdCX/pGi1DvPEzrA3TBtzvNCd3OQ7v6+6C05zT8JH3a4Nue5wRBnz74fIafoM9gz2X4XeurLPrCUGwUxbjWZ7LnMfy2+qY6S2H7VQ3htybXN1Xr7N8Y7YVQaBDliPq6av/Wag2+EKoCIyjKS1/bDYcFJ3vw+Qu//ljdzH5Wkan/8t4/Gm2tYM0gU3pgv09fn76stVM3M+nf5naGS4/uN2mG7sxMW/fN6shzyS71jcN5vmuroyQ5vmHwkfrG6qqn0Z7XA3qrwMfp62uhHXRdTLGUZR6m7yLVJeTViGmN8xR9o0Jd0DXRLKucJ+gbK5W64x7GwSTS6DPgA/SpX2fXDcj5Uf/29Fr+bTRouune9K3sDdsIm1YmtP786MvtHVeecxfKCcSNvizvna7u2mxm0eU/N/qW46+aHosOXYnLi74lrq4fy+URV61fnOhbVsvSpLD406Q/J/rSwfKUuvhD33aUmohKTQ5FZ9iFvtS01RUEUlFBnn1d6EuDVNlbbMvh50JfPFJbTEkTDfrCMhnou5Xx0qJvD/p67YGJOHuIudKDvnig2l7KfmK8OtAXXVjKoLEKiL6U+iw/8ItapFW2A30xkVmaGJ3yHAf64hAtTchY3pIi1oG+OPEa7KV8KU296EMf+m6Avlto9VmmDvTthmjRp10rOtAX6yeWdZ/2HAf6YiS9s6dNilgH+tTv/xnx2tJxDvSl93998osBO6JvGaN9O7T60v8x4hjT7zO09lKzQ4xXD/rS06sNvxh84rPrQ19q/Rg/RCIvdVzoSxOpbvI1HO1DXwo/TcE+dckV62wf+lL2s3S+5cznRt/y40j9W6wmUTrRl21uvp5+e9tlvejLvIznYdUu2xR0bU03+kIjn5Htv9ckPlf68s31zdGkmv/0XltecKSvXW0g2my6XG/rUBdnHOnb7Wjrq3kn+dR1w2aXpfLJ9aZP+WUvQ13Vlz7V1zEsRX1n+q62kn9j21DuTd9rgr36MPNo/OCLP30vgWeboq3yfOqbP6WxNzhWb3yKxKe+ma7qx+/nuBlfS5j3LuJX34+APvSh7wbouwX6boG+W6DvFui7Bfpu0dRVKWr+LxQAAAAAAAAAAAAAAAAAAAAAAAAAAAC44B+CJSs/57yRIwAAAABJRU5ErkJggg=="
      />

      <h2 className="text-3xl font-bold pt-5"> Room name</h2>

      <p className="pt-10 leading-loose">
        A meeting room is a space provided for singular events such as business
        conferences and meetings1. It is meant to foster communication and
        enhance collaboration2. A modern conference room can also help keep a
        hybrid workforce more connected to each other and to the office2. A
        smart meeting room is one that uses both modern software and hardware to
        improve collaboration and efficacy2. They are typically designed for
        easy video conferencing and virtual collaboration2. Smart meeting rooms
        can also use technology to integrate with other smart elements of the
        office2.
      </p>

      <h2 className="text-3xl font-bold py-10 "> Reserve this room</h2>

      <form onSubmit={handleSubmit}>
        <p className="text-lg">
          Room{" "}
          <span className="text-base text-slate-400 pl-6">Kappa Keepo</span>
        </p>
        <p className="pt-6 text-xl"> Date and time</p>
        <p className="text-xl pt-6">Description of event</p>
        <input
        type="text"
        name="desc"
          value={formState.desc}
          onChange={handleInputChange}
          className="textarea textarea-bordered w-full mt-6"
          placeholder="Description"
        />

        <p className="text-xl pt-6">Type of event</p>
        <select className="select mt-6 select-bordered w-full">
          <option selected>
            Event
          </option>
        </select>

        <Button styles="btn btn-primary px-6 mt-10">
            <input type="submit" value="Submit" />
        </Button>
      </form>

      <div className="py-36"></div>
    </div>
  );
};
