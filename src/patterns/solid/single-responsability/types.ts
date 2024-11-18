// Props for the UserProfile component
export interface UserProfileProps {
    user: {
      name: string;
      email: string;
      profilePicture: string;
    };
}

// Props for the ProfilePictureUploader component
export interface ProfilePictureUploaderProps {
    onUpload: (fileUrl: string) => void;
}