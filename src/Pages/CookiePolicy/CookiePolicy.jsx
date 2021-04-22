import PageFooter from '../../Components/PageFooter/PageFooter'
import Style from './CookiePolicy.module.scss'

const CookiePolicy = () => {
    return (
        <main className={Style.mainContainer}>
            <header><h1>- Cookiepolitik -</h1></header>
            <section>
                <article>
                    <h2>Hjemmesidens ejer og kontaktoplysninger</h2>
                    <p>
                        Denne hjemmeside er drevet og ejet af: Humac A/S <br />
                        CVR: 13397597 <br />
                        E-mail: kontakt@humac.com <br />
                        Telefon: 70 21 53 53
                    </p>
                </article>
                <article>
                    <h2>Hvad er en cookie?</h2>
                    <p>En cookie er en lille tekst-fil, som vi gemmer på din computer for at kunne holde styr på, hvad der sker under dit besøg og for at kunne genkende computeren. En cookie indeholder kun tekst, er ikke et program og indeholder ikke virus.</p>
                </article>
                <article>
                    <h2>Hjemmesidens brug af cookies</h2>
                    <p>Cookies er nødvendige for at få hjemmesiden til at fungere. Cookies hjælper os desuden med at få overblik over dit besøg på hjemmesiden, så vi løbende kan optimere og målrette hjemmesiden til dine behov og interesser. Cookies husker f.eks., hvad du har lagt i en eventuel indkøbskurv, om du tidligere har besøgt siden, om du er logget ind og hvilket sprog og valuta, du gerne vil have vist på hjemmesiden. Vi bruger også cookies til at målrette vores annoncer over for dig på andre hjemmesider. Helt overordnet anvendes cookies således som del af vores service til at vise indhold, der er så relevant som muligt for dig. Her er oversigten over hjemmesidens brug af cookies, og vores samarbejdspartnere i denne forbindelse:</p>
                </article>
                <article>
                    <h2>Sådan afviser eller sletter du dine cookies</h2>
                    <p>
                        Afvisning af cookies: Du kan altid afvise cookies på din computer ved at ændre indstillingerne i din Internet-browser. Hvor du finder indstillingerne afhænger af, hvilken browser du anvender. Du skal dog være opmærksom på, at hvis du gør det, er der mange funktioner og services, du ikke kan bruge, fordi disse funktioner og services forudsætter, at hjemmesiden kan huske de valg, du foretager.
                        Du kan fravælge cookies fra Google Analytics her.
                        Det er muligt at fravælge nogle annoncenetværk, der deler oplysninger på tværs af forskellige netværk her.
                    </p>
                    <p>
                        Sletning af cookies: Cookies som du tidligere har accepteret, kan efterfølgende slettes nemt. Benytter du en PC /computer med en nyere Internet-browser, kan du slette dine cookies ved at bruge genvejstasterne: 
                        CTRL + SHIFT + Delete. Virker genvejstasterne ikke, og/eller benytter du en MAC, skal du starte med at finde ud af, hvilken browser du bruger og herefter klikke på det relevante link:
                    </p>
                </article>
            </section>

            <PageFooter />
        </main>
    )
};

export default CookiePolicy;