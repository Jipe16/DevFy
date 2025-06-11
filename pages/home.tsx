/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { Global } from "@emotion/react";
import { globalStyles, styles } from "@/styles/home_screen";
import Link from "next/link";

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 12h3v10h14V12h3L12 2zm0 2.83L17.17 10H6.83L12 4.83zM17 19H7v-7h10v7z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    css={styles.plusIcon}
    className="plus-icon"
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

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
    title: "Ado's Best Adobum",
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

const Sidebar = () => (
  <aside css={styles.sidebar}>
    <div css={styles.sidebarSection}>
      <Link
        href={`/home_screen`}
        passHref
        css={styles.sidebarLink}
        className="active"
      >
        <HomeIcon /> HOME
      </Link>
      <Link href={`/search`} passHref css={styles.sidebarLink}>
        <SearchIcon /> SEARCH
      </Link>
    </div>
    <div css={styles.sidebarSection}>
      <div css={styles.libraryHeader}>YOUR LIBRARY</div>
      <div css={styles.playlistsSection}>
        <p>PLAYLISTS</p>
        <button css={styles.createPlaylistBtn}>
          <PlusIcon /> CREATE PLAYLIST
        </button>
        <Link href={`#`} css={styles.sidebarLink}>
          LIKED SONGS
        </Link>
      </div>
      <hr css={styles.divider} />
      <div css={styles.playlistList}>
        <Link href={`#`} css={styles.sidebarLink}>
          NAME PLAYLIST 1
        </Link>

        <Link href={`#`} css={styles.sidebarLink}>
          NAME PLAYLIST 2
        </Link>

        <Link href={`#`} css={styles.sidebarLink}>
          NAME PLAYLIST 3
        </Link>
      </div>
    </div>
  </aside>
);

const RecommendationCard = ({ item }: { item: Recommendation }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = e.currentTarget.querySelector("video");
    if (video)
      video
        .play()
        .catch((error) => console.log("Video autoplay failed:", error));
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

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecommendations = recommendationsData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main css={styles.mainContent}>
      <header css={styles.mainHeader}>
        <div css={styles.searchBarWrapper}>
          <SearchIcon />
          <input
            type="text"
            placeholder="Pesquisar"
            css={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div css={styles.profileIcon}></div>
      </header>
      <section>
        <h2 css={styles.sectionTitle}>RECOMENDADO PARA VOCÊ</h2>
        <div css={styles.cardGrid}>
          {filteredRecommendations.map((item) => (
            <RecommendationCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
};

const HomeScreen = () => (
  <div css={styles.musicPlayerContainer}>
    <Global styles={globalStyles} />
    <Sidebar />
    <MainContent />
  </div>
);

export default HomeScreen;
