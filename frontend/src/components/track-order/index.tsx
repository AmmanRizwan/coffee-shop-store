import { MapPin, Timer, Truck, TruckElectricIcon, TruckIcon } from "lucide-react";
import { Progress } from "../ui/progress";

const TrackOrder = () => {
    return (
        <div className="grid lg:grid-cols-4 gap-2 my-5">
            <div className="lg:col-span-2 border border-1 bg-gray-100 rounded-xl p-3 px-4">
                <div className="flex flex-col gap-3">
                    <div className="pl-2">
                        <TruckElectricIcon />
                    </div>
                    <div className="mb-3">
                        <p className="font-semibold">Be patient, package on deliver!</p>
                    </div>
                </div>
                <p className="grid grid-cols-3 text-sm">
                    <div className="flex gap-1 items-center pl-2">
                        <p className="text-[12px]">Coffee Store</p>
                        <TruckIcon />
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                        <span className="h-1 w-20 bg-gray-400 rounded-full"></span>
                        <span className="h-1 w-20 bg-gray-400 rounded-full"></span>
                        <span className="h-2 w-2 bg-gray-400 rounded-full"></span>
                    </div>
                    <div className="flex gap-1 items-center justify-end pr-2">
                       <MapPin /> <p className="text-[12px]">Your Location</p> 
                    </div>
                    </p>
                <div className="flex py-4">
                    <Progress value={50} className="h-3 bg-gray-300 [&>div]:bg-amber-700 [&>div]:rounded-full" />
                </div>
            </div>
            <div className="border border-1 bg-gray-100 rounded-xl p-3 px-4">
                <div>
                    <Truck />
                </div>
                <div className="mt-10">
                    <div>
                        <div className="text-[13px] text-muted-foreground ">
                            Estimated Arrival
                        </div>
                        <div className="font-semibold text-lg">
                            9 July 2024
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-1 bg-gray-100 rounded-xl p-3 px-4">
                <div>
                    <Timer />
                </div>
                <div className="mt-10">
                    <div>
                        <div className="text-[13px] text-muted-foreground ">
                            Delivered In
                        </div>
                        <div className="font-semibold text-lg">
                            3 Days
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder;