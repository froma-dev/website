let $video: HTMLVideoElement | null = null

interface SetupVideoParams {
    videoEventCallback: (type: string, ev: Event) => void
}

export function playVideo() {
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

    console.log('setupVideo')
    $video.addEventListener('ended', (ev: Event) => videoEventCallback(ev.type, ev))
}

export function showVideo() {
    $video?.classList.remove('hidden')
}

export function hideVideo() {
    $video?.classList.add('hidden')
}