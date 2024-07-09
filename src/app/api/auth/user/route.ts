// import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { getUserByEmailId, addUserProfile } from "@/services/user-service";

export async function POST(req: Request) {
  try {
    const userData = await req.json();

    const isUserExist = await getUserByEmailId(userData?.email);

    if (isUserExist) {
      return NextResponse.json({
        success: true,
        message: "User Added Already Exist",
        data: isUserExist,
      });
    }

    const addUser = await addUserProfile(userData);

    if (addUser) {
      return NextResponse.json({
        success: true,
        message: "User Added",
        data: addUser,
      });
    }

    return NextResponse.json({
      success: false,
      message: "Something went wrong",
    });
  } catch (error) {
    console.log("[Channels Post]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    // const profile = await currentProfile();
    // const {name, type} = await req.json();
    // const{searchParams} = new URL(req.url);
    // const serverId = searchParams.get("serverId");
    // if(!profile){
    //     return new NextResponse("Unauthorized",{status:401});
    // }
    // if(!serverId){
    //     return new NextResponse("Server Id Missing",{status:400});
    // }
    // if(name=='general'){
    //     return new NextResponse("Name cannot be general",{status:400})
    // }
    // const server= await db.server.update({
    //     where:{
    //         id: serverId,
    //         members:{
    //             some:{
    //                 profileId: profile.id,
    //                 role:{
    //                     in:[MemberRole.ADMIN , MemberRole.MODERATOR]
    //                 }
    //             }
    //         }
    //     },
    //     data:{
    //         channels:{
    //             create:{
    //                 profileId:profile.id,
    //                 name,
    //                 type
    //             }
    //         }
    //     }
    // })
    return NextResponse.json("done");
  } catch (error) {
    console.log("[Channels Post]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
