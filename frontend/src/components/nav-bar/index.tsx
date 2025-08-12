import { Bell, Coffee, Home, LogOut, Package, Search, User, User2 } from "lucide-react"
import profile from "@/assets/profile.png";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";

export const WebNavBar = () => {
    return (
        <div className="flex gap-10 justify-between items-center p-3 px-5 bg-red-200 border-b border-b-2">
            <div className="border p-2 rounded-full border-black">
                <Coffee className="cursor-pointer" size={18} />
            </div>
            <div className="flex justify-center items-center gap-5">
                <div className="relative  hidden sm:flex">
                    <input className="border border-2 rounded-full w-[230px] h-[35px] pl-10 focus:outline-none pr-10 placeholder:text-gray-400" placeholder="Search.." />
                    <div className="absolute top-[6px] left-3 ">
                            <Search size={22} className="translate rotate-90 text-gray-300" />
                    </div>
                </div>
                <div className="hidden sm:flex">
                    <Button variant={"ghost"}>Wishlist</Button>
                </div>
                <div className="hidden sm:flex">
                    <Button variant={"outline"}>Orders</Button>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <div className="relative">
                            <Bell size={25} />
                            <div className="absolute top-0 right-1 w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mr-4">
                        <DropdownMenuLabel>
                            <a  className="flex gap-2 items-center select-none cursor-pointer" href="/profile">
                                My Account
                            </a>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuLabel className="text-red-500 flex gap-2 items-center select-none cursor-pointer">
                            Logout
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
        link: "/",
    },
    {
        logo: <User2 size={30} />,
        link: "/profile",
    },
]

export const MovNavBar = () => {
    return (
        <div className="flex gap-5 justify-between p-4 px-10 items-center sm:hidden border-t-2 bg-blue-200 fixed w-full bottom-0">
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