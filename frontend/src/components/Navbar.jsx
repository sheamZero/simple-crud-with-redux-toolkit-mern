import { Link } from "react-router-dom";
import { MenuIcon, ShoppingCart } from "lucide-react";
import { useState } from "react";
import MenuSidebar from "./MenuSidebar";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    console.log(isMenuOpen);

    return (
        <>
            <nav className="flex sticky top-0 left-0 items-center justify-between px-8 md:px-16 py-6 bg-lime-50 shadow border-b border-b-gray-200">
                <div className="flex items-center gap-4">
                    <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl block md:hidden" />
                    <Link className="text-xl font-semibold cursor-pointer" to="/">Simple CRUD App</Link>
                </div>

                <div className="flex items-center gap-6">
                    <div className="items-center gap-4 hidden md:flex">
                        <Link className="text-base font-medium hover:text-lime-600" to="/">Home</Link>
                        <Link className="text-base font-medium hover:text-lime-600" to="/products">Products</Link>
                    </div>

                    <div className="relative text-2xl cursor-pointer">
                        <ShoppingCart />
                        <span className="absolute -top-2.5 -right-2.5 bg-lime-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
                    </div>
                </div>
            </nav>

            <MenuSidebar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />
        </>
    );
};

export default Navbar;