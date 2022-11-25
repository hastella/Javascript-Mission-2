const AnalogClock = ($container) => {
  const deg = 6;
  const hr = document.querySelectorAll(".hand.hour");
  const mn = document.querySelectorAll(".hand.minute");
  const sc = document.querySelectorAll(".hand.second");
  // console.log(hr, mn, sc);

  setInterval(() => {
    // 현재 시간 가져오기
    const day = new Date();

    // 시간을 단위로 추출
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    // 재사용을 위한 forEach문 사용
    hr.forEach((hr) => (hr.style.transform = `rotateZ(${hh + mm / 12}deg)`));
    mn.forEach((min) => (min.style.transform = `rotateZ(${mm}deg)`));
    sc.forEach((sec) => (sec.style.transform = `rotateZ(${ss}deg)`));
  });
};

export default AnalogClock;
