import React, { useState } from "react";
import firebase from "firebase";
import { navigate } from "@reach/router";

import {Container, Button} from 'react-bootstrap';

const Login = () => {
    const [authError, setAuthError] = useState(null);

    const handleLogin = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        try {
            await firebase.auth().signInWithPopup(provider);
            navigate("/");
        } catch (error) {
            setAuthError(error);
        }
    };

    return (
        <Container>
            <h1>
                Login or sign up
            </h1>
            <Button onClick={handleLogin} bg="#dd5044">
                    Continue with Google
            </Button>
                {authError && <p>{authError.message}</p>}
        </Container>
    );
};

export default Login;
