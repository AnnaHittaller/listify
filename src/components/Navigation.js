import './Navigation.css';
import iconlist from '../images/icon-list.png';
import iconplus from '../images/icon-plus.png';
import iconcalendar from '../images/icon-calendar.png';



export function Navigation() {
    return (
        <div className="navigation">
            <div>
                <button className="button-icon"><img src={iconlist} /></button>
                <button className="button-icon"><img src={iconcalendar} /></button>
            </div>
            <div className="navigation-plus">
                <button className="button-plus-outer"><div className="button-plus-inner"><img src={iconplus} width="20" height="20" /></div></button>
            </div>

        </div >
    )
}