import { FunctionComponent, createContext, useContext, useState } from "react";
import { RoomType } from "../pages/dashboard/rooms/RoomsList";
import dayjs, { Dayjs } from "dayjs";
import { EventType } from "./EventContext";

interface RoomContextData{
    allRooms: RoomType[];
    filteredRooms: RoomType[];
    selectedRoom: RoomType | undefined;
    selectedTime: Dayjs;
    roomReservations: EventType[];
    setRoomReservations: (event: EventType[]) => void;
    setSelectedTime: (time: Dayjs) => void,
    setAllRooms:(rooms: RoomType[]) => void,
    setFilteredRooms:(rooms: RoomType[]) => void
    setSelectedRoom: (rooms: RoomType) => void,
}

const RoomContext = createContext<RoomContextData>({
    allRooms: [],
    filteredRooms: [],
    selectedRoom: undefined,
    selectedTime: dayjs(),
    roomReservations: [],
    setRoomReservations: () => {},
    setSelectedTime: () => {},
    setAllRooms: () => {},
    setFilteredRooms: () => {},
    setSelectedRoom: () => {}

})


type Props = {
    children: React.ReactNode;
}

const useRoom = () => {
    return useContext(RoomContext);
}

const RoomContextProvider: FunctionComponent<Props> = ({children}) =>{
    const [ allRooms, setAllRooms ] = useState<RoomType[]>([]);
    const [ filteredRooms, setFilteredRooms ] = useState<RoomType[]>([]);
    const [ selectedRoom, setSelectedRoom ] = useState<RoomType>()
    const [ selectedTime, setSelectedTime ] = useState<Dayjs>(dayjs())
    const [ roomReservations, setRoomReservations ] = useState<EventType[]>([]);

    return (
        <RoomContext.Provider value= {{allRooms, setAllRooms, selectedTime, roomReservations, setRoomReservations, setSelectedTime, filteredRooms, setFilteredRooms, selectedRoom, setSelectedRoom }}>
            {children}
        </RoomContext.Provider>
    )

}


export { RoomContext, RoomContextProvider, useRoom }; 