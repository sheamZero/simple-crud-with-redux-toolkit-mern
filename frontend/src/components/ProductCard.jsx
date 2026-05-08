import {Link} from "react-router-dom";  

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 group border border-gray-100 flex flex-col">

            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-1 leading-snug">
                    {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-1 line-clamp-2">
                    {product.description}
                </p>

                {/* Price & Stock */}
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-lime-600">
                        ${product.price.toFixed(2)}
                    </h2>

                    <span className="bg-lime-50 text-lime-600 text-sm font-semibold px-4 py-1.5 rounded-full">
                        Stock: {product.countInStock}
                    </span>
                </div>

                {/* Button */}
            
            <Link
                to={`/products/${product._id}`}
                className="w-full bg-lime-600 hover:bg-lime-700 active:scale-[0.98] text-white py-3 rounded-xl transition-all duration-300 text-center cursor-pointer font-medium shadow-sm mt-auto"
            >
                View Details
            </Link>

            </div>
        </div>
    );
};

export default ProductCard;