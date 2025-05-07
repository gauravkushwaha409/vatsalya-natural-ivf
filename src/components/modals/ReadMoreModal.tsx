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
          className="p-0 hover:bg-transparent hover:text-primary-500 cursor-pointer"
        >
          {buttonLabel}
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
