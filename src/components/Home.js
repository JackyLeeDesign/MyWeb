import React, { Fragment } from "react";
const TopInfo = React.lazy(() => import("./TopInfo"));
const SideIcon = React.lazy(() => import("./SideIcon"));
const MainContent = React.lazy(() => import("./mainContent/HomeContent"));
const AboutContent = React.lazy(() => import("./mainContent/AboutContent"));
const BottomInfo = React.lazy(() => import("./BottomInfo"));
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
const changePage = pageNum => {
  switch (pageNum) {
    case 0:
      return <MainContent />;
    case 1:
      return <AboutContent />;
    default:
      return <MainContent />;
  }
};
const Home = props => {
  const { changePageStore } = props;
  return (
    <Fragment>
      <TopInfo />
      <SideIcon />
      {changePage(changePageStore.page)}
      <BottomInfo />
    </Fragment>
  );
};
Home.propTypes = {
  // An object taking on a particular shape
  changePageStore: PropTypes.shape({
    page: PropTypes.number
  })
};
export default inject("changePageStore")(observer(Home));
