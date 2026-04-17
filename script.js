const themes={90s:[{t:'Mr Brightside',a:'The Killers'},{t:'Numb',a:'Linkin Park'}],pop:[{t:'Bad Romance',a:'Lady Gaga'}],rock:[{t:'Smells Like Teen Spirit',a:'Nirvana'}]};
let scoreA=0,scoreB=0,timerEl=document.getElementById('timer'),answer=document.getElementById('answer'),instruction=document.getElementById('instruction');
document.getElementById('start').onclick=startRound;document.getElementById('showAnswer').onclick=showAnswer;
function startRound(){let theme=document.getElementById('theme').value;let q=themes[theme][Math.floor(Math.random()*themes[theme].length)];window.current=q;startTimer(15);instruction.textContent='🎧 Spela låten i Spotify NU';answer.textContent='';}
function startTimer(sec){let t=sec;timerEl.textContent=t;let i=setInterval(()=>{t--;timerEl.textContent=t;if(t<=0){clearInterval(i);instruction.textContent='🛑 STOPP';document.getElementById('showAnswer').classList.remove('hidden')}},1000)}
function showAnswer(){answer.textContent='✅ '+current.t+' – '+current.a;animateGood()}
function bonus(team){team==='A'?scoreA+=2:scoreB+=2;updateScores();animateGood()}
function penalty(team){team==='A'?scoreA--:scoreB--;updateScores();animateBad()}
function updateScores(){document.getElementById('scoreA').textContent=scoreA;document.getElementById('scoreB').textContent=scoreB}
function animateGood(){document.body.style.background='#064e3b';setTimeout(()=>document.body.style.background='#020617',300)}
function animateBad(){document.body.style.background='#7f1d1d';setTimeout(()=>document.body.style.background='#020617',300)}
