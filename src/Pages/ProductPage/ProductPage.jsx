import React, { useState, useEffect } from "react";
import { useParams} from "react-router";
import Style from './ProductPage.module.scss';
import { FetchHelper } from "../../Helpers/FetchHelper";
import PageFooter from "../../Components/PageFooter/PageFooter";
import { Link } from "react-router-dom";

const ProductPage = (props) => {
    const { productId } = useParams();
    let shoppingcard = props.shoppingcard;
    const setShoppingcard = props.setShoppingcard; 

    let [product, setProduct] = useState();

    const handleClick = (element) => {
        setShoppingcard([...shoppingcard, {title: element.title, price: element.price, skuNumber: element.skuNumber, image: element.image}]);
        console.log(shoppingcard)
    };

    const handleLook = () => {
        console.log(shoppingcard);
    }

    const doFetch = async () => {
        let url = `https://graphql.contentful.com/content/v1/spaces/mlkcd9qxygui/`;
        const query = 
        `{
            productCollection (where: {skuNumber: "${productId}"}) {
              items {
                title
                productCategory {
                    title
                }
                skuNumber
                description
                price
                deliveryTime
                shortDescription 
                imageUrls
              }
            }
          }`;

          let response = await FetchHelper(url, query);
          setProduct(response.data.productCollection.items);
    };

    useEffect(() => {
        doFetch();
    }, [productId])

    return (
        <main className={Style.mainContainer}>
            {product ? product.map((item, index) => {
                return (
                    <section key={index} className={Style.productContent}>
                        <article className={Style.productPictures}>
                            <img className={Style.mainPicture} src={item.imageUrls[0]} alt="" />
                            <div>
                                {item.imageUrls.slice(1,4).map((picture, index) => {
                                    return ( 
                                        <img key={index} className={Style.secondaryPicture} src={picture} alt="" />
                                    )
                                })}
                            </div>
                        </article>
                        <article className={Style.productDetails}>
                            <header>
                                <h1>{item.title}</h1>
                                <p>Kategori: {item.productCategory.title}</p>
                                <p>SKU Nummer: {item.skuNumber}</p>
                            </header>
                            
                            <p>{item.description.slice(0, 400)}...</p>

                            <footer>
                                <p>Pris: {item.price} DKK</p>
                                <p>Leverings tid: {item.deliveryTime}</p>
                                <button type="button" onClick={() => handleClick({title: item.title, price: item.price, skuNumber: item.skuNumber, image: item.imageUrls[0]})}>Tilføj til kurv</button>
                                <Link to="/Indkøbskurv"><button type="button" onClick={() => handleLook()}>Køb nu</button></Link>
                            </footer>
                        </article>
                    </section>
                )
            }): null}

            <PageFooter />
        </main>
    )
}

export default ProductPage;