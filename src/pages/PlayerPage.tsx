import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { fetchTrailer } from '../helpers/endpoint';
import { Link } from "react-router-dom";

const PlayerContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 500;
`

const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
  padding: 50px;
  border: none;
`

const TopHeader = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-flow: column;
  padding: 24px 16px;
  transition: all 0.15s ease 0s;
`

const BackButton = styled(Link)`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  img {
    width:40px;
    height:40px
  }
`

export const PlayerPage = () => {
  const { id } = useParams();

  const [videoUrl, setVideoUrl] = useState('');

  // [TODO] get content type by url parameter
  // [TODO] catch if id is undefined and fetch request.
  useEffect(() => {
    fetchTrailer(id || '')
      .then(response => response.json())
      .then(data => {
        setVideoUrl(data.data.stream_infos[0].url);
      });
  }, []);

  return (
    <PlayerContainer>
      <TopHeader>
        <BackButton to={`/details/${id}`}>
          <img src='/icons/back-button.svg'/>
        </BackButton>
      </TopHeader>
      <VideoPlayer src={videoUrl}></VideoPlayer>
    </PlayerContainer>
  )
}
