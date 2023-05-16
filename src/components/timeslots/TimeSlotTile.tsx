import Button from "../interaction/Button"

type PropsType = {
    selected: boolean;
    time: string;
}

export const TimeSlotTile = ({ selected, time }: PropsType) => {
    return(
        <>
        
        <Button styles={`mb-3 w-full ${selected ? 'btn-active' : 'btn-outline btn-ghost'}  btn-primary`}>
            10:00 - 10:00
        </Button>
        </>
    )
}