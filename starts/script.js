// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent= "Correct Number!";
// document.querySelector('.number').textContent=13;
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.guess').value=23;
let number= Math.trunc(Math.random()*20+1);
let score =20;
let hightcore=0;
document.querySelector('.check').addEventListener('click',function(){
     const guess=Number(document.querySelector('.guess').value);
     console.log(guess);
     if (!guess) {
        document.querySelector('.message').textContent="No Number🤣"
     }else if (guess>20 || guess<0) {
        document.querySelector('.message').textContent='Please enter a number less than 20😎😋 and '
     } else if(guess===number){
        document.querySelector('.message').textContent="🎉🎉Correct Number!🎉🎉"
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor='red';
        document.querySelector('.number').style.width="30rem";
        if (score>hightcore) {
            hightcore= score;
            document.querySelector('.highscore').textContent=hightcore;
        }
     }else if(guess<number){
        if (score>1) {
            document.querySelector('.message').textContent="🦑🦑Too low!"
            score--;
            document.querySelector('.score').textContent =score;
        }else{
            document.querySelector('.message').textContent="You lost the game🧨🎇🧨"
            document.querySelector('.score').textContent =0;
        }
      
        // console.log(score);
     }else if(guess>number){
        if (score>1) {
            document.querySelector('.message').textContent="🐭🐗🐷Too high!"
            score--;
            document.querySelector('.score').textContent =score;
        }else{
            document.querySelector('.message').textContent="You lost the game🧨🎇🧨"
            document.querySelector('.score').textContent =0;
        }
     }

})
 document.querySelector('.again').addEventListener('click',function(){
    score=20;
    number= Math.trunc(Math.random()*20+1);
    document.querySelector('.score').textContent =score;
    document.querySelector('.message').textContent= "Start Guessing..."
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width="15rem";
 })
     