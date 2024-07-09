"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { tabs } from "./paths";
import { cn } from "@/lib/utils";
import { Copyright, EllipsisVertical } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getSession } from "next-auth/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { signOut } from "next-auth/react";

const LeftNavbar = () => {
  const path = usePathname();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    image: "",
  });
  const router = useRouter();

  const getCurrentUser = async () => {
    const data = await getSession();

    if (data?.user) {
      setUserDetails({
        name: data.user.name || "",
        email: data.user.email || "",
        image: data.user.image || "",
      });
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div className="w-80 h-full bg-accent text-primary-foreground border-r  lg:flex flex-col hidden ">
      <div className="lg:flex align-center hidden items-center gap-2 py-4 px-4 border-b ">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="  text-sky-700 text-[15px] font-medium">
            Devlopers Doc
          </p>
          <p className="text-xs text-muted-foreground">Streamlining Tomorrow</p>
        </div>
      </div>

      {tabs.map((tab) => (
        <Button
          key={tab.path}
          className={cn(
            "flex w-full justify-start py-6 gap-2 text-[15px]   text-slate-800 mt-3 hover:bg-muted",
            path !== tab.path &&
              "text-gray-500 font-medium hover:text-gray-500 hover:bg-slate-100"
          )}
          variant={tab.path === path ? "secondary" : "ghost"}
          onClick={() => {
            router.push(tab.path);
          }}
        >
          {tab.icon}
          {tab.name}
        </Button>
      ))}
      <div className="mt-auto py-3 px-4 border-t flex text-slate-500 justify-center items-center gap-2">
        <div className="cursor-pointer  rounded-full  border-4 ">
          <Avatar className="h-8 w-8">
            <AvatarImage src={userDetails?.image} />
            <AvatarFallback>In</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col font-semibold text-sm">
          <span>{userDetails.name}</span>
          <span className="text-slate-400 font-medium text-xs">
            {userDetails.email}
          </span>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <div className="items-center ml-2 hover:bg-slate-100 py-2 cursor-pointer rounded-md">
              <EllipsisVertical className="h-6 w-6 text-slate-600" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80 " side="right">
            <div className="mt-auto py-1 px-1  flex text-slate-500 mb-4 items-center gap-2">
              <div className="cursor-pointer  rounded-full  border-4 ">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userDetails?.image} />
                  <AvatarFallback>In</AvatarFallback>
                </Avatar>
              </div>
              <div className="flex flex-col font-semibold text-sm">
                <span>{userDetails.name}</span>
                <span className="text-slate-400 font-medium text-xs">
                  {userDetails.email}
                </span>
              </div>
            </div>
            <Button
              className="w-full"
              onClick={() => {
                signOut();
              }}
            >
              SignOut
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default LeftNavbar;
