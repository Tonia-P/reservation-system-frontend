import { FunctionComponent, createContext, useContext, useState } from "react";

interface EventContextData{
    allEvents: EventType[];
    filteredEvents: EventType[];
    setAllEvents:(events: EventType[]) => void,
    setFilteredEvents:(events: EventType[]) => void
}


export type EventType = {
    _id: string;
    name: string;
    seats: number;
    company: string;
}

const EventContext = createContext<EventContextData>({
    allEvents: [],
    filteredEvents: [],
    setAllEvents: () => {},
    setFilteredEvents: () => {}
})


type Props = {
    children: React.ReactNode;
}

const useEvent = () => {
    return useContext(EventContext);
}

const EventContextProvider: FunctionComponent<Props> = ({children}) =>{
    const [ allEvents, setAllEvents ] = useState<EventType[]>([]);
    const [ filteredEvents, setFilteredEvents ] = useState<EventType[]>([]);

    return (
        <EventContext.Provider value= {{allEvents, setAllEvents, filteredEvents, setFilteredEvents }}>
            {children}
        </EventContext.Provider>
    )

}


export { EventContext, EventContextProvider, useEvent }; 