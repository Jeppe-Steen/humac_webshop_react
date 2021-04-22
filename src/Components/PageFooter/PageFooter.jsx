import { Link } from 'react-router-dom';
import Style from './PageFooter.module.scss';

const PageFooter = () => {
    return (
        <footer className={Style.pageFooter}>
            <article>
                <h2>Produkter</h2>
                <Link className={Style.links} to="/Produkter/Mac"><p>Mac</p></Link>
                <Link className={Style.links} to="/Produkter/Iphone"><p>Iphone</p></Link>
                <Link className={Style.links} to="/Produkter/Ipad"><p>Ipad</p></Link>
                <Link className={Style.links} to="/Produkter/Watch"><p>Watch</p></Link>
                <Link className={Style.links} to="/Produkter/Accessories"><p>Tilbehør</p></Link>
            </article>
            <article>
                <h2>Kundeservice</h2>
                <Link className={Style.links}><p>Kontakt os</p></Link>
            </article>
            <article>
                <h2>Shop Online</h2>
                <Link className={Style.links} to="/Handelsbetingelser"><p>Handelsbetingelser</p></Link>
                <Link className={Style.links} to="/Persondatapolitik"><p>Persondatapolitik</p></Link>
                <Link className={Style.links} to="/Cookiepolitik"><p>Cookiepolitik</p></Link>
                <Link className={Style.links} to="/Fortrydelse"><p>Fortrydelse</p></Link>
            </article>
        </footer>
    )
}

export default PageFooter;