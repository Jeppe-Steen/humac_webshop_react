import PageFooter from '../../Components/PageFooter/PageFooter';
import Style from './UndoBuy.module.scss'

const UndoBuy = () => {
    return (
        <main className={Style.mainContainer}>
            <header><h1>- Fortrydels -</h1></header>
            <section>
                <article>
                    <h2>Der er ingen fortrydelse</h2>
                    <p>
                        humac.dk ejes og drives af Humac A/S <br />
                        Sydvestvej 21, 3. sal <br />
                        2600 Glostrup <br />
                        CVR. nr. 13397597 <br />
                        Etableringsår 1989 <br />
                        kontakt@humac.com · Tlf. 70 21 53 53
                    </p>
                </article>
            </section>

            <PageFooter />
        </main>
    )
};

export default UndoBuy;