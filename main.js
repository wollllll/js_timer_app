var timer;
var count;

var countTimer = {
    dom: {
        time: document.getElementById('time'),
        startBtn: document.getElementById('start_btn'),
        stopBtn: document.getElementById('stop_btn'),
        message: document.getElementById('message')
    },
    modules: {
        _start: function () {
            countTimer.dom.time.textContent = count = 0;
            countTimer.dom.message.textContent = '';
            countTimer.dom.startBtn.style.display = 'none';
            countTimer.dom.stopBtn.style.display = 'block';
            timer = setInterval(countTimer.modules._countUp, 1000);
        },
        _stop: function () {
            clearInterval(timer);
            countTimer.dom.startBtn.style.display = 'block';
            countTimer.dom.stopBtn.style.display = 'none';
            countTimer.dom.time.style.display = 'block';
            if (count - 1 === 10) return countTimer.dom.message.textContent = 'Yeeeeeeeeeees';

            return countTimer.dom.message.textContent = 'Nooooooooo';
        },
        _countUp: function () {
            countTimer.dom.time.textContent = count;
            if (count > 3) {
                countTimer.dom.time.style.display = 'none';
            }

            return count++;
        },
    },
    init: function () {
        countTimer.dom.startBtn.addEventListener('click', countTimer.modules._start);
        countTimer.dom.stopBtn.addEventListener('click', countTimer.modules._stop);
    }
};

/**
 * 実行
 */
document.addEventListener('DOMContentLoaded', function () {
    countTimer.init();
});

