import { Button, Container } from "@mui/material";
import requests from "../api/requests";

export default function ErrorPage(){
    return(
        <Container>
            <Button sx={{mr:2}} variant="contained" 
            onClick={() => requests.Errors.get400Error()}>400 Error</Button>
                        <Button sx={{mr:2}} variant="contained" 
            onClick={() => requests.Errors.get401Error()}>401 Error</Button>
        </Container>
    );
}