"use client";
import { Button } from "@/components/ui/button";
import { Image, Settings, X } from "lucide-react";
import React, { useState } from "react";
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { Block } from "@blocknote/core";
import axios from "axios";

const AddDoc = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const editor = useCreateBlockNote();

  const saveThis = async () => {
    console.log("json", editor.document);
    const payload = {
      content: JSON.stringify(editor.document),
      coverImage: "hello",
      title: "newtitle",
      userId: "ceed3d48-ecd9-494b-bf84-d207adbf71e7",
    };
    const data = await axios.post("/api/doc", payload);
    console.log("resonse", data);
  };
  return (
    <div className="  w-full h-full flex flex-col">
      {/* Image Cover */}
      <div className="w-full border-b  h-96 relative  ">
        <div className="w-full h-full flex items-center justify-center">
          <div className=" text-5xl text-gray-300  font-medium ">
            Cover Image
          </div>
          <div className="absolute w-full h-full  flex justify-end items-end pr-4 pb-4">
            <div className="flex">
              <Button className="mr-2" size={"sm"}>
                <Image className="mr-1 h-4 w-4 " />
                Add Cover
              </Button>
              <Button className="" size={"sm"}>
                <X className="mr-1 h-4 w-4 " />
                Remove Cover
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="m-5 my-2">
        <div>
          <Button>Add Title And Category</Button>
        </div>
      </div>

      <div className="h-full px-5 border rounded-lg mx-5 py-5 mb-2 overflow-auto">
        <BlockNoteView
          theme={"light"}
          editor={editor}
          className="min-h-full"
          style={{ height: "100%" }}
        />
      </div>

      <div className="flex justify-end items-center mb-2 mr-5 ">
        <Button className="w-40 " onClick={saveThis}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default AddDoc;
