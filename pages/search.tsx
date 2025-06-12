/** @jsxImportSource @emotion/react */

import React from "react";
import { styles } from "../styles/search";
import { Layout } from "./layout";

interface AlbumCard {
  id: number;
  title: string;
  artists: string;
  image: string;
}

const albumData: AlbumCard[] = [
  {
    id: 1,
    title: "This is Elton John",
    artists: "Elton John",
    image: "/assets/elton_cover.jpg",
  },
  {
    id: 2,
    title: "Elton John Rádio",
    artists: "Elton John",
    image: "/assets/elton_radio.jpg",
  },
  {
    id: 3,
    title: "Fast Pop Run",
    artists: "Vários artistas",
    image: "/assets/pop_run.jpg",
  },
  {
    id: 4,
    title: "Soft 90s",
    artists: "Whitney Houston, Roxette",
    image: "/assets/soft_90s.jpg",
  },
];

const Search = () => {
  return (
    <Layout>
      <h2 css={styles.sectionTitle}>Melhor resultado</h2>
      <div css={styles.mainResult}>
        <div css={styles.resultImage}>
          <img src="/assets/elton_cover.jpg" alt="Elton John" css={styles.resultImageImg} />
        </div>
        <div>
          <h3 css={styles.playlistTitle}>ELTON JOHN SÓ AS MELHORES</h3>
          <p css={styles.playlistSubtitle}>Playlist • Sidnei Edgard</p>
          <ul css={styles.songList}>
            <li>Sacrifice — Elton John</li>
            <li>I'm Still Standing — Elton John</li>
            <li>Nikita — Elton John</li>
            <li>Skyline Pigeon — Piano Version</li>
          </ul>
        </div>
      </div>

      <h2 css={styles.sectionTitle}>Resultados</h2>
      <div css={styles.cardGrid}>
        {albumData.map((album) => (
          <div css={styles.card} key={album.id}>
            <img src={album.image} alt={album.title} css={styles.cardImage} />
            <h3 css={styles.cardTitle}>{album.title}</h3>
            <p css={styles.cardDescription}>{album.artists}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Search;
