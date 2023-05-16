import { Dayjs } from "dayjs";
import { useRoom } from "../../contexts/RoomContext"
import { TimeSlotTile } from "./TimeSlotTile"
import { EventType } from "../../contexts/EventContext";
import { useEffect, useState } from "react";

export const TimeSlotTileList = () => {

    const { selectedTime } = useRoom();
    const minAvailTimeTime = selectedTime.startOf('day')
    const { roomReservations } = useRoom();
    const [ availableTimes, setAvailableTimes ] = useState<{time:Dayjs, reservation:EventType | null}[] | null>();


    const createTimeslots = () => {
        var minAvailTime = minAvailTimeTime.hour(8).minute(0);
        console.log('In create timeslots - all rends: ')
        console.log(selectedTime.format("HH:MM"))
        
        var i = 0;
        var counter = 0;
        var availableTimes:{time:Dayjs, reservation:EventType | null}[] | null = [];

        while( i !==  6 ){
            if(roomReservations && availableTimes && roomReservations.length > counter && roomReservations[counter].startDate === minAvailTime.format('HH:mm')) {
                availableTimes = [
                    ...availableTimes,
                    {
                        time: minAvailTime,
                        reservation: roomReservations[counter]
                    }
                ]
                counter++;

            }
            else if (availableTimes && roomReservations){
                availableTimes = [
                    ...availableTimes,
                    {
                        time: minAvailTime,
                        reservation: null
                    }
                ]
            }
            minAvailTime = minAvailTime.add(2, 'hour');
            i++;

        }

        console.log(availableTimes);

        return availableTimes;

    }

    useEffect(() => {
        console.log("Recreate timeslots.")
        console.log(roomReservations);
        setAvailableTimes(createTimeslots());
    }, [roomReservations]);
    
    return(
        <div>
            {availableTimes && availableTimes.map(slot => availableTimes.indexOf(slot) !=0 && <TimeSlotTile key={slot.reservation?._id} time={slot.time} disabled={slot.reservation != null} />)}
        </div>
    )
}