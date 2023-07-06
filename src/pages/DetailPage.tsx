import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { fetchMovie } from "../utils/endpoint";
import { Link } from "react-router-dom";

const Overly = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 300;
  background-color: rgb(0, 0, 0);
  opacity: 0.85;
`;

const DetailsContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  overflow-y: hidden;
  z-index: 1000;
`;

const DetailsCard = styled.div`
  position: absolute;
  width: 100%;
  min-height: calc(100% - 32px);
  top: 88px;
  max-width: 636px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  overflow: hidden;
  background-color: rgb(16, 16, 16);
  transform: translateY(0px);
  opacity: 1;
  transition: transform 0.3s ease-out 0s, opacity 0.3s ease-out 0s;
`;

const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const ImgContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgb(51, 51, 51);
  width: 100%;
  height: 100%;
`;

const BannerImg = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  filter: brightness(65%);
  transition: opacity 180ms ease-out 0s, transform 0.15s ease-out 0s;
  opacity: 1;
  z-index: 100;
`;

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
`;

const BannerTitle = styled.h2`
  margin: 0;
  z-index: 200;
`;

const Container = styled.div`
  display: flex;
  padding: 24px;
`;

const ButtonArea = styled.div`
  width: 40%;
  margin-right: 24px;
`;

const TrailerButton = styled(Link)`
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
  color: rgb(0, 0, 0);
  width: 100%;
  text-decoration: none;
  &:hover {
    background: rgb(200, 200, 200);
  }
`;

const ButtonText = styled.span`
  color: rgb(0, 0, 0);
  font-size: 1rem;
  font-weight: 700;
  margin-left: 12px;
`;

const Description = styled.div`
  width: 60%;
  transition: color 0.15s ease-out 0s;
  display: block;
  word-break: break-word;
  font-size: 1rem;
  max-height: 200px;
  overflow-y: auto;
  font-weight: normal;
  color: rgb(132, 133, 133);
  text-align: left;
  line-height: 24px;
`;

const CloseButton = styled(Link)`
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
  z-index: 200;
`;

export const DetailPage = () => {
  const { id } = useParams();

  const [movie, setMovie]: any = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMovie(id || "")
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch trailer");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  return (
    <>
      <Overly />
      <DetailsContainer>
        <DetailsCard>
          <CloseButton to="/">
            <img src="/icons/close.svg" />
          </CloseButton>
          <BannerContainer>
            <ImgContainer>
              <BannerImg
                src={movie?.data?.images?.snapshot || ""}
                loading="lazy"
              />
            </ImgContainer>
            <TextContainer>
              <BannerTitle>{movie?.data.title}</BannerTitle>
            </TextContainer>
          </BannerContainer>
          <Container>
            <ButtonArea>
              <TrailerButton to={`/player/${id}`}>
                <img src="/icons/play.svg" />
                <ButtonText>Ver Tráiler</ButtonText>
              </TrailerButton>
            </ButtonArea>
            <Description>{movie?.data.short_plot}</Description>
          </Container>
        </DetailsCard>
      </DetailsContainer>
    </>
  );
};
