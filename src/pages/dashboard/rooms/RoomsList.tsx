import { useEffect, useState } from "react";
import { RoomCard } from "../../../components/cards/RoomCard";
import { useAuth } from "../../../contexts/AuthContext";
import { useRoom } from "../../../contexts/RoomContext";

export type RoomType = {
    _id: string;
    name: string;
    seats: number;
    company: string;
}


export const RoomsList = () => {

    const { allRooms, setAllRooms } = useRoom();

    useEffect(() => {

        const xhttp = new XMLHttpRequest();
        const obj = {};
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
              console.log("Login succesful");
              
              var values = JSON.parse(xhttp.responseText);
              setAllRooms(values.rooms);
              console.log(values)
              console.log(allRooms);
              // location.href = '/user/home';
            } else if (xhttp.status !== 200) {
            }
          }
        };
        //console.log("sending : ", formState);
        xhttp.open("Get", "http://localhost:3000/user/rooms");
        xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhttp.send();
    }, [])
    return (
        <div className="flex flex-wrap justify-around">
            {allRooms.map(room => <><RoomCard key={room._id} room={room}/></>)}
        </div>
    )
}