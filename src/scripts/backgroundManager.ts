import {stopVideo, setupVideo, showVideo, hideVideo, isPaused, playVideo} from "@scripts/videoManager"
let $backgroundImage: HTMLImageElement | null = null
let $backgroundContainer: HTMLDivElement | null = null

export function setupBackground() {
    $backgroundImage = document.querySelector('.background-image') as HTMLImageElement
    $backgroundContainer = document.querySelector('.background')
    const backgroundImageLoaded = $backgroundImage.complete

    setupVideo({videoEventCallback})

    if (backgroundImageLoaded) {
        onBackgroundImageLoad()
    } else {
        $backgroundImage.addEventListener('load', () => onBackgroundImageLoad())
    }

    $backgroundContainer?.addEventListener('ended', () => {
        onVideoEnded()
    })
}

export function showBackgroundImage() {
    if ($backgroundImage) {
        $backgroundImage.classList.add('loaded')
        $backgroundImage.classList.remove('loading')
    }
    hideVideo()
}

export function showPlayer() {
    if ($backgroundImage) {
        $backgroundImage.classList.add('loading')
        $backgroundImage.classList.remove('loaded')
    }
    showVideo()
}

export function onBackgroundImageLoad()  {
    $backgroundImage?.classList.add('loaded')
    $backgroundImage?.classList.remove('loading')
}

export function onVideoEnded() {
    showBackgroundImage()
    stopVideo()
}

export function playStopVideo() {
    if(isPaused()) {
        playVideo()
        showPlayer()
    } else {
        stopVideo()
        showBackgroundImage()
    }
}

function videoEventCallback<T>(type: T) {
    if (type === 'ended') {
        onVideoEnded()
    }
}