import { useEffect, useState } from "react";
import { useParams, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import PageFooter from "../../Components/PageFooter/PageFooter";
import { FetchHelper } from "../../Helpers/FetchHelper";
import Style from './Products.module.scss';

const Products = () => {
    const { categoryId } = useParams();

    let [products, setProducts] = useState([]);
    let [sortedProducts, setSortedProducts] = useState([]);
    let [filter, setFilter] = useState("");

    /*const sortByCheapest = () => {
        const sorted = sortedProducts.sort((a, b) => {
            return a.price - b.price;
        });
        setSortedProducts(sorted);
    };

    const sortByMostExpensive = () => {
        const sorted = sortedProducts.sort((a, b) => {
            return b.price - a.price;
        });
        setSortedProducts(sorted);
    };*/

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
    }, [categoryId]);

    return (
        <main className={Style.mainContainer}>

            <header className={Style.containerHeader}>
                <h1>- {categoryId} -</h1>
                <select className={Style.filterOption} onChange={(e) => {setFilter(e.target.value)}}>
                    <option value="" selected disabled>Sorter efter pris</option>
                    <option value="descending">Dyreste</option>
                    <option value="ascending">Billigste</option>
                </select>
            </header>

            <section className={Style.productsContainer}>

                



                {products ? products.map((item, index) => {
                return (
                    <Link className={Style.product} key={index} to={`${categoryId}/${item.skuNumber}`}>
                        <article key={index}>
                            <img src={item.imageUrls[0]} alt="" />
                            <h3>{item.title}</h3>
                            <p>{item.price} DKK</p>
                        </article>
                    </Link>
                )
                }): null}
            </section>
            
            <PageFooter />
        </main>
    )
}

export default Products;