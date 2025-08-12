import ProfileLeft from "../profile-left";
import ProfileRight from "../profile-right";

const Profile = () => {
    return (
        <div className="flex justify-center md:items-center md:flex-row flex-col gap-3 md:gap-10 py-5">
            <div>
                <ProfileLeft />
            </div>
            <div>
                <ProfileRight />
            </div>
        </div>
    )
}

export default Profile;