import { useState } from "react";

const [loggedIn, setIsLoggedIn] = useState()

const checkLoggedIn = () => {
    //logic to check if user is logged in
    const token = localStorage.getItem('token');
    if (token) {
        setIsLoggedIn(true);
    }
    else {
        setIsLoggedIn(false);
    }
}

export default checkLoggedIn