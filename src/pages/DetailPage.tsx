import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { fetchMovie } from '../helpers/endpoint';

const Overly = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 300;
  background-color: rgb(0, 0, 0);
  /* transition: opacity 0.25s ease-in 0s; */
  opacity: 0.85;
`

const DetailsContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  overflow-y: auto;
  z-index: 400;
`

const DetailsCard = styled.div`
  position: absolute;
  width: 100%;
  min-height: calc(100% - 32px);
  top: 32px;
  max-width: 636px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  background-color: rgb(16, 16, 16);
  transform: translateY(0px);
  opacity: 1;
  transition: transform 0.3s ease-out 0s, opacity 0.3s ease-out 0s;
`

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`

const ImgContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

const BannerImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  filter: brightness(70%);
  transition: opacity 0.15s ease-out 0.35s;
  opacity: 1;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: flex-start;
  top: 0px;
  left: 0px;
  width: 60%;
  height: 100%;
  padding: 24px;
`

const BannerTitle = styled.h2`
  line-height: 54px;
  margin: 0;
  font-family: RakutenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
`

const Container = styled.div`
  display: flex;
  padding: 24px;
`

const ButtonArea = styled.div`
  width: 40%;
  margin-right: 24px;
`

const TrailerButton = styled.a`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 100px;
  transition: all 0.15s ease-in-out 0s;
  min-height: 48px;
  min-width: 120px;
  padding: 0px 24px;
  background: rgb(240, 240, 240);
  font-family: RakutenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  color: rgb(0, 0, 0);
  width: 100%;
  &:hover {
    background: rgb(200, 200, 200);
  }
`

const ButtonText = styled.span`
  color: rgb(0, 0, 0);
  font-size: 1rem;
  font-weight: 700;
  font-family: RakutenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  margin-left: 12px;
`

const Description = styled.div`
  width: 60%;
  transition: color 0.15s ease-out 0s;
  display: block;
  word-break: break-word;
  font-size: 1rem;
  font-family: RakutenSans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Oxygen, Cantarell, sans-serif;
  font-weight: normal;
  color: rgb(132, 133, 133);
  text-align: left;
  line-height: 24px;
`

// [TODO] Move CloseButton to component
const CloseButton = styled.a`
  position: absolute;
  top: 32px;
  right: 32px;
  z-index: 2;
  outline: none;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  padding: 5px;
  width: 32px;
  height: 32px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(240, 240, 240, 0.64);
`

export const DetailPage = () => {
  const { id } = useParams();

  const [movie, setMovie]: any = useState();

  // [TODO] catch if id is undefined and fetch request.
  useEffect(() => {
    fetchMovie(id || '')
      .then(response => response.json())
      .then(data => {
        setMovie(data)
      });
  }, []);

  return (
    <>
      <Overly/>
      <DetailsContainer>
        <DetailsCard>
          <CloseButton href='/'>
            <img src='/icons/close.svg'/>
          </CloseButton>
          <BannerContainer>
            <ImgContainer>
              <BannerImg src={movie?.data.images.snapshot || ''}/>
            </ImgContainer>
            <TextContainer>
              <BannerTitle>{movie?.data.title}</BannerTitle>
            </TextContainer>  
          </BannerContainer>
          <Container>
            <ButtonArea>
              <TrailerButton href={`/player/${id}`}>
                <img src='/icons/play.svg'/>
                <ButtonText>
                  Ver Tráiler
                </ButtonText>
              </TrailerButton>
            </ButtonArea>
            <Description>
              {movie?.data.plot}
            </Description>
          </Container>
        </DetailsCard>
      </DetailsContainer>
    </>
  )
}

