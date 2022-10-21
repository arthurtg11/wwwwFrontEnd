import {
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { UseSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = UseSidebarDrawer();
  const { asPath } = useRouter();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: true,
    xl: false,
  });

  if (asPath == "/" || asPath == "/login") return null;

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" >
      <SidebarNav />
    </Box>
  );
}
