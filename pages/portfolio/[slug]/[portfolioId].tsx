import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { PortfolioDetailsIndex } from "../../../components/component/portfolios/details/PortFolioDetailsIndex";
import { dbStackIcons } from "../../../contents/icons";
import { portfolio } from "../../../contents/portfolio";
import { IIcon, IProject } from "../../../types/types";

const Portfolio: NextPage = ({
  data,
}: {
  data: {
    portfolios: IProject;
    icons: IIcon[];
  };
}) => {
  return (
    <div>
      <PortfolioDetailsIndex projects={data.portfolios} icons={data.icons} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const portFolioRequest = portfolio.map((item) => item);
  const response = portFolioRequest;
  const paths = response.map((element) => {
    return {
      params: {
        slug: `${element.slug.toString()}`,
        portfolioId: `${element.id.toString()}`,
      },
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const portFolioRequest = portfolio.find(
    (item) => item.id.toString() === params.portfolioId
  );
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
    revalidate: 4,
  };
};

export default Portfolio;
