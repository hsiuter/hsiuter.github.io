const discs = document.querySelectorAll('.song-disc');
const audios = document.querySelectorAll('.song-audio');

discs.forEach((disc, index) => {
    const audio = audios[index];
    const songNeedle = disc.querySelector('.song-needle');
    const songImg = disc.querySelector('.song-img');
    const playBtn = disc.querySelector('.play-btn');

    disc.addEventListener('click', function () {
        // 如果当前音频播放，暂停它，否则播放它
        if (audio.paused) {
            // 暂停其他的音乐和动画
            audios.forEach((otherAudio, otherIndex) => {
                if (otherIndex !== index) {
                    otherAudio.pause();
                    discs[otherIndex].querySelector('.song-needle').classList.remove('play');
                    discs[otherIndex].querySelector('.song-img').classList.remove('play');
                    discs[otherIndex].querySelector('.play-btn').classList.remove('play');
                }
            });

            audio.play();
            songNeedle.classList.add('play');
            songImg.classList.add('play');
            playBtn.classList.add('play');
        } else {
            audio.pause();
            songNeedle.classList.remove('play');
            songImg.classList.remove('play');
            playBtn.classList.remove('play');
        }
    });

    // 当音频播放完成时，重置动画状态
    audio.addEventListener('ended', function () {
        songNeedle.classList.remove('play');
        songImg.classList.remove('play');
        playBtn.classList.remove('play');
    });
});
