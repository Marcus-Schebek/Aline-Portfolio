import React, { useState } from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Avatar,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";

const ModalWithImage = ({ isOpen, onClose, selectedItem }) => {

  if (!selectedItem) return null;

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="xl"
      className="max-h-[85vh] max-w-[50vw] mx-auto mt-12"
    >
      <DialogHeader className="justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            size="sm"
            variant="circular"
            alt={selectedItem.title}
            src={selectedItem.profile}
          />
          <div className="-mt-px flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {selectedItem.title}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs font-normal"
            >
              @{selectedItem.author || "author"}
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IconButton
            variant="text"
            size="sm"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#000"
              className="h-8 w-8"
            >
              <path fillRule="evenodd"
              d="M6.225 6.225a.75.75 0 011.06 0L12 10.94l4.715-4.715a.75.75 0 111.06 1.06L13.06 12l4.715 4.715a.75.75 0 11-1.06 1.06L12 13.06l-4.715 4.715a.75.75 0 01-1.06-1.06L10.94 12 6.225 7.285a.75.75 0 010-1.06z"
              clipRule="evenodd"/>
            </svg>
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className="overflow-y-auto max-h-[70vh] px-4">
        <div className="grid grid-cols-1">
          {selectedItem.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          ))}
        </div>
      </DialogBody>
      <DialogFooter className="justify-between">
        <Button
          size="sm"
          variant="outlined"
          color="blue-gray"
          onClick={onClose}
        >
          Fechar
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ModalWithImage;
