import { useState, useEffect } from 'react';

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products'); // API
        if (!response.ok) {
          throw new Error('Failed to fetch products. Please try again later.');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message); // Capture the error message
      } finally {
        setLoading(false); // Set loading to false whether fetch succeeds or fails
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useFetchProducts;

