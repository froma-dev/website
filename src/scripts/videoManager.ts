let $video: HTMLVideoElement | null = null

interface SetupVideoParams {
    videoEventCallback: (ev: Event) => void
}

export function playVideo() {
    //if ($video) $video.playbackRate = 3.0
    return $video?.play()
}

export function pauseVideo() {
    $video?.pause()
}

export function stopVideo() {
    if ($video) {
        $video.pause()
        $video.currentTime = 0
    }
}

export function isPaused() {
    return Boolean($video?.paused)
}

export function setupVideo({videoEventCallback}: SetupVideoParams) {
    $video = document.querySelector('video') as HTMLVideoElement

    $video.addEventListener('ended', (ev: Event) => {
        document.dispatchEvent(new CustomEvent('playback-ended', {detail: ev}))
        videoEventCallback(ev)
    })
}

export function toggleMute() {
    if ($video) {
        $video.muted = !$video.muted
    }
}

export function showVideo() {
    $video?.classList.remove('hidden')
}

export function hideVideo() {
    $video?.classList.add('hidden')
}