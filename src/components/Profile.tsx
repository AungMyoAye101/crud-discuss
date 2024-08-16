"use client";

import { useSession } from "next-auth/react";

const Profile = () => {
  const session = useSession();
  if (session.data?.user) {
    return <div>from client : user is sign in</div>;
  } else {
    return <div>From client : user is NOT sign in</div>;
  }
};

export default Profile;
