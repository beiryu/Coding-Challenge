import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
