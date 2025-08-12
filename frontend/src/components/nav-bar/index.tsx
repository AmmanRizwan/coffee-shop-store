import { Bell, Coffee, Search } from "lucide-react"
import profile from "@/assets/profile.png";

export const WebNavBar = () => {
    return (
        <div className="flex gap-10 justify-between items-center p-3 px-5 bg-white border-b border-b-2">
            <div className="border p-2 rounded-full border-black">
                <Coffee className="cursor-pointer" size={18} />
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="relative">
                    <input className="border border-2 rounded-lg h-[35px] pl-5 ring:none pr-20" placeholder="Search" />
                    <div className="absolute top-[1px] right-0 rounded-lg bg-gray-300 px-5 py-1 cursor-pointer ">
                            <Search size={25} className="translate rotate-90  " />
                    </div>
                </div>
                <div>
                    Wishlist
                </div>
                <div>
                    Orders
                </div>
                <div className="relative">
                    <Bell size={25} />
                    <div className="absolute top-0 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
                </div>
                <div>
                    <img src={profile} className="w-8 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export const MovBar = () => {
    return (
        <div></div>
    )
}