import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "../store/authStore";
import { createOrGetUser } from "./../services/userService";

const RightSideBar = () => {
  const { userProfile, addUser } = useAuthStore();

  return (
    <div>
      {/* authetication button */}
      <div className="p-4 border-b border-gray-200">
        {userProfile ? (
          <div className="flex gap-4 justify-start items-center">
            <div className="w-12 h-12 rounded-full bg-green-500">
              <img
                src={userProfile?.image}
                alt="userProfile"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <p>{userProfile?.userName}</p>
          </div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => createOrGetUser(response, addUser)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
