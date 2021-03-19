// quiz 1
// 答錯
function wrong(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let ron=document.getElementById("ron");
    ron.style.backgroundColor="#7fff00";
    ron.style.fontSize="2em";
    ron.style.color="#270";
    ron.style.fontWeight="bold"; 
    let oncol=document.getElementById("oncol");
    let twcol=document.getElementById("twcol");
    if(oncol.style.display="block"){
        function next(){
            setTimeout(nextOne,1000);
            function nextOne(){
                oncol.style.display="none";
                twcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function right(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let oncol=document.getElementById("oncol");
    let twcol=document.getElementById("twcol");
    if(oncol.style.display="block"){
        function next(){
            setTimeout(nextOne,1000);
            function nextOne(){
                oncol.style.display="none";
                twcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 2
// 答錯
function wrongtw(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rtw=document.getElementById("rtw");
    rtw.style.backgroundColor="#7fff00";
    rtw.style.fontSize="2em";
    rtw.style.color="#270";
    rtw.style.fontWeight="bold"; 
    let twcol=document.getElementById("twcol");
    let thcol=document.getElementById("thcol");
    if(twcol.style.display="block"){
        function next(){
            setTimeout(nextTwo,1000);
            function nextTwo(){
                twcol.style.display="none";
                thcol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function righttw(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let twcol=document.getElementById("twcol");
    let thcol=document.getElementById("thcol");
    if(twcol.style.display="block"){
        function next(){
            setTimeout(nextTwo,1000);
            function nextTwo(){
                twcol.style.display="none";
                thcol.style.display="block";
            }
        }
        next();
    }
}
// quiz 3
// 答錯
function wrongth(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rth=document.getElementById("rth");
    rth.style.backgroundColor="#7fff00";
    rth.style.fontSize="2em";
    rth.style.color="#270";
    rth.style.fontWeight="bold"; 
    let thcol=document.getElementById("thcol");
    let focol=document.getElementById("focol");
    if(thcol.style.display="block"){
        function next(){
            setTimeout(nextThree,1000);
            function nextThree(){
                thcol.style.display="none";
                focol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightth(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let thcol=document.getElementById("thcol");
    let focol=document.getElementById("focol");
    if(thcol.style.display="block"){
        function next(){
            setTimeout(nextThree,1000);
            function nextThree(){
                thcol.style.display="none";
                focol.style.display="block";
            }
        }
        next();
    }
}
// quiz 4
// 答錯
function wrongfo(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfo=document.getElementById("rfo");
    rfo.style.backgroundColor="#7fff00";
    rfo.style.fontSize="2em";
    rfo.style.color="#270";
    rfo.style.fontWeight="bold"; 
    let focol=document.getElementById("focol");
    let ficol=document.getElementById("ficol");
    if(focol.style.display="block"){
        function next(){
            setTimeout(nextFour,1000);
            function nextFour(){
                focol.style.display="none";
                ficol.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightfo(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let focol=document.getElementById("focol");
    let ficol=document.getElementById("ficol");
    if(focol.style.display="block"){
        function next(){
            setTimeout(nextFour,1000);
            function nextFour(){
                focol.style.display="none";
                ficol.style.display="block";
            }
        }
        next();
    }
}
// quiz 5
// 答錯
function wrongfi(w){
    w.style.backgroundColor="#cd5c5c";
    w.style.fontSize="0.5em";
    w.style.color="#880000";
    let rfi=document.getElementById("rfi");
    rfi.style.backgroundColor="#7fff00";
    rfi.style.fontSize="2em";
    rfi.style.color="#270";
    rfi.style.fontWeight="bold"; 
    let ficol=document.getElementById("ficol");
    let last=document.getElementById("last");
    if(ficol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                ficol.style.display="none";
                last.style.display="block";
            }
        }
        next();
    }
}
// 答對
function rightfi(r){
    r.style.backgroundColor="#7fff00";
    r.style.fontSize="2em";
    r.style.color="#270";
    r.style.fontWeight="bold";
    let ficol=document.getElementById("ficol");
    let last=document.getElementById("last");
    if(ficol.style.display="block"){
        function next(){
            setTimeout(nextFive,1000);
            function nextFive(){
                ficol.style.display="none";
                last.style.display="block";
            }
        }
        next();
    }
}