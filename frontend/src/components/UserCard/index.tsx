import { Box, Button, Card, CardBody, Heading, Stack, StackDivider } from "@chakra-ui/react";
import { User } from "../../hooks/useUsers";
import { Text } from "@chakra-ui/react";

interface Props {
  user: User;
  handleDeleteUser: (event: React.MouseEvent<HTMLButtonElement>, user: User) => void;
}

const UserCard = ({ user, handleDeleteUser }: Props) => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Last name
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.firstname}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Last name
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.lastname}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              {user.email}
            </Text>
          </Box>
          <Box>
            <Button colorScheme="red" variant="solid" onClick={(e) => handleDeleteUser(e, user)}>
              Delete
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCard;
