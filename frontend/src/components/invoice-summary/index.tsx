import { Button } from "../ui/button";

const InvoiceSummary = () => {
    return (
        <div className="border border-1 rounded-xl p-4">
            <div className="leading-none flex flex-col gap-1">
                <div className="text-2xl font-semibold">Order Summary</div>
                <div className="text-sm text-gray-500">Here's your summary for the stuff you bought</div>
            </div>
            <div className="text-md my-4">
                <div className="grid grid-cols-2">
                <div>Tea</div>
                    <div className="text-right">Rs: 100</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>Tea</div>
                    <div className="text-right">Rs: 100</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>Tea</div>
                    <div className="text-right">Rs: 100</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>Tea</div>
                    <div className="text-right">Rs: 100</div>
                </div>
                <div className="grid grid-cols-2">
                    <div>Total</div>
                    <div className="text-right">Rs: 400</div>
                </div>
            </div>
                <div className="grid grid-cols-2 bg-gray-100 font-bold items-center p-3 rounded-b-xl">
                    <div>Rs: 400 (4 items)</div>
                    <div className="flex gap-4 justify-end">
                        <Button variant={"secondary"} className="hidden sm:flex rounded-full px-6">Contact Seller</Button>
                        <Button className="rounded-full px-6">Invoice</Button>
                    </div>
                </div>
        </div>
    )
}

export default InvoiceSummary;