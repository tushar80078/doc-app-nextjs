"use client";
import { useModal } from "@/hooks/use-modal-store";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import axios from "axios";
import { useEffect } from "react";

interface LoginCardInterface {
  title: string;
  description: string;
}

const LoginCard = ({ title, description }: LoginCardInterface) => {
  const { openModal } = useModal();

  return (
    <Card className="flex items-center justify-center flex-col">
      <CardHeader className="flex items-center justify-center">
        <CardTitle className="md:text-2xl sm:text-2xl text-lg text-center">
          {title}
        </CardTitle>
        <CardDescription className="sm:text-[15px] text-center text-[13px]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-full md:px-20 sm:px-20">
        <Button
          className="h-12 w-full flex"
          onClick={() => openModal("signIn")}
        >
          Sign In
        </Button>
      </CardContent>
      <CardFooter className="">
        <p className="sm:text-[15px] text-center text-[13px] ">
          Copyrights 2022 . All Rights Reserved
        </p>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;
