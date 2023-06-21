"use client"

import { useRef } from "react"

import { cl } from "@/utils"
import { PauseIcon, PlayIcon, VolumeOffIcon, VolumeOnIcon } from "@/Icons"

import IconButton from "../IconButton"

import styles from "./index.module.scss"
import useVideoPlayer from "./useVideoPlayer"

interface IPlayer {
  className?: string
}

const Player = ({ className }: IPlayer) => {
  const videoElement = useRef(null)
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement)

  return (
    <div className={cl(styles.player, className)}>
      <video
        src={"http://localhost:3001/test.mp4"}
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
      />
      <div className={styles.player__controls}>
        <div className={styles.player__controls__actions}>
          <IconButton
            onClick={togglePlay}
            icon={
              !playerState.isPlaying ? (
                <PlayIcon size={24} />
              ) : (
                <PauseIcon size={24} />
              )
            }
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.progress}
          onChange={(e) => handleVideoProgress(e)}
        />
        <select
          className={styles.player__controls__velocity}
          value={playerState.speed}
          onChange={(e) => handleVideoSpeed(e)}
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="2">2x</option>
        </select>
        <IconButton
          onClick={toggleMute}
          icon={
            !playerState.isMuted ? (
              <VolumeOnIcon size={20} />
            ) : (
              <VolumeOffIcon size={20} />
            )
          }
        />
      </div>
    </div>
  )
}

export default Player
