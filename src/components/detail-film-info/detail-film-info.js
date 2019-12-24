import React from 'react';
import { Header } from './header-detail-film-info';
import styles from './detail-film-info.module.css';
import  {BodyLayout, FooterLayout } from '../../components'

export const DetailFilmInfo = (props) => {
  const { filmsTheSameGenre, filmInfo } = props;
  console.log(props)
  return (
    <div className={styles.container}>
      <Header filmInfo={filmInfo} />
      <BodyLayout data={filmsTheSameGenre} />
      <FooterLayout />
    </div>
  );
};
