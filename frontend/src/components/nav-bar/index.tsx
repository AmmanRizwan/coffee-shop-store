import { Bell, Coffee, Home, LogOut, Package, Search, User, User2, X } from "lucide-react"
import profile from "@/assets/profile.png";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import CoffeeShopImage from "@/assets/coffee_shop.png";

export const WebNavBar = () => {
    return (
        <div className="flex gap-10 justify-between items-center p-3 px-5 bg-white border-b border-b-2">
            <div className="w-25">
                <img alt="Coffee Shop" src={CoffeeShopImage} className="w-25" />
                {/* <Coffee className="cursor-pointer" size={18} /> */}
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="relative  hidden sm:flex">
                    <input className="border border-2 rounded-full w-[160px] md:w-[230px] h-[35px] pl-10 focus:outline-none pr-10 placeholder:text-gray-400" placeholder="Search.." />
                    <div className="absolute top-[6px] left-3 ">
                            <Search size={22} className="translate rotate-90 text-gray-300" />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <Button variant={"ghost"}>Wishlist</Button>
                </div>
                <div className="hidden sm:flex">
                    <a href="/orders">
                        <Button variant={"outline"}>Orders</Button>
                    </a>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <div className="relative cursor-pointer">
                            <Bell size={25} />
                            <div className="absolute top-0 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-10 sm:mr-25">
                        <DropdownMenuLabel>
                            <div className="text-sm font-bold select-none">
                                Notification
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel>
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://www.svgrepo.com/show/15477/coin.svg"
                                    alt="Coin"
                                    className="w-5 h-5"
                                    style={{ minWidth: 20, minHeight: 20 }}
                                    loading="lazy"
                                />
                                <span className="text-green-600">+50 Loyalty Points</span>
                                <span className="cursor-pointer hover:bg-gray-300 hover:rounded-full p-1"><X size={15} /></span>
                            </div>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="w-8 h-8 hidden sm:flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none">
                            <img src={profile} className="w-8 h-8 cursor-pointer" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-4">
                            <DropdownMenuLabel>
                                <a  className="flex gap-2 items-center select-none cursor-pointer" href="/profile">
                                    <User size={18} /> My Account
                                </a>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="text-red-500 flex gap-2 items-center select-none cursor-pointer">
                                <LogOut size={18} /> Logout
                            </DropdownMenuLabel>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

const navbar_menus = [
    {
        logo: <Home size={30} />,
        link: "/",
    },
    {
        logo: <Search size={30} />,
        link: "/",
    },
    {
        logo: <Package size={30} />,
        link: "/orders",
    },
    {
        logo: <User2 size={30} />,
        link: "/profile",
    },
]

export const MovNavBar = () => {
    return (
        <div className="flex gap-5 justify-between p-4 px-10 items-center sm:hidden border-t-2 bg-white fixed w-full bottom-0">
            {
                navbar_menus.map((menu, index) => {
                    return (
                        <div key={index} >
                            <a href={menu.link}>
                                {menu.logo}
                            </a>
                        </div>
                    )
                })
            }
        </div>
    )
}