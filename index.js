var clicks = 0;
var sumd1 = 0;
function mark(id) {
  if(document.getElementById(id).innerHTML == "") {
    var symbol = "X";
    if(clicks%2==0) {
      symbol = "X";
    } else {
      symbol = "O";
    }
    document.getElementById(id).innerHTML = symbol;

    clicks++;
  }
}

//document.getElementById("mainbox").addEventListener('click', check());

function check() {
  for(i=1;i<4;i++) {
    let first = "";
    let count = 1;
    for(j=1;j<4;j++) {
      if(j==1) {
        first = document.getElementById("box"+i+j).innerHTML;
//        console.log(first=="X");
      } else {
        if(first != "" && first == document.getElementById("box"+i+j).innerHTML) {
          count++;
//          console.log(first == document.getElementById("box"+i+j).innerHTML);
        }
        if(count == 3) {
          console.log(first+" wins.");
        }
      }
    }
  }
  for(j=1;j<4;j++) {
    let first = "";
    let count = 1;
    for(i=1;i<4;i++) {
      if(i==1) {
        first = document.getElementById("box"+i+j).innerHTML;
      } else {
        if(first != "" && first == document.getElementById("box"+i+j).innerHTML) {
          count++;
        }
        if(count==3) {
          console.log(first+" wins.");
        }
      }
    }
  }
  let f = "";
  let c = 1;
  let f2 = "";
  let c2 = 1;
  for(i=1,k=3;i<4;i++,k--) {
    
    for(j=1;j<4;j++) {
      if(i==j) {
        if(i==1) {
          f = document.getElementById("box"+i+j).innerHTML;
//          console.log(f);
        } else {
          if(f != "" && f == document.getElementById("box"+i+j).innerHTML) {
            c++;
//            console.log(c);
          }
          if(c == 3) {
            console.log(f+" wins.");
          }
        }
      }
      if(j==k) {
        if(i==1) {
          f2 = document.getElementById("box"+i+j).innerHTML;
        } else {
          if(f2 != "" && f2 == document.getElementById("box"+i+j).innerHTML) {
            c2++;             
          }
          if(c2==3) {
            console.log(f2+" wins.");
          }
        }
      }
    }
    
  }
//  console.log("running");
}