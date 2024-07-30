"use client";

import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

// Define types for form input data
interface FormData {
  [key: string]: string;
}

// Define component props interface
interface FormSectionProps {
  selectedTemplates?: TEMPLATE;
  userFormInput: (data: FormData) => void;
  loading: boolean;
}

function FormSection({ selectedTemplates, userFormInput, loading }: FormSectionProps) {
  const [formData, setFormData] = useState<FormData>({});

  // Handle form submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

  // Handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white sm:w-full">
      {selectedTemplates?.icon && (
        <Image
          src={selectedTemplates.icon}
          alt="Template icon"
          width={70}
          height={70}
        />
      )}
      <h2 className="font-bold text-2xl mb-2 text-primary">
        {selectedTemplates?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplates?.desc}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplates?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7" key={index}>
            <label className="font-bold">{item.label}</label>
            {item.field === "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field === "textarea" ? (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
