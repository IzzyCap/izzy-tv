import { Fragment } from "react";
import MainHeader from "./MainHeader";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Content = styled.div`
  position: absolute;
  top: 88px;
  width: 100%;
`;

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <div>
        <MainHeader />
      </div>
      <Content>{children}</Content>
    </Fragment>
  );
};

export default Layout;
