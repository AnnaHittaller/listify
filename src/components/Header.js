import logo from '../images/logo.png'
import './Header.css'

export function Header() {
    return (
        <div>
            <img src={logo} className="logo-header" />
        </div>
    )
}