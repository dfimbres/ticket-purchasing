This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, get the dependencies:
* next.js
* react

```bash
npm run install
# or
yarn install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## HIGHLIGHTS
1. proper use of const, let, var
2. handling array of object, using useState hook, and best practices for deep copy of data I wanted to keep
```
    return {
    ...show,
    quantity: e.target.value
    }
```
3. conditional rendering of elements cleanly
4. using next.js Link & routing to handle page navigation
5. css pretty responsive, would want to do better here
6. css used flexbox, industry standard
7. error handling, type casting
8. readability