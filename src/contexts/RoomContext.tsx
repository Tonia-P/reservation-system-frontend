import { FunctionComponent, createContext, useContext, useState } from "react";
import { RoomType } from "../pages/dashboard/rooms/RoomsList";
import dayjs, { Dayjs } from "dayjs";
import { EventType } from "./EventContext";

interface RoomContextData{
    allRooms: RoomType[];
    filteredRooms: RoomType[];
    selectedRoom: RoomType;
    selectedTime: Dayjs;
    roomReservations: EventType[];
    setRoomReservations: (roomReservations: EventType[]) => void;
    setSelectedTime: (selectedTime: Dayjs) => void,
    setAllRooms:(allRooms: RoomType[]) => void,
    setFilteredRooms:(filteredRooms: RoomType[]) => void
    setSelectedRoom: (selectedRoom: RoomType) => void,
}

const RoomContext = createContext<RoomContextData>({
    allRooms: [],
    filteredRooms: [],
    selectedRoom: {
        _id: "",
        name: "",
        seats: 60,
        company: ""
    },
    selectedTime: dayjs().minute(0),
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
    const [ selectedTime, setSelectedTime ] = useState<Dayjs>(dayjs().minute(0))
    const [ roomReservations, setRoomReservations ] = useState<EventType[]>([]);

    return (
        <RoomContext.Provider value= {{allRooms, setAllRooms, selectedTime, roomReservations, setRoomReservations, setSelectedTime, filteredRooms, setFilteredRooms, selectedRoom, setSelectedRoom }}>
            {children}
        </RoomContext.Provider>
    )

}


export { RoomContext, RoomContextProvider, useRoom }; 