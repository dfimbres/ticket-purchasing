import React from 'react'

import { withRouter } from 'next/router';

function Checkout({ router: { query }}) {
  const object = JSON.parse(query.object);

  return (
    <div>
      about {object.title}
    </div>
  );
}

export default withRouter(Checkout);