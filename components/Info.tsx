import { useRef } from "react";
import {
  IconButton,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

export const Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="info"
        icon={<InfoOutlineIcon w={8} h={8} />}
        position="fixed"
        top="30"
        right="30"
        colorScheme="transparent"
      />
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>How does it work</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Click on the house that is todays current date, just in a real
            advent calendar. Enjoy your mystery activity with family and
            friends.
          </AlertDialogBody>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
