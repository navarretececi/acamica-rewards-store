import './Nav.css';
import { BtnTextImg } from '../button/BtnTextImg'
import { BtnCoin } from '../button/BtnCoin'
import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export const Nav=()=>{
    const { user } = useContext(AppContext);

    return(
        <nav className="nav flex-row">
            <div className="center">
                <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="container-points flex-row">
                <div className="container-user flex-row">
                    <h3 className="normal-text center">{user.name}</h3>
                    <BtnTextImg text={user.points} />
                </div>
                <div>
                    <BtnCoin />
                </div>
            </div>
        </nav>
    )
}