import InvoiceSummary from "@/components/invoice-summary";
import OrderItem from "@/components/order-item";
import TrackOrder from "@/components/track-order";

const Order = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
            <div className="py-8 w-5/6">
                <div className="pb-5">
                    <p className="text-2xl font-semibold">Order Detail</p>
                </div>
                <div>
                    <p className="text-sm text-gray-400 leading-none">InvoiceID</p>
                    <span className="text-lg font-bold leading-none">#907489347</span>
                </div>
                <TrackOrder />
                <OrderItem />
                <InvoiceSummary />
            </div>
            </div>
        </div>
    )
}

export default Order;