/** @jsxImportSource @emotion/react */

import { Global } from "@emotion/react";
import React, { ReactNode, useState } from "react";
import { globalStyles, styles } from "@/styles/home";
import Link from "next/link";
import { useRouter } from "next/router";

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
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" css={styles.plusIcon} className="plus-icon">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
  </svg>
);

const Sidebar = () => (
  <aside css={styles.sidebar}>
    <div css={styles.sidebarSection}>
      <Link href={`/home`} passHref css={styles.sidebarLink} className="active">
        <HomeIcon /> HOME
      </Link>
      <Link href={`/search`} passHref css={styles.sidebarLink}>
        <SearchIcon /> SEARCH
      </Link>
    </div>
    <div css={styles.sidebarSection}>
      <Link href={`/library`} passHref css={styles.sidebarLink}>
      YOUR LIBRARY
      </Link>
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

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      router.push("/search");
    }
  };


  return (
    <div css={styles.musicPlayerContainer}>
      <Global styles={globalStyles} />
      <Sidebar />
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
              onKeyDown={handleKeyDown}
            />
          </div>
          <div css={styles.profileIcon}></div>
        </header>
        {children}
      </main>
    </div>
  );
};
