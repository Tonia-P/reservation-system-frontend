import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Button from "../interaction/Button";
import { TimeSlotTile } from "./TimeSlotTile";
import { useRoom } from "../../contexts/RoomContext";
import { TimeSlotTileList } from "./TimeSlotTileList";

export const TimeSlotWrapper = () => {
  const { selectedTime, setSelectedTime } = useRoom();

  useEffect(() => {
    setSelectedTime(dayjs());
    if (selectedTime) console.log(selectedTime.format("MMMM D, YYYY"))
  }, []);

  const nextDay = () => {
    setSelectedTime(dayjs(selectedTime).add(1, "day"));
  };
  const prevDay = () => {
    setSelectedTime(dayjs(selectedTime).add(-1, "day"));
  };
  return (
    <div className="pt-6">
      <div className="flex flex-row w-full justify-between items-center border-2 my-2 border-slate-300 rounded-md">
        <Button onClick={prevDay} styles="btn btn-ghost">
          <BsFillCaretLeftFill size={20} />
        </Button>
        <div className="text-lg">{selectedTime && selectedTime.format("MMMM D, YYYY")}</div>
        <Button onClick={nextDay} styles="btn btn-ghost">
          <BsFillCaretRightFill size={20} />
        </Button>
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
