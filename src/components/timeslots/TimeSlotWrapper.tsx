import dayjs from "dayjs";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Button from "../interaction/Button";
import { useRoom } from "../../contexts/RoomContext";
import { TimeSlotTileList } from "./TimeSlotTileList";

export const TimeSlotWrapper = () => {
  const { selectedTime, setSelectedTime } = useRoom();

  useEffect(() => {
    setSelectedTime(dayjs());
    if (selectedTime) console.log(selectedTime.format("MMMM D, YYYY, HH:MM"));
  }, []);

  const nextDay = (event: any) => {
      event.preventDefault()
      setSelectedTime(dayjs(selectedTime).add(1, "day"));
      console.log(selectedTime.format("MMMM D, YYYY, HH:MM"))
  };
  const prevDay = (event: any) => {
      event.preventDefault()
      setSelectedTime(dayjs(selectedTime).add(-1, "day"));
      console.log(selectedTime.format("MMMM D, YYYY, HH:MM"))
  };

  return (
    <div className="pt-6">
      <div className="flex flex-row w-full justify-between items-center border-2 my-2 border-slate-300 rounded-md">
        <button onClick={prevDay} className="btn btn-ghost">
          <BsFillCaretLeftFill size={20} />
        </button>
        <div className="text-lg">
          {selectedTime && selectedTime.format("MMMM D, YYYY")}
        </div>
        <button type="button" onClick={nextDay} className="btn btn-ghost">
          <BsFillCaretRightFill size={20} />
        </button>
      </div>

      <p className="w-full flex items-center justify-center py-4">
        Selected time: Not yet selected
      </p>

      <div>
        <TimeSlotTileList />
      </div>
    </div>
  );
};
