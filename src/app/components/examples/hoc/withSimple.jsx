import React from "react";
import CardWrapper from "../../common/Card";

const withSimple = (SimpleComponent) => (props) => {
    const isAuth = localStorage.getItem("user");
    const handleLogin = () => {
        console.log("Login");
    };
    const handleLogOut = () => {
        console.log("LogOut");
    };
    return (
        <CardWrapper>
            <SimpleComponent
                {...props}
                isAuth={isAuth}
                onLogin={handleLogin}
                onLogOut={handleLogOut}
            />
        </CardWrapper>
    );
};

export default withSimple;
