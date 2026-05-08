import { Link } from "react-router-dom";
import { X } from "lucide-react";

const MenuSidebar = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <>
            {/* Overlay */}
            <div
                onClick={() => setIsMenuOpen(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isMenuOpen
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
            ></div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-screen w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-5 border-b">
                    <h2 className="text-lg font-semibold">
                        Menu
                    </h2>

                    <X
                        onClick={() => setIsMenuOpen(false)}
                        className="cursor-pointer"
                    />
                </div>

                {/* Links */}
                <div className="flex flex-col p-6 gap-5">
                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-medium hover:text-lime-600 transition"
                        to="/"
                    >
                        Home
                    </Link>

                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-medium hover:text-lime-600 transition"
                        to="/products"
                    >
                        Products
                    </Link>

                    <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="text-base font-medium hover:text-lime-600 transition"
                        to="/cart"
                    >
                        Cart
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MenuSidebar;