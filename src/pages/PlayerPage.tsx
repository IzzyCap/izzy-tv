import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { useParams } from 'react-router-dom';
import { fetchTrailer } from '../utils/endpoint';
import { Link } from "react-router-dom";

const PlayerContainer = styled.div`
  position: fixed;
  top: 88px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 500;
`

const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  padding-bottom: 164px;
`

const BackButton = styled(Link)`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  padding: 24px 16px;
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
      <BackButton to={`/details/${id}`}>
        <img src='/icons/back-button.svg'/>
      </BackButton>
      <VideoPlayer src={videoUrl}></VideoPlayer>
    </PlayerContainer>
  )
}
