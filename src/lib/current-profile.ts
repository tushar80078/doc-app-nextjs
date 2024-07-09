import { db } from "@/lib/db";

export const currentProfile = async (email: string) => {
  if (!email) {
    return null;
  }

  const profile = await db.user.findUnique({
    where: {
      email,
    },
  });

  return profile;
};
