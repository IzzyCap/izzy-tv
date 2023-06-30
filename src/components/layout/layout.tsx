import { Fragment } from "react" // [TODO] Check Fragment docs on react.dev
import MainHeader from "./main-header"
import ListWrapper from "../ui/list-wrapper"
import List from "../ui/list"

interface LayoutProps {
  children: React.ReactNode,
}

const Layout:React.FC<LayoutProps> = ({children}: LayoutProps) => {

  return (
    <Fragment>
      <div>
        <MainHeader/>
      </div>
      <ListWrapper>
        <div>Hi</div>
        <List category="gratis-la-mejor-seleccion-de-peliculas"/>
      </ListWrapper>
    </Fragment>
  )
}

export default Layout
