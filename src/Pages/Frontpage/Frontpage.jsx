import Style from "./Frontpage.module.scss";
import heroPicture from "../../Assets/Images/frontpagePicture.jpeg";
import { useEffect, useState } from "react";
import {FetchHelper} from "../../Helpers/FetchHelper.js"
import { Link } from "react-router-dom";
import PageFooter from "../../Components/PageFooter/PageFooter";

const Frontpage = () => {

    const [newestProducts, setNewestProducts] = useState("");

    const doFetch = async () => {
        let url = `https://graphql.contentful.com/content/v1/spaces/mlkcd9qxygui/`;
        const query = 
        `{
            productCollection {
                items {
                    title
                    productCategory {
                        title
                    }
                    skuNumber
                    price
                    imageUrls
                }
            }
        }`;

        let response = await FetchHelper(url, query)
        setNewestProducts(response.data.productCollection.items);
    };

    useEffect(() => {
        doFetch();
    }, [])

    return (
        <main className={Style.mainContainer}>
            <section className={Style.pageHero}>
                <article className={Style.pageHeroArticle}>
                    <header><h1>Aflever din smartphone, og få et tilskud.</h1></header>
                    <p>Med Apple Trade In kan du få et tilskud til en ny iPhone, når du afleverer en smart­phone, som er i god nok stand.* Det er godt for både dig og miljøet.</p>
                    <a href="#">Læs mere</a>
                </article>
                <img src={heroPicture} alt="iphones" title="iphones"/>
            </section>

            <section className={Style.newsletter}>
                <p>newsletter sections - kommer snart!</p>
            </section>

            <section className={Style.newestProducts}>
                <header><h2>Nyeste Produkter</h2></header>
                <div className={Style.newestWrapper}>
                    {newestProducts ? newestProducts.reverse().slice(0, 3).map((item, index) => {
                        return (
                            <Link key={index} className={Style.product} to={`Produkter/${item.productCategory.title}/${item.skuNumber}`}>
                                <article>
                                    <img src={item.imageUrls[0]} alt={item.title} title={item.title} />
                                    <span>
                                        <h3>{item.title}</h3>
                                        <p>{item.price} DKK</p>
                                    </span>
                                </article>
                            </Link>
                        )
                    }): null}
                </div>
            </section>

            <PageFooter />
        </main>
    )
};

export default Frontpage;