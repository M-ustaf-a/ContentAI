import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

// Define the props interface
interface TemplateListSectionProps {
  userSearchInput?: string; // Optional prop
}

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: TemplateListSectionProps) {
  const [templateList, setTemplateList] = useState<TEMPLATE[]>(Templates);

  useEffect(() => {
    const filterData = userSearchInput
      ? Templates.filter((item) =>
          item.name.toLowerCase().includes(userSearchInput.toLowerCase())
        )
      : Templates;

    setTemplateList(filterData);
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 m-2 p-5">
      {templateList.map((item) => (
        <TemplateCard
          key={item.slug} // Unique key for each item
          {...item}       // Spread item properties
        />
      ))}
    </div>
  );
}

export default TemplateListSection;
