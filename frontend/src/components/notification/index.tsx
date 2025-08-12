import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

const Notification = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                Bell
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
    )
}

export default Notification;