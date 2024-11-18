import { useState } from "react";

import ProfilePictureUploader from "./ProfilePictureUploader";
import UserProfile from "./UserProfile";

import { UserProfileProps } from "./types";

// Parent component combining both responsibilities
const UserProfilePage: React.FC<UserProfileProps> = ({ user }) => {
    const [profilePicture, setProfilePicture] = useState(user.profilePicture);
  
    return (
      <div>
        <UserProfile user={{ ...user, profilePicture }} />
        <ProfilePictureUploader onUpload={(fileUrl) => setProfilePicture(fileUrl)} />
      </div>
    );
  };
  
  export default UserProfilePage;