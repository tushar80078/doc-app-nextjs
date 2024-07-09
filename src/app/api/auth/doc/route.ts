import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const userData = await req.json();
    console.log("user", userData);

    const reso = await db.document.create({
      data: { ...userData },
    });

    // const isUserExist = await getUserByEmailId(userData?.email);

    // if (isUserExist) {
    //   return NextResponse.json({
    //     success: true,
    //     message: "User Added Already Exist",
    //     data: isUserExist,
    //   });
    // }

    // const addUser = await addUserProfile(userData);

    // if (addUser) {
    //   return NextResponse.json({
    //     success: true,
    //     message: "User Added",
    //     data: addUser,
    //   });
    // }

    // return NextResponse.json({
    //   success: false,
    //   message: "Something went wrong",
    // });
    return NextResponse.json({
      message: "done",
      data: reso,
    });
  } catch (error) {
    console.log("[Channels Post]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // const userData = await req.json();
    // console.log("user", userData);

    // const reso = await db.document.create({
    //   data: { ...userData },
    // });

    // const isUserExist = await getUserByEmailId(userData?.email);

    // if (isUserExist) {
    //   return NextResponse.json({
    //     success: true,
    //     message: "User Added Already Exist",
    //     data: isUserExist,
    //   });
    // }

    // const addUser = await addUserProfile(userData);

    // if (addUser) {
    //   return NextResponse.json({
    //     success: true,
    //     message: "User Added",
    //     data: addUser,
    //   });
    // }

    // return NextResponse.json({
    //   success: false,
    //   message: "Something went wrong",
    // });
    console.log("0--------------------------------");
    return NextResponse.json({
      message: "done",
    });
  } catch (error) {
    console.log("[Channels Post]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
