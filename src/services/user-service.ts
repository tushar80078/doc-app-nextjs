import { db } from "@/lib/db";

// --------------- Get User By Email Id -----------------------

const getUserByEmailId = async (emailId: string) => {
  const currentUser = await db.user.findUnique({
    where: {
      email: emailId,
    },
  });

  return currentUser;
};

const addUserProfile = async ({
  id,
  email,
  name,
  image,
}: {
  id: string;
  email: string;
  name: string;
  image: string;
}) => {
  const addUserProfile = await db.user.create({
    data: {
      id,
      email,
      name,
      image,
    },
  });

  return addUserProfile;
};

export { getUserByEmailId, addUserProfile };
