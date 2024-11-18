// Props for the ProfilePictureUploader component
interface ProfilePictureUploaderProps {
    onUpload: (fileUrl: string) => void;
}

// ProfilePictureUploader component: Only handles file upload logic
const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({ onUpload }) => {
    const handleFileUpload = async (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
  
      onUpload(data.fileUrl); // Pass the new file URL to the parent component
    };
  
    return (
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            handleFileUpload(e.target.files[0]);
          }
        }}
      />
    );
};

export default ProfilePictureUploader;