import { FunctionComponent, createContext, useContext, useState } from "react";
import { RoomType } from "../pages/dashboard/rooms/RoomsList";

interface RoomContextData{
    allRooms: RoomType[];
    filteredRooms: RoomType[];
    selectedRoom: RoomType | undefined;
    setAllRooms:(rooms: RoomType[]) => void,
    setFilteredRooms:(rooms: RoomType[]) => void
    setSelectedRoom: (rooms: RoomType) => void,
}

const RoomContext = createContext<RoomContextData>({
    allRooms: [],
    filteredRooms: [],
    selectedRoom: undefined,
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

    return (
        <RoomContext.Provider value= {{allRooms, setAllRooms, filteredRooms, setFilteredRooms, selectedRoom, setSelectedRoom }}>
            {children}
        </RoomContext.Provider>
    )

}


export { RoomContext, RoomContextProvider, useRoom }; 