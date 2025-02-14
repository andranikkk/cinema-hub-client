import { IVideoElement } from './video.interface'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (videoRef.current?.duration) setVideoTime(videoRef.current.duration)
	}, [videoRef.current?.duration])

	const toggleVideo = useCallback(() => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	const fastForward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}

	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	const fullScreen = () => {
		const video = videoRef.current

		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullscreen) {
			video.msRequestFullscreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullscreen) {
			video.webkitRequestFullscreen()
		}
	}

	useEffect(() => {
		const video = videoRef.current

		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'ArrowRight':
					fastForward()
					break
				case 'ArrowLeft':
					revert()
					break
				case 'f':
					fullScreen()
					break
				case 'p':
					event.preventDefault()
					toggleVideo()
					break

				default: {
					return
				}
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [toggleVideo])

	const value = useMemo(
		() => ({
			videoRef,
			actions: {
				toggleVideo,
				fastForward,
				revert,
				fullScreen
			},
			video: {
				isPlaying,
				currentTime,
				videoTime,
				progress
			}
		}),
		[currentTime, progress, isPlaying, videoTime, toggleVideo]
	)

	return value
}
