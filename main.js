'use strict';

{
  let countTime = 18* 10000;
  let countdown;

  function check() {
    countdown = endTime - new Date().getTime();

    // タイマーの終了

    if (countdown < 0) {
      clearInterval(intervalId);
      countdown = countTime;
      btn.disabled = false;
      btn2min.disabled = false;
      btn3min.disabled = false;
      btn5min.disabled = false;
      btn.classList.remove('inactive');
      btn2min.classList.remove('inactive');
      btn3min.classList.remove('inactive');
      btn5min.classList.remove('inactive');

      message.classList.add('active-message');
      body.classList.add('active-bg');
    }

    
    const totalSeconds = Math.floor(countdown / 1000);
    
    const minutes = Math.floor(totalSeconds /60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  }

  const timer = document.getElementById('timer');
  const btn = document.getElementById('btn');
  let endTime;
  let intervalId;

  // 終了時刻を求める
  btn.addEventListener('click',() => {
    endTime = new Date().getTime() + countTime;

    btn.disabled = true;
    btn.classList.add('inactive');

    btn2min.disabled = true;
    btn3min.disabled = true;
    btn5min.disabled = true;
    btn2min.classList.add('inactive');
    btn3min.classList.add('inactive');
    btn5min.classList.add('inactive');
    

    message.classList.remove('active-message');
    body.classList.remove('active-bg');
    
    // 残り時間を求める
    intervalId = setInterval(check, 100);
  });

  const resetBtn = document.getElementById('reset-btn');

  resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    countdown = countTime;
    btn.disabled = false;
    btn2min.disabled = false;
    btn3min.disabled = false;
    btn5min.disabled = false;
    btn.classList.remove('inactive');
    btn2min.classList.remove('inactive');
    btn3min.classList.remove('inactive');
    btn5min.classList.remove('inactive');

    const totalSeconds = Math.floor(countdown / 1000);
    
    const minutes = Math.floor(totalSeconds /60);
    const seconds = totalSeconds % 60;

    const minutesFormatted = String(minutes).padStart(2, '0');
    const secondsFormatted = String(seconds).padStart(2, '0');

    timer.textContent = `${minutesFormatted}:${secondsFormatted}`;
  });

  const message = document.getElementById('message');
  const body = document.querySelector('body');
  const messageMin = document.getElementById('messsage-min');


  const btn2min = document.getElementById('btn-2min');
  btn2min.addEventListener('click', () => { 
    timer.textContent = '02:00'
    countTime = 12 * 10000;
    messageMin.textContent = '２';
  });

  const btn3min = document.getElementById('btn-3min');
  btn3min.addEventListener('click', () => { 
    timer.textContent = '03:00'
    countTime = 18 * 10000;
    messageMin.textContent = '３';
  });

  const btn5min = document.getElementById('btn-5min');
  btn5min.addEventListener('click', () => {
    timer.textContent = '05:00'
    countTime = 30 * 10000;
    messageMin.textContent = '５';
  });
}