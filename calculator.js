var entries = []
var runningTotal = 0;
var temp = ''

document.addEventListener("click", checkFirst)

// if onClick event element is button, send through to calculate
function checkFirst(e) {
    if (e.target.nodeName === "BUTTON") {
        calculate(e)
    }
}

function calculate(e) {
    
    // get input
    var val = e.target.textContent
        // can return nodeName, href, id, className 

     // if number, add to temp
    if (!isNaN(val) || val ==='.') {
        temp+= val
        // pushTemp() IDEALLY THESE FUNCTIONS CAN BE CALLED
        // total()
        document.getElementById("display").setAttribute("placeholder", temp)
    } else {
    // if any symbol other than equals, add temp var to entries, then clear temp, then add current symbol to entries
        switch (val) {
            // if AC, clear entries array
            case "AC":
                console.log("AC")
                entries = [];
                temp = '';
                runningTotal = 0;
                display(temp)
                break;
            // if CE, clear last entry (temp var)    
            case "CE":
                console.log("CE");
                temp = '';
                display(temp)
                break;
            case "%":
                console.log("%")
                pushTemp()
                entries.push('/','100')
                total()
                break;
            // divide symbol becomes /
            case "÷":
                console.log("÷")
                pushTemp()
                entries.push('/')
                break;
            // X to *
            case "X":
                console.log("X")
                pushTemp()
                entries.push('*')
                break;
            case "-":
                console.log("-")
                pushTemp()
                entries.push(val)
                break;
            case "+":
                console.log("+")
                pushTemp()
                entries.push(val)
                break;
            // =, perform calculate
            case "=":
                pushTemp()
                total()
                break;
            default:
                console.log("Error: Your switch statement ran out of options so you hit the default!")
                break;
            }
        function pushTemp() {
            if (temp !== '') {
                entries.push(temp)
                temp = '';
            }
        }

        function total() {
            console.log("someone pushed =")
            if (entries === []) {
                console.log("do")
            }
            nt = Number(entries[0])
            for (i =1; i<entries.length; i++) {
                var nextNum = Number(entries[i+1])
                var symbol = entries[i];
                console.log(symbol)
                if (symbol === '+') { nt += nextNum; } 
                else if (symbol === '-') { nt -= nextNum; } 
                else if (symbol === '*') { nt *= nextNum; } 
                else if (symbol === '/') { nt /= nextNum; }
      
                i++;
            }
            display(nt)
            console.log(nt)
        }

        function display(i) {
            console.log("display updated")
            document.getElementById("display").setAttribute("placeholder", i)
        }

        
    }
    

console.log(entries)
    
// end of calculate()
}

    // for (var i = 1; i < entries.length; i++) {
    //   var nextNum = Number(entries[i+1])
    //   var symbol = entries[i];
      
    //   if (symbol === '+') { nt += nextNum; } 
    //   else if (symbol === '-') { nt -= nextNum; } 
    //   else if (symbol === '*') { nt *= nextNum; } 
    //   else if (symbol === '/') { nt /= nextNum; }
      
    //   i++;
    // }


// if result < 0
    // put a '-' on the front of string


    

// push variable back to display
