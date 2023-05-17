import { Dayjs } from "dayjs";
import Button from "../interaction/Button"

type PropsType = {
    selected?: boolean | false;
    time: Dayjs;
    disabled?: boolean | false;
}

export const TimeSlotTile = ({ selected, disabled, time }: PropsType) => {

    
    return(
        <Button styles={`mb-3 w-full ${selected ? 'btn-active' : 'btn-outline btn-ghost'} ${disabled && 'btn-disabled'} btn-primary`}>
            {time.format("HH:MM")}
        </Button>
    )
}