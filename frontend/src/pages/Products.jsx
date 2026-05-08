import ProductCard from "../components/ProductCard";

const Products = () => {
    const products = [
        {
            _id: 1,
            title: "Portable Bluetooth Speaker",
            description:
                "Compact portable speaker with deep bass and waterproof design.",
            price: 45.5,
            countInStock: 20,
            imageUrl: "https://i.ibb.co.com/dwJFBpZB/keyboard.jpg",
        },
        {
            _id: 2,
            title: "Gaming Mechanical Keyboard",
            description:
                "RGB mechanical keyboard with customizable lighting effects.",
            price: 89.99,
            countInStock: 12,
            imageUrl: "https://i.ibb.co.com/bMWJjZ8b/speaker.jpg",
        },
        {
            id: 3,
            title: "Wireless Headphones",
            description:
                "Noise cancelling wireless headphones with premium sound quality.",
            price: 120,
            countInStock: 8,
            imageUrl: "https://i.ibb.co.com/dwJFBpZB/keyboard.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Our Products
                    </h1>

                    <p className="text-gray-500 mt-3">
                        Explore our latest collection of premium products
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;