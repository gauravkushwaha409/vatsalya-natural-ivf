import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ReadMoreModalProps {
  text: string;
  title?: string;
  buttonLabel?: string;
  characterName?: string;
}
const ReadMoreModal: React.FC<ReadMoreModalProps> = ({
  title = "Details",
  buttonLabel = "Read More",
  characterName = "",
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="p-0 hover:bg-transparent  !gap-0.5 hover:text-primary-500 text-[13px] leading-[120%] tracking-[-2%] cursor-pointer"
        >
          {buttonLabel}
          <ChevronRight className="" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{characterName}</DialogTitle>
          <DialogDescription>
            <div
              className="text-text-500 typography-paragraph-regular mt-2"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReadMoreModal;
