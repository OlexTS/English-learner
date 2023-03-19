import { Button, FormControlLabel, Checkbox } from "@mui/material"

export const WordsListItem = () => {
    
    return <li style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <FormControlLabel control={<Checkbox defaultChecked />} />
        <span>1</span>
        <span>Ukr</span>
        <span>Eng</span>
        <div>
            <Button>Edit</Button>
        <Button>Delete</Button></div>
        
    </li>
}