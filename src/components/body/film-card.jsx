import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 450px;
  height: 600px;
  margin: 20px;
  color: #ffffff;
`;

const MovieDetails = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 450px;
  height:100px;
`;

const MovieGenre = styled.span`
  font-size: 14px;
  color: #ffffff;
  font-weight: lighter;
`;

const MovieTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;
`;

const ReleaseDate = styled.div`
  text-align: center;
  width: 80px;
  height: 25px;
  border: 1px solid gray;
  border-radius: 3px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieImage = styled.img`
  width: 450px;
  height: 500px;
`;

const formatDate = (date) => date.slice(0, 4);
const formatGenres = (genres) => {
  if(genres.length > 0)
   return genres.reduce((acc, genre) => `${acc} & ${genre}`);
}

export const FilmCard = ({card}) => (
  <Card>
    <MovieImage src={card.poster_path} />
    <MovieDetails>
      <Wrapper>
        <MovieTitle>{card.title}</MovieTitle>
        <MovieGenre>{formatGenres(card.genres)}</MovieGenre>
      </Wrapper>
      <ReleaseDate>{formatDate(card.release_date)}</ReleaseDate>
    </MovieDetails>
  </Card>
);
