import { useEffect, useState } from "react";
import { EventCard } from "../../../components/cards/EventCard";
import { useAuth } from "../../../contexts/AuthContext";
import { useEvent } from "../../../contexts/EventContext";

export const EventsList = () => {

    const { allEvents, setAllEvents } = useEvent();

    useEffect(() => {

        const xhttp = new XMLHttpRequest();
        const obj = {};
        xhttp.onreadystatechange = function () {
          if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
              console.log("Login succesful");
              
              var values = JSON.parse(xhttp.responseText);
              setAllEvents(values);
              console.log(values)
              console.log(allEvents);
              // location.href = '/user/home';
            } else if (xhttp.status !== 200) {
            }
          }
        };
        //console.log("sending : ", formState);
        xhttp.open("Get", "http://localhost:3000/user/reservations/verified");
        xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
        xhttp.send();
    }, [])
    return (
        <div className="flex flex-wrap justify-around">
            {allEvents && allEvents.map(event => <><EventCard event={event}/></>)}
        </div>
    )
}