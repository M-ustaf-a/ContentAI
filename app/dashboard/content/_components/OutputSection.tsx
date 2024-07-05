import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface props{
  aiOutput:string;
}

function OutputSection({aiOutput}:props) {
    const editorRef:any=useRef();

    useEffect(()=>{
      const editorInstance=editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }, [aiOutput])
  return (
    <div className="bg-white shadow-lg border rounded-lg">
        <div className="flex justify-between items-center p-5">
            <h2 className="font-medium text-lg">Your Result</h2>
            <Button onClick={()=>navigator.clipboard.writeText(aiOutput)}><Copy className="w-4 h-4"/></Button>
        </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here!"
        height="440px"
        initialEditType="markdown"
        useCommandShortcut={true}
        onChange={()=>console.log(editorRef.current.getInstance().getMarkdown)}
      />
    </div>
  );
}

export default OutputSection;
