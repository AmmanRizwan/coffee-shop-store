import NoCoffeeIcon from "@/assets/no-coffee.png";
import { Button } from "@/components/ui/button";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center text-center justify-center min-h-[80vh] py-8">
            <img
            src={NoCoffeeIcon}
            alt="No Coffee"
            className="w-[220px] mb-8"
            />
            <h1 className="text-3xl sm:text-6xl mb-3 text-[#7B3F00] font-bold">404 Not Found</h1>
            <p className="text-xl sm:text-2xl text-gray-700 mt-0">Oops! No Coffee Found Here Go Back.</p>
            <p className="sm:text-lg text-sm text-gray-400 mt-2">The page you're looking for doesn't exist.</p>
            <a href="/profile" className="mt-4">
                <Button className="px-10 cursor-pointer">Go Back</Button>
            </a>
        </div>
    )
}

export default NotFound;