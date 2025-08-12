import DefaultCup from "@/assets/default_coffee_cup_order.jpg";

const OrderItem = () => {
    return (
        <div className="pb-3">
            <div className="text-md font-semibold flex items-center gap-1 mb-3">
                Items <span className="text-sm">4</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <div className="border border-1 p-2 rounded-lg items-center flex flex-col sm:flex-row gap-3">
                    <div>
                        <img src={DefaultCup} className="w-35 rounded-lg" alt="Default Cup" />
                    </div>
                    <div className="text-sm font-bold text-gray-700 flex flex-col gap-1">
                        <div>Name: <span className="font-medium">Coffee</span></div>
                        <div>Price: <span className="font-medium">Rs. 100</span></div>
                        <div>Quantity: <span className="font-medium">4</span> </div>
                    </div>
                </div>
                
                <div className="border border-1 p-2 rounded-lg items-center flex flex-col sm:flex-row gap-3">
                    <div>
                        <img src={DefaultCup} className="w-35 rounded-lg" alt="Default Cup" />
                    </div>
                    <div className="text-sm font-bold text-gray-700 flex flex-col gap-1">
                        <div>Name: <span className="font-medium">Coffee</span></div>
                        <div>Price: <span className="font-medium">Rs. 100</span></div>
                        <div>Quantity: <span className="font-medium">4</span> </div>
                    </div>
                </div>

                <div className="border border-1 p-2 rounded-lg items-center flex flex-col sm:flex-row gap-3">
                    <div>
                        <img src={DefaultCup} className="w-35 rounded-lg" alt="Default Cup" />
                    </div>
                    <div className="text-sm font-bold text-gray-700 flex flex-col gap-1">
                        <div>Name: <span className="font-medium">Coffee</span></div>
                        <div>Price: <span className="font-medium">Rs. 100</span></div>
                        <div>Quantity: <span className="font-medium">4</span> </div>
                    </div>
                </div>

                <div className="border border-1 p-2 rounded-lg items-center flex flex-col sm:flex-row gap-3">
                    <div>
                        <img src={DefaultCup} className="w-35 rounded-lg" alt="Default Cup" />
                    </div>
                    <div className="text-sm font-bold text-gray-700 flex flex-col gap-1">
                        <div>Name: <span className="font-medium">Coffee</span></div>
                        <div>Price: <span className="font-medium">Rs. 100</span></div>
                        <div>Quantity: <span className="font-medium">4</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem;