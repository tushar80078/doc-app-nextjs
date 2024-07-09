"use client";

import { useModal } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const SignInModal = () => {
  const { isOpen, type, closeModal } = useModal();
  const isModalOpen = isOpen && type === "signIn";

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: "/auth/dashboard",
    });
  };

  if (!isMounted) {
    return null;
  }
  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6 pb-8">
          <DialogTitle className="text-2xl  font-bold">Sign In</DialogTitle>
          <DialogDescription className="text-lg">
            to continue to platform
          </DialogDescription>
          {/* ==> Google Login */}
          <div className="pt-5">
            <div className=" w-full  gap-y-3 flex flex-col  ">
              <Button
                size={"lg"}
                variant={"outline"}
                onClick={() => {
                  onClick("google");
                }}
                className="w-full  justify-start"
              >
                <FcGoogle className="h-8 w-8" />
                <span className="pl-5 text-slate-600 md:text-[17px]">
                  {" "}
                  Continue with Google
                </span>
              </Button>
              <Button
                size={"lg"}
                variant={"outline"}
                onClick={() => {}}
                className="w-full  justify-start"
              >
                <FaGithub className="h-8 w-8" />
                <span className="pl-5 text-slate-600 md:text-[17px]">
                  {" "}
                  Continue with Github
                </span>
              </Button>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SignInModal;
