import React, { useState } from "react";
import { GoogleLogin, googleLogout } from "@react-oauth/google";

const RightSideBar = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      {/* authetication button */}
      <div className="p-4 border-b border-gray-200">
        {user ? (
          <div>Logged in</div>
        ) : (
          <GoogleLogin
            onSuccess={(response) => console.log(response)}
            onError={() => console.log("Error")}
          />
        )}
      </div>
    </div>
  );
};

export default RightSideBar;
