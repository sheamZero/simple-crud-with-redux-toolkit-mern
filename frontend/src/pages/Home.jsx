import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";

const Home = () => {
    return (
        <div className="min-h-[calc(100vh-88px)] bg-lime-50/50 px-6 md:px-16 py-12">
            
            {/* Hero Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div>
                    <p className="text-lime-600 font-semibold mb-3">
                        Welcome to Simple CRUD App
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                        Manage Your Products Easily & Efficiently
                    </h1>

                    <p className="text-gray-600 mt-6 text-base md:text-lg leading-7">
                        A modern CRUD application where you can add, edit,
                        update, and manage products smoothly with a clean UI
                        and responsive experience.
                    </p>

                    <div className="flex items-center gap-4 mt-8">
                        <Link
                            to="/products"
                            className="bg-lime-500 hover:bg-lime-600 text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition"
                        >
                            Explore Products
                            <ArrowRight size={18} />
                        </Link>

                        <button className="border border-gray-300 hover:border-lime-500 hover:text-lime-600 px-6 py-3 rounded-xl font-medium transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Content */}
                <div className="flex justify-center">
                    <div className="bg-white p-10 rounded-3xl shadow-lg w-full max-w-md">
                        
                        <div className="bg-lime-100 h-20 w-20 rounded-2xl flex items-center justify-center mb-6">
                            <ShoppingBag className="text-lime-600" size={38} />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900">
                            Product Management System
                        </h2>

                        <p className="text-gray-600 mt-4 leading-7">
                            Build and manage your inventory with modern tools,
                            responsive design, and smooth user experience using
                            React, Tailwind CSS, and Redux.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="bg-lime-50 rounded-2xl p-5 text-center">
                                <h3 className="text-3xl font-bold text-lime-600">
                                    100+
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Products
                                </p>
                            </div>

                            <div className="bg-lime-50 rounded-2xl p-5 text-center">
                                <h3 className="text-3xl font-bold text-lime-600">
                                    Fast
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    Performance
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Add Products
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                        Easily add new products with details and manage your
                        inventory efficiently.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Update Data
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                        Edit and update existing products instantly with smooth
                        user interaction.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900">
                        Responsive UI
                    </h3>

                    <p className="text-gray-600 mt-3 leading-7">
                        Fully responsive design that works perfectly on mobile,
                        tablet, and desktop devices.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Home;