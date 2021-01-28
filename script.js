let ball = document.querySelector('.ball');
let moveBy = 25;
let left_align =  Math.random()*1500;
let top_align =  Math.random()*700;
 
window.addEventListener('load', () => {
    ball.style.position = 'absolute';
    ball.style.left = left_align + 'px';
    ball.style.top = top_align +'px';
});
 
 
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'a':
            if(parseInt(ball.style.left)>8)
            {
            ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'A':
            if(parseInt(ball.style.left)>8)
            {
            ball.style.left = parseInt(ball.style.left) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'd':
            if(parseInt(ball.style.left)<1478)
            {
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'D':
            if(parseInt(ball.style.left)<1478)
            {
            ball.style.left = parseInt(ball.style.left) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'w':
            if(parseInt(ball.style.top)>6.3)
            {
            ball.style.top = parseInt(ball.style.top) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'W':
            if(parseInt(ball.style.top)>6.3)
            {
            ball.style.top = parseInt(ball.style.top) - moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 's':
            if(parseInt(ball.style.top)<693)
            {
            ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
        case 'S':
            if(parseInt(ball.style.top)<693)
            {
            ball.style.top = parseInt(ball.style.top) + moveBy + 'px';
            break;
            }
            else{
            break;
            }
    }
});

// Made by Chetan Sharma