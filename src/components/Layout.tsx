import { Fragment } from "react";
import MainHeader from "./MainHeader";
import styled from 'styled-components';

interface LayoutProps {
  children: React.ReactNode,
}

const Content = styled.div`
  margin-top: 88px;
`

const Layout:React.FC<LayoutProps> = ({children}: LayoutProps) => {

  return (
    <Fragment>
      <div>
        <MainHeader/>
      </div>
      <Content>
        { children }
      </Content>
    </Fragment>
  )
}

export default Layout
