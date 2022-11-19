import { GetStaticProps, NextPage } from "next";
import { PortfolioIndex } from "../../components/component/portfolios/portfolio/PortFolioIndex";
import { dbStackIcons } from "../../contents/icons";
import { portfolio } from "../../contents/portfolio";
import { IIcon, IProject } from "../../types/types";

const Portfolio: NextPage = ({
  data,
}: {
  data: { portfolios: IProject[]; icons: IIcon[] };
}) => {
  return <PortfolioIndex projects={data.portfolios} icons={data.icons} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const portFolioRequest = portfolio.map((item) => {
    return item;
  });
  const response = portFolioRequest;
  const iconRequest = dbStackIcons.map((item) => {
    return item;
  });
  const iconResponse = iconRequest;
  return {
    props: {
      data: {
        portfolios: response,
        icons: iconResponse,
      },
    },
  };
};

export default Portfolio;
