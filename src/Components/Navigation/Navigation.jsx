import { Link } from "react-router-dom";
import Style from './Navigation.module.scss'
import logo from '../../Assets/Images/humac-logo.png';
import { useEffect } from "react";
const Navigation = (props) => {
    let onTop = props.onTop;
    let shoppingcard = props.shoppingcard;

    return (
        <nav className={onTop === true ? Style.pageNavigation : Style.pageNavigation + ' ' + Style.active}>
            <img onClick={(e) => (window.location.href="/Forside")}className={Style.pageLogo} src={logo} alt="page logo" />
            <ul className={Style.pageMenu}>
                <li><Link className={Style.link} to="/Forside">Forside</Link></li>
                <li><Link className={Style.link} to="/Produkter/Mac">Mac</Link></li>
                <li><Link className={Style.link} to="/Produkter/Iphone">Iphone</Link></li>
                <li><Link className={Style.link} to="/Produkter/Ipad">Ipad</Link></li>
                <li><Link className={Style.link} to="/Produkter/Watch">Watch</Link></li>
                <li><Link className={Style.link} to="/Produkter/Accessories">Tilbehør</Link></li>
            </ul>
            <span className={Style.iconContainer}>
                <Link className={Style.link} to="/Indkøbskurv"><p>Kurv {shoppingcard.length}</p></Link>
            </span>
        </nav>
    )
};

export default Navigation;