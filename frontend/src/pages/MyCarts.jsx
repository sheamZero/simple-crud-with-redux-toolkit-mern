
const MyCarts = () => {

    return (
        <div className="container mx-auto w-full px-4 py-10">

            <div className="w-full grid grid-cols-1 md:grid-cols-6 gap-10">
                <div className="bg-lime-50/30 p-6 rounded-lg shadow md:col-span-4">
                    <h2 className="text-xl font-bold mb-4">Your Carts</h2>
                    <p className="text-gray-600">Manage your shopping carts here.</p>
                </div>
                <div className="bg-lime-50/30 p-6 rounded-lg shadow md:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Payment Options</h2>
                    <p className="text-gray-600">Select your preferred payment method.</p>
                </div>
               
            </div>
        </div>
    );
};

export default MyCarts;