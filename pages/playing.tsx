/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import { Layout } from "./layout";
import { styles } from "../styles/playing";

const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Playing = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setCurrentTime(audio.currentTime);
    setProgress((audio.currentTime / audio.duration) * 100);
  };

    const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio && !isNaN(audio.duration)) {
        setDuration(audio.duration);
    }
    };


  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audio) audio.volume = newVolume;
  };

  return (
    <Layout>
      <div css={styles.playingContainer}>
        <h2 css={styles.nowPlayingTitle}>Tocando agora</h2>

        <div css={styles.trackInfo}>
          <img
            src="/assets/arcane_cover.jpg"
            alt="Capa do Álbum"
            css={styles.albumCover}
          />
          <h3 css={styles.trackTitle}>Ma Meilleure Ennemie</h3>
          <p css={styles.artist}>Stromae, Pomme, Coldplay e Uyenna</p>
        </div>

        <div css={styles.customAudioPlayer}>
          <button css={styles.playButton} onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>

          <div css={styles.progressContainer}>
            <div css={styles.progressWrapper} onClick={handleProgressClick}>
                <div css={styles.progressBar}>
                <div css={{ ...styles.progressFill, width: `${progress}%` }} />
                </div>
            </div>
            <div css={styles.timeDisplay}>
                {formatTime(currentTime)} / {formatTime(duration)}
            </div>
            </div>


          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            css={styles.volumeSlider}
          />
        </div>

        <audio
        ref={audioRef}
        src="/audio/ma_meilleure_ennemie.mp3"
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        hidden
        />
      </div>
    </Layout>
  );
};

export default Playing;
