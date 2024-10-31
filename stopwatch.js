let interval;
let seconds = 0;

const formatTime = (sec) => {
    const hours = String(Math.floor(sec / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const secondsStr = String(sec % 60).padStart(2, '0');
    return `${hours}:${minutes}:${secondsStr}`;
};

const startTimer = async () => {
    if (interval) return;
    interval = setInterval(() => {
        seconds++;
        $('#timeLabel').text(formatTime(seconds));
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null;
};

const resetTimer = () => {
    stopTimer();
    seconds = 0;
    $('#timeLabel').text(formatTime(seconds));
};

$(document).ready(() => {
    const currentDate = new Date().toISOString().split('T')[0];
    $('#datePicker').val(currentDate);

    $('#start').click(startTimer);
    $('#stop').click(stopTimer);
    $('#reset').click(resetTimer);
});
