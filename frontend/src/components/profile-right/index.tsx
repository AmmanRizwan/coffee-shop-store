import { CoinsIcon, InfoIcon } from "lucide-react";
import EditAddress from "../edit-address";

const ProfileRight = () => {
    return (
        <div className="mx-10 sm:mx-0 sm:w-[400px] flex flex-col gap-5">
            <div className="rounded-xl border border-2 p-3 px-6 shadow-xl">
                <div className="text-sm">My Address</div>
                <div className="my-4 flex flex-col gap-2">
                    <span className="text-lg font-semibold">123 Coffee Lane</span>
                    <div className="text-sm text-gray-500">Brewtown, CA 90210</div>
                    <div className="text-xs text-gray-400">United States</div>
                </div>
                <div className="py-3">
                    <EditAddress />
                </div>
            </div>
            <div className="rounded-xl border border-2 p-3 px-6 pb-10 shadow-xl">
                <div className="text-sm font-bold">Your Bills</div>
                <div className="flex gap-5 flex-col justify-center items-center py-5">
                    <div>
                        <InfoIcon size={40} className="text-red-500" />
                    </div>
                    <div className="text-lg font-bold">
                        No Bills Right Now
                    </div>
                </div>
            </div>
                <div className="rounded-xl border border-2 p-3 px-6 pb-10 shadow-xl bg-yellow-300">
                <div className="text-sm font-bold">Your Loyalty Point</div>
                <div className="flex gap-5 flex-col justify-center items-center py-5">
                    <div>
                        <CoinsIcon className="text-yellow-500" size={40} />
                    </div>
                    <div className="text-lg font-bold">
                        Current Point: 30
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileRight;