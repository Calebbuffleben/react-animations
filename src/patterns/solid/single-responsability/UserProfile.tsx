import React, { useState } from 'react';

// Props for the UserProfile component
interface UserProfileProps {
  user: {
    name: string;
    email: string;
    profilePicture: string;
  };
}

// UserProfile component: Only displays user information
const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div>
      <img src={user.profilePicture} alt="Profile" />
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserProfile;