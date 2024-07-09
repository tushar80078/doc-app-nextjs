"use client";
import React, { useEffect, useState } from "react";
import { Avatar } from "../ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaHamburger, FaSearch } from "react-icons/fa";
import { getSession } from "next-auth/react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Label } from "../ui/label";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TopNavbar = () => {
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
    <div className="h-[9vh] flex fixed inset-y-0 w-full z-[49] border items-center justify-between px-5">
      <div className="p-2 hover:bg-gray-100 rounded-md transition delay-200 lg:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" value="Pedro Duarte" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input id="username" value="@peduarte" className="col-span-3" />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="lg:flex align-center hidden items-center gap-2">
        <Avatar className="h-10 w-10">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="">
          <p className="font-semibold  text-sky-700 text-lg">Developers Doc</p>
          <p className="text-xs text-muted-foreground">Streamlining Tomorrow</p>
        </div>
      </div>

      <div className="lg:flex hidden items-center relative lg:w-[600px] ">
        <Input
          className="rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
          placeholder="Search for a documentation"
        />
        <Button className="bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none">
          <FaSearch className=" h-4 w-4" />
        </Button>
      </div>

      <div className="cursor-pointer  rounded-full  border-4 ">
        <Avatar className="h-10 w-10">
          <AvatarImage src={userDetails?.image} />
          <AvatarFallback>In</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default TopNavbar;
