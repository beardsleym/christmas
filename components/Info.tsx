import { Image, Center, Heading, Box } from "@chakra-ui/react";
import { useRef } from "react";
import {
  Button,
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
import { QuestionOutlineIcon } from "@chakra-ui/icons";

export const Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="info"
        icon={<QuestionOutlineIcon w={8} h={8} />}
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
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to discard all of your notes? 44 words will be
            deleted.
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme="red" ml={3}>
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
