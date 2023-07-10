import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchTrailer } from "../utils/endpoint";
import { ClearActiveMovie } from "../store/services";
import { ReactComponent as Back } from "../assets/icons/back-button.svg";
import Spinner from "../components/Spinner";

const PlayerContainer = styled.div`
  position: fixed;
  top: 88px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 500;
`;

const VideoPlayer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  padding-bottom: 164px;
`;

const BackButton = styled(Link)`
  cursor: pointer;
  margin-top: 5px;
  margin-left: 15px;
  padding: 24px 16px;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export const PlayerPage = () => {
  const { id } = useParams();

  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTrailer(id || "")
      .then((response) => response.json())
      .then((data) => {
        setVideoUrl(data.data.stream_infos[0].url);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch trailer");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Spinner/>
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message
  }

  return (
    <PlayerContainer>
      <BackButton to={`/details/${id}`} onClick={() => ClearActiveMovie(dispatch)}>
        <Back/>
      </BackButton>
      <VideoPlayer src={`${videoUrl}`}></VideoPlayer>
    </PlayerContainer>
  );
};
