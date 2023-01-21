import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

const SERV_FEE = 44;
const PROC_FEE = 2.95;

export default function Checkout() {
  const router = useRouter();
  const data = JSON.parse(router.query.shows)
  const [shows, setShows] = useState(data);
  const [term, setTerm] = useState(false);

  const [total, setTotal] = useState(0); 
  useEffect(() => {
    setTotal(
      
      shows.reduce((acc, cur) => {
      const costOfItems = parseInt(cur.quantity * cur.cost);
      const servFees = parseInt(cur.quantity * SERV_FEE);

      return acc + costOfItems + servFees;
    }, total) + PROC_FEE
    
    );
  }, [shows]);

  function orderPlaced() {
    alert('Complete');
  }

  function terms(e) {
    // console.log(e.target);
    setTerm(e.target.value);
  }

  return (
    <div className={styles.template}>
      <div>
        <div className={styles.delivery}>
          <h3>Delivery</h3>
          <p>Mobile Entry - Free</p>

          <p>
            These mobile tickets will be transferred directly to you from a trusted seller. We'll email you
            instruction on how to accept them on the original ticket provider's mobile app. 
          </p>
        </div>

        <div className={styles.payment}>
          <h3>Payment</h3>
          <div>
            ******* CREDIT CARD INFO

            Or Pay With
            By using a digital wallet and continuing past this page, you have read and are accepting the 
            
            <Link href="/">Terms of Use</Link>
            .
          </div>
        </div>
      </div>

      <div>
      <div className={styles.checkout}>
        <h1>Total ${total.toFixed(2)}</h1> 
        <h4>Tickets</h4>
          {shows.map(show => (
            <>
              {show.quantity > 0 && 
                <a key={show.id} >
                <h4>{show.title}</h4>
                <p>${show.cost.toFixed(2)} x {show.quantity} = ${(show.cost * show.quantity).toFixed(2)}</p>
                </a>
              }
            </>
          ))}

        <h4>Notes</h4>
        <p>
          some Notes here, I would then proceed to make checkout a whole component.
        </p>

        <h4>Delivery</h4>
        <p>
          Mobile Entry: Free
        </p>

        <Link href='/'>Cancel Order</Link>

        <p>* Final Sale</p>
        
          <input type="checkbox" id="terms-of-agreement" onChange={terms} value={term}/>
          <label for="terms-of-agreement">I have read terms of agreement</label>

          <div className='order'>
            <button onClick={orderPlaced} disabled={!terms} >Place Order</button>
          </div>
      </div>
      </div>
    </div>
  );
}