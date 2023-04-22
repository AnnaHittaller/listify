import './Navigation.css';
import iconlist from '../images/icon-list.png';
import iconplus from '../images/icon-plus.png';
import iconcalendar from '../images/icon-calendar.png';
import { Link, NavLink } from 'react-router-dom';
import { MdCalendarToday } from "react-icons/md";
import { TbListCheck } from "react-icons/tb";



export function Navigation() {
    return (
			<div className="navigation">
				<div>
					<NavLink to="/" activeClassName="active">
						<button className="button-icon">{<TbListCheck />}</button>
					</NavLink>
					<NavLink to="/calendar" activeClassName="active">
						<button className="button-icon">
							<MdCalendarToday />
						</button>
					</NavLink>
				</div>
				<div className="navigation-plus">
					<NavLink to="/todolist">
						<button className="button-plus-outer">
							<div className="button-plus-inner">
								<img src={iconplus} width="20" height="20" />
							</div>
						</button>
					</NavLink>
				</div>
			</div>
		);
}