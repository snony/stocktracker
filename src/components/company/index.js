import React from "react";
import ChartContainer from "./chart";
import NewsContainer from "./news";
import OverViewContainer from "./overview";
import Peers from "./peers";
import StatsContainer from "./stats";

/**
 * TODO DOUBLE CHECK IN CASE WE CANNOT FETCH THE DATA
 * 11/09/2018
 * ML, TL
 */

const ComponentTitle = ({ title }) => <h3>{title}</h3>;

const CompanyInfo = props => {
  const symbol = props.symbol;

  return (
    <div>
      <ComponentTitle title="Historical Data" />
      <ChartContainer symbol={symbol} />
      <ComponentTitle title="Latest News" />
      <NewsContainer symbol={symbol} />
      <ComponentTitle title="Key Stats" />
      <StatsContainer symbol={symbol} />
      <ComponentTitle title="Company Overview" />
      <OverViewContainer symbol={symbol} />
      <ComponentTitle title="Top Peers" />
      <Peers symbol={symbol} />
    </div>
  );
};

export default CompanyInfo;
