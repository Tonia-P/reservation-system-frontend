import { useEffect } from "react"
import { EventCard } from "../../../components/cards/EventCard"
import { EventContextProvider, useEvent } from "../../../contexts/EventContext"
import { useRoom } from "../../../contexts/RoomContext"
import { EventsList } from "./EventsList"


export const EventsPage = () => {


    const { allEvents } = useEvent();


    return (
        <EventContextProvider>
        <div className="left-[max(0px,calc(50%-45rem))] max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 2xl:mr-[12.5rem] 2xl:ml-[12rem] xl:pr-16"> 
            <h1 className="text-5xl pb-3">Events</h1>
            <h4 className="text-lg text-slate-500 pb-10">{allEvents.length} results</h4>

            {/* <EventsFilter /> */}

            <EventsList />
        </div>

        </EventContextProvider>
    )
}