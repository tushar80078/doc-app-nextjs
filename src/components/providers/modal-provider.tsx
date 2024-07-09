"use client";
import { useEffect, useState } from "react";

import SignInModal from "@/components/modals/sign-in-modal";

export const MOdalProvider = () => {
  const [mounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <SignInModal />
    </>
  );
};
