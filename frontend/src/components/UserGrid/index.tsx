import { Button, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { UserQuery } from "../../App";
import useUsers, { User } from "../../hooks/useUsers";
import UserCardContainer from "../UserCardContainer";
import UserCardSkeleton from "../UserCardSkeleton";
import UserCard from "../UserCard";
import userService from "../../services/user-service";
import { toast } from "react-toastify";
import UserCreatingModel from "../UserCreatingModal";

interface Props {
  userQuery: UserQuery;
}

const UserGrid = ({ userQuery }: Props) => {
  const { data, setData, error, setError, isLoading, setLoading } = useUsers(userQuery);
  const skeletons = [1, 2, 3];

  const handleDeleteUser = (_event: React.MouseEvent<HTMLButtonElement>, user: User): void => {
    setData((prevData) => {
      return prevData.filter((u) => user._id !== u._id);
    });

    setLoading(true);
    userService
      .delete(user._id)
      .then((res) => {
        setLoading(false);
        toast(res.data.message, { type: "success" });
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleExportCSV = () => {};

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <Stack direction="row" spacing={4} padding={"10px"} align="center">
        <UserCreatingModel />
        <Button colorScheme="teal" variant="ghost" onClick={handleExportCSV}>
          Export to CSV
        </Button>
      </Stack>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding="10px" spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <UserCardContainer key={skeleton}>
              <UserCardSkeleton />
            </UserCardContainer>
          ))}
        {!isLoading &&
          data &&
          data.map((user) => (
            <UserCardContainer key={user._id}>
              <UserCard user={user} handleDeleteUser={handleDeleteUser} />
            </UserCardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default UserGrid;
