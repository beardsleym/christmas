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
import { useTranslations } from "next-intl";
import { GetStaticPropsContext } from "next/types";

export const Info = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const t = useTranslations("Info");

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
          <AlertDialogHeader>{t("title")}</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>{t("body")}</AlertDialogBody>
          <AlertDialogFooter></AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}
