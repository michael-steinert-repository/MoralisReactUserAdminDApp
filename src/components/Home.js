import {Box, Button} from "@chakra-ui/react";
import {useMoralis} from "react-moralis";

const Home = () => {
    const {logout} = useMoralis();
    return(
        <Box>
            <Button onClick={() => logout()}>Logout</Button>
        </Box>
    );
}

export default Home;