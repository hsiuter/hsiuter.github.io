const discs = document.querySelectorAll('.song-disc');
const audios = document.querySelectorAll('.song-audio');

discs.forEach((disc, index) => {
    disc.addEventListener('click', function () {
        // 如果当前音频播放，暂停它，否则播放它
        if (audios[index].paused) {
            audios[index].play();
        } else {
            audios[index].pause();
        }

        // 切换动画
        const songNeedle = disc.querySelector('.song-needle');
        const songImg = disc.querySelector('.song-img');
        const playBtn = disc.querySelector('.play-btn');

        songNeedle.classList.toggle('play');
        songImg.classList.toggle('play');
        playBtn.classList.toggle('play');
    });
});