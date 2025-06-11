// styles.ts

import { CSSObject } from '@emotion/react';

// Variáveis de cor, antes em :root
export const theme = {
  colors: {
    bgDarkest: '#000000',
    bgDark: '#121212',
    bgMedium: '#181818',
    bgLight: '#282828',
    textPrimary: '#FFFFFF',
    textSecondary: '#b3b3b3',
    accent: '#1DB954',
  },
  fonts: {
    body: "'Montserrat', sans-serif",
  }
};

// Estilos globais que seriam aplicados ao body
// Com Emotion, isso é feito com o componente <Global />
export const globalStyles: CSSObject = {
  '@import': "url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap')",
  body: {
    margin: 0,
    fontFamily: theme.fonts.body,
    backgroundColor: theme.colors.bgDark,
    color: theme.colors.textPrimary,
    overflow: 'hidden',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  }
};

// Objeto principal contendo os estilos dos componentes
export const styles: { [key: string]: CSSObject } = {
  musicPlayerContainer: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
  },

  // --- Barra Lateral (Sidebar) ---
  sidebar: {
    width: '250px',
    backgroundColor: theme.colors.bgDarkest,
    padding: '24px 8px',
    display: 'flex',
    flexDirection: 'column',
    color: theme.colors.textSecondary,
    fontWeight: 'bold',
  },
  sidebarSection: {
    padding: '0 16px',
    marginBottom: '20px',
  },
  sidebarLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    padding: '8px 0',
    fontSize: '14px',
    transition: 'color 0.2s ease',
    '&:hover, &.active': {
      color: theme.colors.textPrimary,
    },
    '&.active': {
        fontWeight: 700,
    }
  },
  libraryHeader: {
    fontSize: '11px',
    letterSpacing: '1px',
    marginBottom: '20px',
  },
  playlistsSection: {
    p: {
      fontSize: '14px',
      marginBottom: '10px',
    }
  },
  createPlaylistBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    background: 'none',
    border: 'none',
    color: theme.colors.textSecondary,
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '8px 0',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: theme.colors.textPrimary,
      '.plus-icon': {
        backgroundColor: 'white',
      }
    },
  },
  plusIcon: {
    backgroundColor: '#a7a7a7',
    color: 'black',
    padding: '4px',
    borderRadius: '2px',
    // O hover é controlado pelo pai (.createPlaylistBtn)
  },
  divider: {
    border: 'none',
    height: '1px',
    backgroundColor: theme.colors.bgLight,
    margin: '20px 0',
  },
  playlistList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  // --- Conteúdo Principal ---
  mainContent: {
    flexGrow: 1,
    backgroundColor: theme.colors.bgDark,
    padding: '24px 32px',
    overflowY: 'auto',
  },
  mainHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '32px',
  },
  searchBarWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    svg: {
      position: 'absolute',
      left: '12px',
      color: '#000',
      width: '20px',
      height: '20px',
    }
  },
  searchInput: {
    width: '350px',
    padding: '12px 12px 12px 40px',
    borderRadius: '50px',
    border: 'none',
    fontSize: '14px',
    fontFamily: theme.fonts.body,
  },
  profileIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#535353',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '20px',
  },

  // --- Grid de Cards ---
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '24px',
  },
  card: {
    backgroundColor: theme.colors.bgMedium,
    padding: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: theme.colors.bgLight,
    },
  },
  cardMedia: {
    position: 'relative',
    width: '100%',
    paddingBottom: '100%',
    marginBottom: '16px',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  mediaContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBody: {
    minHeight: '62px',
  },
  cardTitle: {
    fontSize: '16px',
    fontWeight: 700,
    margin: '0 0 4px 0',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  cardDescription: {
    fontSize: '14px',
    color: theme.colors.textSecondary,
    margin: 0,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};