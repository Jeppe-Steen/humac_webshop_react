import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import PageFooter from "../../Components/PageFooter/PageFooter";
import { FetchHelper } from "../../Helpers/FetchHelper";
import Style from './Products.module.scss';

const Products = () => {
    const { categoryId } = useParams();

    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState();

    const doFetch = async () => {
        let url = `https://graphql.contentful.com/content/v1/spaces/mlkcd9qxygui/`;
        const query = 
        `{
            productCollection (where: {productCategory: {title: "${categoryId}"}}) {
              items {
                title
                skuNumber
                price
                shortDescription 
                imageUrls
              }
            }
          }`;

        let response = await FetchHelper(url, query);
        setProducts(response.data.productCollection.items);
    }

    useEffect(() => {
        doFetch();
        document.querySelector("#mySelect").selectedIndex = 0;
    }, [categoryId]);

    useEffect(() => {
        if(filter === "cheap first") {
            const sorted = products.sort((a, b) => {
                return a.price - b.price;
            });
            setProducts([...sorted]);
        } else if (filter === "expensive first") {
            const sorted = products.sort((a, b) => {
                return b.price - a.price;
            });
            setProducts([...sorted]);
        }
    }, [filter]);

    return (
        <main className={Style.mainContainer}>

            <header className={Style.containerHeader}>
                <h1>- {categoryId} -</h1>
                <select id="mySelect" className={Style.filterOption} onChange={(e) => {setFilter(e.target.value)}}>
                    <option value="normal sort" selected disabled>Sorter efter pris</option>
                    <option value="expensive first">Dyreste</option>
                    <option value="cheap first">Billigste</option>
                </select>
            </header>

            <section className={Style.productsContainer}>
                {products ? products.map((item, index) => {
                return (
                    <Link className={Style.product} key={index} to={`${categoryId}/${item.skuNumber}`}>
                        <article>
                            <img src={item.imageUrls[0]} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.price} DKK</p>
                        </article>
                    </Link>
                )
                }) : null}
            </section>
            
            <PageFooter />
        </main>
    )
}

export default Products;