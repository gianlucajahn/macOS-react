import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import toggleFullscreen from "../../utils/helpers/toggleFullscreen";

export interface ChakraAlertProps {
  isOpen: any;
  cancelRef: any;
  onClose: any;
}

export default function ChakraAlert(props: ChakraAlertProps) {
  const { isOpen, cancelRef, onClose } = props;

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Enter Fullscreen
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure you want to enter fullscreen mode? You can exit via ESC
            or by clicking the fullscreen button again.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={(e) => {
                onClose();
                toggleFullscreen();
              }}
              ml={3}
            >
              Enter
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
