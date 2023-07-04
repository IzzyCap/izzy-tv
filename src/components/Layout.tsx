import { Fragment } from "react" // [TODO] Check Fragment docs on react.dev
import MainHeader from "./MainHeader"
import ListWrapper from "./SliderWrapper"
import { styled } from "styled-components"

interface LayoutProps {
  children: React.ReactNode,
}

const Layout:React.FC<LayoutProps> = ({children}: LayoutProps) => {

  return (
    <Fragment>
      <div>
        <MainHeader/>
      </div>
      <ListWrapper/>
    </Fragment>
  )
}

export default Layout
