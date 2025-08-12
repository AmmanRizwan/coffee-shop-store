import { MapPin, Truck, TruckIcon } from "lucide-react";

const TrackOrder = () => {
    return (
        <div>
            <div className="border border-1 bg-gray-100 rounded-xl p-3 px-4">
                <div className="flex flex-col gap-2">
                    <Truck />
                    <p className="font-semibold">Be patient, package on deliver</p>
                </div>
                <p className="flex grap-5 grid grid-cols-3">
                    <div className="flex gap-1">
                        <TruckIcon />
                        <p>Coffee Store</p> 
                    </div>
                    <div className="flex items-center">
                        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                        <span className="h-1 w-20 bg-gray-400 rounded-full"></span>
                        <span className="h-1 w-20 bg-gray-400 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                    </div>
                    <div className="flex gap-1">
                       <MapPin /> <p>Your Location</p> 
                    </div>
                    </p>
            </div>
        </div>
    )
}

export default TrackOrder;