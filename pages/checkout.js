import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Checkout() {
  const router = useRouter();
  const data = JSON.parse(router.query.shows);
  const [shows, setShows] = useState(data);

  useEffect(() => {
    console.log(shows)
  }, [shows]);

  return (
    <div>
      { shows.map( show => (
            <a>
              <h2>{show.title}</h2>
              <p>{show.description}</p>
            </a>
          ))}
    </div>
  );
}