/** @jsxImportSource @emotion/react */

import React from "react";
import { styles } from "@/styles/library";
import { Layout } from "./layout";

const Library = () => {
  return (
    <Layout>
      <h2 css={styles.sectionTitle}>Playlist</h2>
      <div css={styles.grid}>
        <div css={styles.likedCard}>
          <div>Liked Songs</div>
          <p>0 liked songs</p>
        </div>
        <div css={styles.card}>
          <img src="/assets/gorillaz_cover.jpg" alt="Presenting Gorillaz" />
          <h3>Presenting Gorillaz</h3>
          <p>Gorillaz, Miho Hatori</p>
        </div>
        <div css={styles.card}>
          <img src="/assets/relaxing_pop_cover.jpg" alt="Relaxing Soft Pop" />
          <h3>Relaxing Soft Pop</h3>
          <p>Coldplay, Sam Smith</p>
        </div>
        <div css={styles.card}>
          <img src="/assets/arcane_cover.jpg" alt="Arcane" />
          <h3>Ma Meilleure Ennemie</h3>
          <p>Coldplay e Stromae</p>
        </div>
      </div>
    </Layout>
  );
};

export default Library;
