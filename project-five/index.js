let con = document.querySelector('.container')

let love = document.querySelector('i')


console.log(love);
console.log(con);

con.addEventListener("dblclick", function(){
    
    love.style.transform = "translate(-50%, -50%) scale(1)"

    setTimeout( function(){
    love.style.transform = "translate(-50%, -50%) scale(0)"

    }, 1000)
    
});

