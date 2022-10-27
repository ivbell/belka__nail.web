import type { NextPage } from "next";
import MainLayout from "../components/layouts/MainLayout";
import Container from "../components/common/Container";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <div className="font-mono">123123</div>
        <div className="font-serif">
          asdad
        </div>
      </Container>
    </MainLayout>
  );
};

export default Home;
