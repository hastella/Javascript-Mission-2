const AnalogClock = ($container) => {
  const deg = 6;
  const hr = document.querySelector(".hand.hour");
  const mn = document.querySelector(".hand.minute");
  const sc = document.querySelector(".hand.second");

  setInterval(() => {
    // 현재 시간 가져오기
    let day = new Date();

    //시간을 단위로 추출
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  });
};

export default AnalogClock;
