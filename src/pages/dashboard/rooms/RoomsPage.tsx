import { RoomContextProvider } from "../../../contexts/RoomContext"
import { RoomsFilter } from "./RoomsFilter"
import { RoomsList } from "./RoomsList"


export const RoomsPage = () => {

    


    return (
        <div className="left-[max(0px,calc(50%-45rem))] max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 2xl:mr-[12.5rem] 2xl:ml-[12rem] xl:pr-16"> 
            <h1 className="text-5xl pb-3">Rooms</h1>
            <h4 className="text-lg text-slate-500 pb-10">x results</h4>

            <RoomsFilter />

            <RoomsList />
        </div>

    )
}