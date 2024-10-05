import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import useProducts from "../Hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useProducts(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      // Optionally add a toast notification here
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-6">
      {product && (
        <div className="flex flex-col md:flex-row shadow-2xl rounded-lg overflow-hidden border border-black">
          <div className="md:w-1/2 h-96 flex items-center justify-centers">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-contain p-4 transition-transform transform hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-between bg-white bg-opacity-80 backdrop-blur-lg rounded-lg">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{product.title}</h1>
              <p className="text-lg text-black mb-4">{product.description}</p>
              <p className="text-3xl font-semibold text-black mb-4">${product.price.toFixed(2)}</p>
              <p className="text-black mb-2">Category: <span className="font-semibold">{product.category}</span></p>
              <p className="text-black">Rating: <span className="font-semibold text-pink-800">{product.rating} / 5</span></p>
            </div>
            <div className="mt-auto flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
              <button
                onClick={() => navigate('/browse')}
                className="flex-1 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Back to Browse
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;