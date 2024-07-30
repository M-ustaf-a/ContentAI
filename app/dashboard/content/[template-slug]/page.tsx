"use client";

import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { chatSession } from "@/utils/AiModal";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";

interface Props {
  params: {
    "template-slug": string;
  };
}

function CreateContent({ params }: Props) {
  const selectedTemplate = Templates.find(
    (item) => item.slug === params["template-slug"]
  );
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();

  const generateAIContent = async (formData: Record<string, any>) => {
    setLoading(true);

    try {
      if (!selectedTemplate?.aiPrompt) {
        throw new Error("Selected template prompt is undefined");
      }

      const finalAIPrompt = `${JSON.stringify(formData)}, ${selectedTemplate.aiPrompt}`;
      const result = await chatSession.sendMessage(finalAIPrompt);

      const aiResponseText = await result?.response.text();
      setAiOutput(aiResponseText ?? "");

      await saveInDb(formData, selectedTemplate.slug, aiResponseText ?? "");
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const saveInDb = async (
    formData: Record<string, any>,
    slug: string,
    aiResponse: string
  ) => {
    try {
      const createdBy = user?.primaryEmailAddress?.emailAddress ?? "";
      const createdAt = moment().format("DD/MM/YYYY");

      if (!formData || !slug || !aiResponse || !createdBy) {
        throw new Error("One or more required fields are undefined");
      }

      const result = await db.insert(AIOutput).values({
        formData: JSON.stringify(formData),
        templateSlug: slug,
        aiResponse,
        createdBy,
        createdAt,
      });

      console.log("Database save result:", result);
    } catch (error) {
      console.error("Error saving data to the database:", error);
    }
  };

  return (
    <div className="p-3">
      <Link href="/dashboard">
        <div className="w-7 text-gray-400 hover:text-black">
          <ArrowLeft />
        </div>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
        <FormSection
          selectedTemplates={selectedTemplate}
          userFormInput={generateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
}

export default CreateContent;
