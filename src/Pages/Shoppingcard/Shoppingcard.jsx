import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageFooter from '../../Components/PageFooter/PageFooter';
import Payment from '../Payment/Payment';
import Style from './Shoppingcard.module.scss';
  

const Shoppingcard = (props) => {

    let shoppingcard = props.shoppingcard;
    let setShoppingcard = props.setShoppingcard;

    const handleRemoveItem = (index) => {
        const temp = [...shoppingcard];
        temp.splice(index, 1);
        setShoppingcard(temp);
    }

    return (
        <main className={Style.mainContainer}>
            <header className={Style.containerHeader}>
                <h1>- Indkøbskurv -</h1>
                <Payment />
            </header>

            <section className={Style.shoppingcard}>
            {shoppingcard ? shoppingcard.map((item, index) => {
                return (
                    <article className={Style.addedProduct} key={index}>
                        <img src={item.image} alt="" />
                        <h2>{item.title}</h2>
                        <p>Pris: {item.price} DKK</p>
                        <button className={Style.removeButton} type="button" onClick={() => handleRemoveItem(index)}>fjern fra kurven</button>
                    </article>
                )
            }): null}
            </section>

            <PageFooter />
        </main>
    )
};

export default Shoppingcard;