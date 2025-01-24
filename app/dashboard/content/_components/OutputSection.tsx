import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface OutputSectionProps {
  aiOutput: string;
}

function OutputSection({ aiOutput }: OutputSectionProps) {
  const editorRef = useRef<Editor>(null);

  useEffect(() => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    navigator.clipboard.writeText(aiOutput);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2 className="font-medium text-lg">Your Result</h2>
        <Button onClick={handleCopy}>
          <Copy className="w-4 h-4" />
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your result will appear here!"
        height="440px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
}

export default OutputSection;
