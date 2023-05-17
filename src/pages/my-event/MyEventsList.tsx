import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { MyReservationCard } from "../../components/cards/MyReservationCard";
import Button from "../../components/interaction/Button";
import { MyEventCard } from "../../components/cards/MyEventCard";
import { TimeSlotWrapper } from "../../components/timeslots/TimeSlotWrapper";

export const MyEventsList = () => {
  const [reservations, setReservations] = useState([]);
  const { authUser } = useAuth();

  useEffect(() => {
    const xhttp = new XMLHttpRequest();
    const obj = {};
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          //console.log("Login succesful");

          var values = JSON.parse(xhttp.responseText);
          //   setSelectedRoom(values);
          //   setFormState((prevState) => ({
          //     ...prevState,
          //     room: values.newRoom,
          //   }));
          setReservations(values);
          console.log(values);
          // location.href = '/user/home';
        } else if (xhttp.status !== 200) {
        }
      }
    };
    xhttp.open("Get", "http://localhost:3000/user/reservations/rooms/own");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify(authUser));
  }, []);

  return (
    <div>
      <p className="py-6 text-2xl">My Events</p>

      {reservations &&
        reservations.map(
          (slot) =>
            reservations.indexOf(slot) != 0 && (
              <MyReservationCard
                key={reservations.indexOf(slot)}
                event={slot}
              />
            )
        )}

      <MyEventCard />

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Verify action</h3>
          <p className="py-4">
            Are you sure you want to delete this event?
          </p>

          <div>
            <Button styles="btn btn-info ">Yes</Button>
            <label className="btn btn-ghost ml-4" htmlFor="my-modal-3">
              Cancel
            </label>
          </div>
        </div>
      </div>


      
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Verify action</h3>
          <TimeSlotWrapper />

          <div>
            <Button styles="btn btn-info ">Yes</Button>
            <label className="btn btn-ghost ml-4" htmlFor="my-modal-4">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
