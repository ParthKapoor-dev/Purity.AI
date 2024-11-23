"use client";

import { X } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function CloseModal() {

  const router = useRouter()
  function handleClick() {
    router.back();
  }

  return (
    <Button className="h-6 w-6 p-0 rounded-md" variant="secondary" aria-label="close modal" onClick={handleClick}>
      <X className="h-4 w-4" />
    </Button>
  )
}