import styled from "styled-components";
import { useAppSelector } from "../store/store";

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: block;
  height: 88px;
  padding: 0px 64px;
  background-color: black;
  z-index: 1000;
`;

const HeaderLogo = styled.img`
  width: 114px;
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const MainHeader: React.FC = () => {
  const activeMovie = useAppSelector((state: any) => state["mainSlice"].activeMovie);

  const renderTilte = () => {
    if (!activeMovie) {
      return (
        <a>
          <HeaderLogo src="/rakuten/logo.svg" alt="rakuten logo"></HeaderLogo>
        </a>
      );
    }

    return (<h1>{activeMovie.data.title}</h1>)
  }

  return (
    <header>
      <MenuWrapper>
        <Menu>
          {renderTilte()}
        </Menu>
      </MenuWrapper>
    </header>
  );
};

export default MainHeader;
