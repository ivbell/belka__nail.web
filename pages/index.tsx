import type { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/common/Container";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container>Home page</Container>
    </MainLayout>
  );
};

export default Home;
