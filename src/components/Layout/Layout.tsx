import { Fragment } from "react" // [TODO] Check Fragment docs on react.dev
import MainHeader from "./MainHeader"
import ListWrapper from "../UI/list-wrapper"
import List from "../UI/Slider"

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
