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
  const [isFavorite, setIsFavorite] = useState(false);

  if (!selectedItem) return null;

  return (
    <Dialog
      open={isOpen}
      handler={onClose}
      size="xl"
      className="max-h-[85vh] max-w-[50vw] mx-auto"
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
            color={isFavorite ? "red" : "blue-gray"}
            onClick={() => setIsFavorite((cur) => !cur)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          </IconButton>
        </div>
      </DialogHeader>
      <DialogBody className="overflow-y-auto max-h-[70vh] px-4">
        <div className="grid grid-cols-1 gap-4">
          {selectedItem.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg object-cover"
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
