import defaultProfile from "@/assets/default_profile.avif";
import { CheckCircle2 } from "lucide-react";
import EditProfile from "../edit-profile";

const ProfileLeft = () => {
    return (
        <div className="border-2 mx-10 sm:mx-0 sm:w-[400px] rounded-xl shadow-xl flex flex-col">
            <div className="border-b-1">
                <img alt="Default Profile" src={defaultProfile} />
            </div>
            <div className="p-4">
                <div className="flex justify-between">
                    <div className="font-bold">
                        My Profile
                    </div>
                    <div className="text-sm text-gray-500 text-right">
                        <div>
                            Account Created: 2025
                        </div>
                        <div className="text-sm text-gray-400">
                            ammanrizwan_47
                        </div>
                    </div>
                </div>
                
                <div className="flex justify-between my-2 border-b-1 outline-b-2 outline-offset-4 pb-2">
                    <div>Amman Rizwan</div>

                    <div>+91 1234567890</div>
                </div>

                    <div className="flex justify-between pt-6 border-b-1 outline-b-2 outline-offset-4 pb-2">
                    <div>Ammanrizwan00007@gmail.com</div>
                </div>

                <div className="flex gap-2 items-center pt-6">
                    <div className="text-sm">
                        Email Verification
                    </div>
                    <div>
                        <CheckCircle2 size={18} className="text-green-300" />
                    </div>
                </div>
            </div>
            <div className="p-4">
                <EditProfile />
            </div>
        </div>
    )
}

export default ProfileLeft;