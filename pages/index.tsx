import { HomeIndex } from "../components/component/home/Home.index";
import { GetStaticProps, NextPage } from "next";
import { IIcon } from "../types/types";
import { dbStackIcons } from "../contents/icons";

const Home: NextPage = ({ data }: { data: { icons: IIcon[] } }) => {
  return (
    <div>
      <HomeIndex icons={data.icons} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const request = dbStackIcons.map((item) => {
    return item;
  });
  const response = request;

  return {
    props: {
      data: {
        icons: response,
      },
    },
  };
};

export default Home;
