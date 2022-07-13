import React, { useEffect, useState } from 'react'
import ProductsList from './components/ProductsList';
import { IData } from './types/types';

export default function App() {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
      fetch('https://cool-sprinkles-c8fad1.netlify.app/data.json')
      .then((response) => {
          return response.json();
      })
      .then((data: IData[]) => {
          setData(data);
      });
  }, []);

  return (
    <main className="main">
        <section className="products">
          <ProductsList products={data}/>
      </section>
    </main>
  );
}
