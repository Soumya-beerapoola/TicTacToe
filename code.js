
function main(){
let arr = [[0,0,0],[0,0,0],[0,0,0]];   

let boxOrder = {
    one : "0,0",
    two : "0,1",
    three: "0,2",
    four : "1,0",
    five  : "1,1",
    six  : "1,2",
    seven : "2,0",
    eight: "2,1",
    nine: "2,2",
}

let x =  document.getElementsByClassName("box");
console.log(x);
let count = 0;
for (let i = 0 ;i<x.length ;i++){
x[i].addEventListener("click",getValue);
}

function getValue(e) {
    console.log(e.target);
    
    if (e.target.innerHTML === "") {
        count = count + 1;
        console.log("count" + count) 
       e.target.className += " filled";  
       console.log(e.target.classList.item(1))
    if (count % 2 === 0 ){  
        e.target.innerHTML = "O";
        e.target.style = "text-align:center ; font-weight :bold;font-size:20px;color: green";
        boxId(e,"O");
        checkWinner(count);
        
    } 
    else  {
        e.target.innerHTML = "X";
        e.target.style = "text-align:center ; font-weight :bold;font-size:20px;color : brown";
        boxId(e,"X")
        checkWinner(count);
        
    }
}
}

function boxId(el,value) {
     let boxId = el.target.id; 
     let y = boxOrder[boxId];
     let splitArr =  y.split(",");
     let i = splitArr[0];
     let j = splitArr[1];
     arr[i][j] = value;
    console.log(arr); 
    }

    function checkWinner (num){
     
    if (arr[0][0] === arr[0][1] &&  arr[0][0] === arr[0][2] && (arr[0][0] === "X" || arr[0][0] === "O")){ 
        let result = arr[0][0];   
        alert(`${result} is the winner`);     
    }  
    else if (arr[1][0] === arr[1][1] &&  arr[1][0] === arr[1][2] && (arr[1][0] === "X" || arr[1][0] === "O")){ 
        let result = arr[1][0];
        alert(`${result} is the winner`);     
    }  
    else if (arr[2][0] === arr[2][1] &&  arr[2][0] === arr[2][2] && (arr[2][0] === "X" || arr[2][0] === "O")){ 
        let result = arr[2][0];
        alert(`${result} is the winner`);     
    }  
    else if (arr[0][0] === arr[1][0] &&  arr[0][0] === arr[2][0] && (arr[0][0] === "X" || arr[0][0] === "O")){ 
        let result = arr[0][0];
        alert(`${result} is the winner`);     
    }  
    else if (arr[0][1] === arr[1][1] &&  arr[0][1] === arr[2][1] && (arr[0][1] === "X" || arr[0][1] === "O")){ 
        let result = arr[0][1];
        alert(`${result} is the winner`);     
    }  
    else if (arr[0][2] === arr[1][2] &&  arr[0][2] === arr[2][2] && (arr[0][2] === "X" || arr[0][2] === "O")){ 
        let result = arr[0][2];
        alert(`${result} is the winner`);     
    }     
    else if (arr[0][0] === arr[1][1] &&  arr[0][0] === arr[2][2] && (arr[0][0] === "X" || arr[0][0] === "O")){ 
        let result = arr[0][0];
        alert(`${result} is the winner`);     
    } 
    else if (arr[0][2] === arr[1][1] &&  arr[0][2] === arr[2][0] && (arr[0][2] === "X" || arr[0][2] === "O")){ 
        let result = arr[0][2];
        alert(`${result} is the winner`);     
    } 
    else if ( num === 9 ){
        alert(`It is a tie!`); 
        
    }
    }

    document.getElementById("restart").addEventListener("click",function(){
        window.location.reload();
    })
}
main()