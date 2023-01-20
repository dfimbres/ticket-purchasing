import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'

export default function Checkout() {
  const router = useRouter();
  const data = JSON.parse(router.query.shows)
  const [shows, setShows] = useState(data);

  useEffect(() => {
    console.log(shows)
  }, [shows]);

  return (
    <div>
      <div className={styles.delivery}>
        delivery

      </div>

      <div className={styles.payment}>
        Payment
      </div>

      <div className={styles.checkout}>
        <h1>checkout</h1> 

        <div>
          {shows.map(show => (
            <a key={show.id} >
              <h2>{show.title}</h2>
              <p>{show.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}