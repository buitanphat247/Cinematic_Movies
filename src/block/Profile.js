import React from "react";

const Profile = (props) => {
  if (props.profile_path)
    return (
      <div className="bg-[#292f3b] rounded-md flex gap-x-2 items-center p-1">
        <div className="w-[100px] h-[100px] overflow-hidden rounded-md block">
          <img
            src={`https://image.tmdb.org/t/p/w500/${props.profile_path}`}
            alt="Not found"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    );
};

export default Profile;
