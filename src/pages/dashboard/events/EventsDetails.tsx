import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RoomType } from "../rooms/RoomsList";
import Button from "../../../components/interaction/Button";

export const EventsDetails = () => {
  const [room, setRoom] = useState<RoomType>();

  let { roomId } = useParams();

  useEffect(() => {
    const xhttp = new XMLHttpRequest();
    const obj = {};
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log("Login succesful");

          var values = JSON.parse(xhttp.responseText);
          setRoom(values);
          console.log(values);
          // location.href = '/user/home';
        } else if (xhttp.status !== 200) {
        }
      }
    };
    //console.log("sending : ", formState);
    xhttp.open("Get", "http://localhost:3000/user/event/" + roomId);
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send();
  }, []);

  return (
    <div>
      <img
        className="border border-0 rounded-lg w-full h-60"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAIVBMVEXl5eX////y8vLz8/Po6Oj8/Pz39/ft7e3v7+/p6en6+voWpc14AAADrElEQVR4nO2d2XKkMAwAY274/w/eoVI25pQ0JPEs6n4NULhLyEYak68vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICfpJEpfYsfzBRkutI3+bH0CnshjKVv81NpVfoIv2N0wRdCX/pGi1DvPEzrA3TBtzvNCd3OQ7v6+6C05zT8JH3a4Nue5wRBnz74fIafoM9gz2X4XeurLPrCUGwUxbjWZ7LnMfy2+qY6S2H7VQ3htybXN1Xr7N8Y7YVQaBDliPq6av/Wag2+EKoCIyjKS1/bDYcFJ3vw+Qu//ljdzH5Wkan/8t4/Gm2tYM0gU3pgv09fn76stVM3M+nf5naGS4/uN2mG7sxMW/fN6shzyS71jcN5vmuroyQ5vmHwkfrG6qqn0Z7XA3qrwMfp62uhHXRdTLGUZR6m7yLVJeTViGmN8xR9o0Jd0DXRLKucJ+gbK5W64x7GwSTS6DPgA/SpX2fXDcj5Uf/29Fr+bTRouune9K3sDdsIm1YmtP786MvtHVeecxfKCcSNvizvna7u2mxm0eU/N/qW46+aHosOXYnLi74lrq4fy+URV61fnOhbVsvSpLD406Q/J/rSwfKUuvhD33aUmohKTQ5FZ9iFvtS01RUEUlFBnn1d6EuDVNlbbMvh50JfPFJbTEkTDfrCMhnou5Xx0qJvD/p67YGJOHuIudKDvnig2l7KfmK8OtAXXVjKoLEKiL6U+iw/8ItapFW2A30xkVmaGJ3yHAf64hAtTchY3pIi1oG+OPEa7KV8KU296EMf+m6Avlto9VmmDvTthmjRp10rOtAX6yeWdZ/2HAf6YiS9s6dNilgH+tTv/xnx2tJxDvSl93998osBO6JvGaN9O7T60v8x4hjT7zO09lKzQ4xXD/rS06sNvxh84rPrQ19q/Rg/RCIvdVzoSxOpbvI1HO1DXwo/TcE+dckV62wf+lL2s3S+5cznRt/y40j9W6wmUTrRl21uvp5+e9tlvejLvIznYdUu2xR0bU03+kIjn5Htv9ckPlf68s31zdGkmv/0XltecKSvXW0g2my6XG/rUBdnHOnb7Wjrq3kn+dR1w2aXpfLJ9aZP+WUvQ13Vlz7V1zEsRX1n+q62kn9j21DuTd9rgr36MPNo/OCLP30vgWeboq3yfOqbP6WxNzhWb3yKxKe+ma7qx+/nuBlfS5j3LuJX34+APvSh7wbouwX6boG+W6DvFui7Bfpu0dRVKWr+LxQAAAAAAAAAAAAAAAAAAAAAAAAAAAC44B+CJSs/57yRIwAAAABJRU5ErkJggg=="
      />

      <h2 className="text-3xl font-bold pt-5"> Title</h2>

      <p className="pt-10 leading-loose">
        Dear Kappa Employees,
        <br />
        <br />
        We are excited to announce that we will be hosting a self-improvement
        seminar on June 15th at 10 AM in our conference room. This seminar will
        be led by our very own Dr. John Doe, who has been with us for over 10
        years and has extensive experience in this field.
        <br />
        <br />
        The seminar will cover topics such as time management, stress reduction,
        and effective communication. We believe that these topics are essential
        to your personal and professional growth and will help you become more
        productive and successful in your work.
        <br />
        <br />
        The seminar will begin with an introduction by Dr. Doe, who will provide
        an overview of the topics that will be covered during the seminar. He
        will then dive into the first topic, time management, and provide tips
        and strategies for managing your time more effectively.
        <br />
        <br />
        After a short break, Dr. Doe will discuss stress reduction and provide
        techniques for reducing stress in your personal and professional life.
        He will also discuss the importance of effective communication and
        provide tips for communicating more clearly and effectively with your
        colleagues.
        <br />
        Throughout the seminar, there will be opportunities for questions and
        discussion, so please come prepared to participate.
        <br />
        We encourage all of our employees to attend this seminar and take
        advantage of this opportunity to learn new skills and improve their
        lives.
        <br />
        <br />
        <br />
        Thank you,
        <br />
        <br />
        <br />
        The Kappa Team
      </p>

      <h2 className="text-3xl font-bold py-10 "> Organizer</h2>

      <div className="flex flex-row">
      <img
        className="mask mask-squircle h-24 w-24 mr-10"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAIVBMVEXl5eX////y8vLz8/Po6Oj8/Pz39/ft7e3v7+/p6en6+voWpc14AAADrElEQVR4nO2d2XKkMAwAY274/w/eoVI25pQ0JPEs6n4NULhLyEYak68vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICfpJEpfYsfzBRkutI3+bH0CnshjKVv81NpVfoIv2N0wRdCX/pGi1DvPEzrA3TBtzvNCd3OQ7v6+6C05zT8JH3a4Nue5wRBnz74fIafoM9gz2X4XeurLPrCUGwUxbjWZ7LnMfy2+qY6S2H7VQ3htybXN1Xr7N8Y7YVQaBDliPq6av/Wag2+EKoCIyjKS1/bDYcFJ3vw+Qu//ljdzH5Wkan/8t4/Gm2tYM0gU3pgv09fn76stVM3M+nf5naGS4/uN2mG7sxMW/fN6shzyS71jcN5vmuroyQ5vmHwkfrG6qqn0Z7XA3qrwMfp62uhHXRdTLGUZR6m7yLVJeTViGmN8xR9o0Jd0DXRLKucJ+gbK5W64x7GwSTS6DPgA/SpX2fXDcj5Uf/29Fr+bTRouune9K3sDdsIm1YmtP786MvtHVeecxfKCcSNvizvna7u2mxm0eU/N/qW46+aHosOXYnLi74lrq4fy+URV61fnOhbVsvSpLD406Q/J/rSwfKUuvhD33aUmohKTQ5FZ9iFvtS01RUEUlFBnn1d6EuDVNlbbMvh50JfPFJbTEkTDfrCMhnou5Xx0qJvD/p67YGJOHuIudKDvnig2l7KfmK8OtAXXVjKoLEKiL6U+iw/8ItapFW2A30xkVmaGJ3yHAf64hAtTchY3pIi1oG+OPEa7KV8KU296EMf+m6Avlto9VmmDvTthmjRp10rOtAX6yeWdZ/2HAf6YiS9s6dNilgH+tTv/xnx2tJxDvSl93998osBO6JvGaN9O7T60v8x4hjT7zO09lKzQ4xXD/rS06sNvxh84rPrQ19q/Rg/RCIvdVzoSxOpbvI1HO1DXwo/TcE+dckV62wf+lL2s3S+5cznRt/y40j9W6wmUTrRl21uvp5+e9tlvejLvIznYdUu2xR0bU03+kIjn5Htv9ckPlf68s31zdGkmv/0XltecKSvXW0g2my6XG/rUBdnHOnb7Wjrq3kn+dR1w2aXpfLJ9aZP+WUvQ13Vlz7V1zEsRX1n+q62kn9j21DuTd9rgr36MPNo/OCLP30vgWeboq3yfOqbP6WxNzhWb3yKxKe+ma7qx+/nuBlfS5j3LuJX34+APvSh7wbouwX6boG+W6DvFui7Bfpu0dRVKWr+LxQAAAAAAAAAAAAAAAAAAAAAAAAAAAC44B+CJSs/57yRIwAAAABJRU5ErkJggg=="
      />
      <div>
      <p className="text-xl">Kappa</p>
        <p className="text-primary text-sm">Company</p>
        <p className="pt-3 text-sm text-slate-400">Email@email.com</p>
      </div>
      </div>

      

      <form>

      </form>

      <div className="py-36"></div>
      <div className=" sticky h-16 left-0 bottom-0 ml-[-360px] items-center justify-around z-20 bg-primary-content w-screen flex">
        <div>
            Start Date - End Date
        </div>
        <div className="flex flex-row items-center">
        <p className="pr-5">10 seats remaining</p>
        <Button>Reserve seat</Button>

        </div>
      </div>
    </div>
  );
};
