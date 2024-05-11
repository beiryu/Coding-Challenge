import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { User } from "./hooks/useUsers";
import NavBar from "./components/NavBar";
import UserGrid from "./components/UserGrid";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface UserQuery {
  user: User | null;
  searchText: string;
}

function App() {
  const [userQuery, setUserQuery] = useState<UserQuery>({} as UserQuery);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}></GridItem>
        </Show>
        <GridItem area="main">
          <UserGrid userQuery={userQuery}></UserGrid>
        </GridItem>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"colored"}
        transition={Slide}
      />
    </>
  );
}

export default App;
