import { Fragment } from "react";
import MainHeader from "./MainHeader";

interface LayoutProps {
  children: React.ReactNode,
}

const Layout:React.FC<LayoutProps> = ({children}: LayoutProps) => {

  return (
    <Fragment>
      <div>
        <MainHeader/>
      </div>
      { children }
    </Fragment>
  )
}

export default Layout
