import dayjs from "dayjs";
import { useState } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Button from "../interaction/Button";
import { TimeSlotTile } from "./TimeSlotTile";

export const TimeSlotWrapper = () => {
  const [time, setTime] = useState(dayjs());

  const nextDay = () => {
    setTime(time.add(1, "day"));
  };
  const prevDay = () => {
    setTime(time.add(-1, "day"));
  };
  return (
    <div className="pt-6">
      <div className="flex flex-row w-full justify-between items-center border-2 my-2 border-slate-300 rounded-md">
        <Button onClick={prevDay} styles="btn btn-ghost">
          <BsFillCaretLeftFill size={20} />
        </Button>
        <div className="text-lg">{time.format("DD.MM.YYYY")}</div>
        <Button onClick={prevDay} styles="btn btn-ghost">
          <BsFillCaretRightFill size={20} />
        </Button>
      </div>

      <p className="w-full flex items-center justify-center py-4">
        Selected time: Not yet selected
      </p>


      <div>
        <TimeSlotTile selected time="10:00" />
      </div>
    </div>
  );
};
