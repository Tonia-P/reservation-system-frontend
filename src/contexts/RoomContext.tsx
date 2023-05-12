import { FunctionComponent, createContext, useContext, useState } from "react";
import { RoomType } from "../pages/dashboard/rooms/RoomsList";

interface RoomContextData{
    allRooms: RoomType[];
    filteredRooms: RoomType[];
    setAllRooms:(rooms: RoomType[]) => void,
    setFilteredRooms:(rooms: RoomType[]) => void
}

const RoomContext = createContext<RoomContextData>({
    allRooms: [],
    filteredRooms: [],
    setAllRooms: () => {},
    setFilteredRooms: () => {}
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

    return (
        <RoomContext.Provider value= {{allRooms, setAllRooms, filteredRooms, setFilteredRooms }}>
            {children}
        </RoomContext.Provider>
    )

}


export { RoomContext, RoomContextProvider, useRoom }; 