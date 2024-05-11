import { Box, Card, CardBody, Heading, Skeleton, SkeletonText, Stack, StackDivider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const UserCardSkeleton = () => {
  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Username
            </Heading>
            <Text pt="2" fontSize="sm">
              <SkeletonText />
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email
            </Heading>
            <Text pt="2" fontSize="sm">
              <SkeletonText />
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default UserCardSkeleton;
