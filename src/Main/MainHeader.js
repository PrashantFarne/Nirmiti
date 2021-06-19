import React from 'react';
import Navigation from './Navigation';
import classes from '../UI/Card';


const MainHeader = (props) => {
    return(
        <header className={classes['main-header']}>
            <h1>My Website</h1>
            <Navigation isLoggedIn={props.isAuthenticated}
            onLogged={props.onLogout}/>
        </header>
    );
};

export default MainHeader;
