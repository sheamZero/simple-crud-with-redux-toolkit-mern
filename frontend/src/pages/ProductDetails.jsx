import { useParams } from "react-router-dom";
import { ShoppingCart, ShieldCheck, Truck } from "lucide-react";

const ProductDetails = () => {
    const { id } = useParams();

    const product = {
        _id: 1,
        title: "Portable Bluetooth Speaker",
        description:
            "Compact portable speaker with deep bass and waterproof design. Enjoy premium sound quality anywhere with long-lasting battery backup and sleek modern design.",
        price: 45.5,
        countInStock: 20,
        imageUrl: "https://i.ibb.co.com/dwJFBpZB/keyboard.jpg",
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
            
            <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">
                
                {/* Left Side */}
                <div className="bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-6">
                    <img
                        src={product.imageUrl}
                        alt={product.title}
                        className="w-full max-w-md object-cover rounded-2xl hover:scale-105 transition duration-300"
                    />
                </div>

                {/* Right Side */}
                <div className="flex flex-col justify-center">

                    {/* Product Info */}
                    <div>
                        <span className="bg-lime-50 text-lime-600 text-sm font-semibold px-4 py-1 rounded-full">
                            In Stock: {product.countInStock}
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 my-2">
                            {product.title}
                        </h1>

                        <p className="text-gray-600 text-lg leading-8 ">
                            {product.description}
                        </p>

                        <h2 className="text-4xl font-bold text-lime-600 mt-3">
                            ${product.price.toFixed(2)}
                        </h2>
                    </div>

                    {/* Quantity & Button */}
                    <div className="mt-5 flex flex-col sm:flex-row items-center gap-4">
                        <span className="font-bold text-2xl text-gray-700">Quantity:</span>
                        <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-lime-400 text-gray-700 font-medium">
                           
                            {[...Array(product.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                     {x + 1}
                                </option>
                            ))}
                        </select>

                        <button className="flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-600 active:scale-[0.98] transition-all duration-300 text-white font-semibold px-8 py-3 rounded-xl shadow-md">
                            <ShoppingCart size={20} />
                            Add To Cart
                        </button>

                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                            <Truck className="mx-auto text-lime-600 mb-3" />
                            <h3 className="font-semibold text-gray-800">
                                Free Shipping
                            </h3>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                            <ShieldCheck className="mx-auto text-lime-600 mb-3" />
                            <h3 className="font-semibold text-gray-800">
                                Secure Payment
                            </h3>
                        </div>

                        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                            <ShoppingCart className="mx-auto text-lime-600 mb-3" />
                            <h3 className="font-semibold text-gray-800">
                                Easy Returns
                            </h3>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;