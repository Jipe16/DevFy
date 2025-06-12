/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { styles } from "../styles/home";
import { Layout } from "./layout";
import Link from "next/link"; // ✅ import necessário

interface Recommendation {
  id: number;
  type: "video" | "image";
  source: string;
  poster?: string;
  title: string;
  description: string;
}

const recommendationsData: Recommendation[] = [
  {
    id: 1,
    type: "video",
    source: "./assets/video1.mp4",
    poster: "./assets/arcane_cover.jpg",
    title: "Ma Meilleure Ennemie ft. Coldplay",
    description: "Single • Stromae, Pomme, Coldplay e Uyenna",
  },
  {
    id: 2,
    type: "video",
    source: "./assets/video2.mp4",
    poster: "./assets/ado_cover.jpg",
    title: "Ado's Best Album",
    description: "Álbum • Ado",
  },
  {
    id: 3,
    type: "video",
    source: "./assets/video3.mp4",
    poster: "./assets/gorillaz_cover.jpg",
    title: "Presenting Gorillaz",
    description: "Gorillaz, Miho Hatori",
  },
  {
    id: 4,
    type: "image",
    source: "./assets/relaxing_pop_cover.jpg",
    title: "Relaxing Soft Pop",
    description: "Ed Sheeran, James Arthur, Coldplay, Sam Smith",
  },
];

const RecommendationCard = ({ item }: { item: Recommendation }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      css={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div css={styles.cardMedia}>
        {item.type === "video" ? (
          <video
            src={item.source}
            poster={item.poster}
            muted
            loop
            playsInline
            css={styles.mediaContent}
          />
        ) : (
          <img src={item.source} alt={item.title} css={styles.mediaContent} />
        )}
      </div>
      <div css={styles.cardBody}>
        <h3 css={styles.cardTitle}>{item.title}</h3>
        <p css={styles.cardDescription}>{item.description}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecommendations = recommendationsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <section>
        <h2 css={styles.sectionTitle}>RECOMENDADO PARA VOCÊ</h2>
        <div css={styles.cardGrid}>
          {filteredRecommendations.map((item) => (
            <Link href="/playing" key={item.id} passHref>
              <div>
                <RecommendationCard item={item} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Home;
