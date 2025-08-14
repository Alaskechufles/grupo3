import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import top100Films from '../data/top100Films';

export default function InputAC() {
    return (
        <div>
            <Autocomplete
                disablePortal
                options={top100Films}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </div>
    )
}
