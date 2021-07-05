import './Nav.css';
import { Button } from '../button/Button'

export const Nav=()=>{
    return(
        <nav className="nav flex-row">
            <div className="center">
                <img src="./images/aerolab-logo.svg" alt="logo" />
            </div>
            <div className="container-user flex-row">
                <h3 className="normal-text center">Julia Coi</h3>
                <Button 
                    text={6000}
                    image={"./images/coin.svg"}
                />
            </div>
        </nav>
    )
}