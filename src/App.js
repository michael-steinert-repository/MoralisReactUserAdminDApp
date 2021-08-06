import {useMoralis} from "react-moralis";
import {Avatar, Container, Flex, Heading, Spacer, Stack, Text} from "@chakra-ui/react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Authenticate from "./components/Authenticate";
import {Redirect, Route, Switch} from "react-router";
import Home from "./components/Home";
import Profile from "./components/Profile";
import {Link} from "react-router-dom";


function App() {
    const {isAuthenticated, user, isAuthUndefined} = useMoralis();

    return (
        <Container>
            <Flex>
               <Link to="/">Home</Link>
                <Spacer/>
                {
                    isAuthenticated && (
                        <Link to="/profile">
                            <Avatar name={user.attributes.username}/>
                        </Link>
                    )
                }
            </Flex>
            <Heading>Welcome to Twitter Clone, {user ? user.attributes.username : "authenticate please"}</Heading>
            {
                isAuthenticated ? (
                    <Switch>
                        <Route path="/" exact>
                            <Home/>
                        </Route>
                        <Route path="/profile" exact>
                            <Profile/>
                        </Route>
                    </Switch>
                ) : (
                    <Stack spacing={6}>
                        {/* isAuthUndefined is true in the first Millisecond when the Webapp starts because Moralis need some Time to authenticates the User */}
                        {!isAuthUndefined && <Redirect to="/"/>}
                        <Authenticate/>
                        <Text textAlign="center">or</Text>
                        <SignUp/>
                        <Text textAlign="center">or</Text>
                        <Login/>
                    </Stack>
                )
            }
        </Container>
    );
}

export default App;
