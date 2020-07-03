var entries = []
var runningTotal = 0;
var temp = ''

document.body.addEventListener("click", calculate)
//TODO only click event on button element

function calculate(e) {
    
    // get input
    var val = e.target.textContent
        // can return nodeName, href, id, className 

     // if number, add to temp
    if (!isNaN(val) || val ==='.') {
        temp+= val
    } else {
    // if any symbol other than equals, add temp var to entries, then clear temp, then add current symbol to entries
        entries.push(temp)
        temp = '';
        switch (val) {
            // if AC, clear entries array
            case "AC":
                console.log("AC")
                entries = [];
                runningTotal = 0;
                break;
            // if CE, clear last entry (temp var)    
            case "CE":
                console.log("CE");
                temp = '';
                break;
            case "%":
                console.log("%")
                entries.push('/100')
                break;
            case "÷":
                console.log("÷")
                entries.push('/')
                break;
            case "X":
                console.log("X")
                entries.push('*')
                break;
            case "-":
                console.log("-")
                entries.push(val)
                break;
            case "+":
                console.log("+")
                entries.push(val)
                break;
            case "=":
                total()
                break;
            default:
                console.log("Error: Your switch statement ran out of options so you hit the default!")
                break;
            }

        function total() {
            console.log("someone pushed =")
            nt = Number(entries[0])
            for (i in entries) {
                var nextNum = Number(entries[i+1])
                var symbol = entries[i];
                
                if (symbol === '+') { nt += nextNum; } 
                else if (symbol === '-') { nt -= nextNum; } 
                else if (symbol === '*') { nt *= nextNum; } 
                else if (symbol === '/') { nt /= nextNum; }
      
                i++;
            }
            display(nt)
        }

        function display(i) {
            console.log("display updated")
            document.getElementById("display").setAttribute("placeholder", i)
        }

        
    }
    


document.getElementById("display").setAttribute("placeholder", temp)
console.log(entries)
    
// end of calculate()
}









//switch
    // X to *
    // divide symbol becomes /
    // =, push temp to entries, perform calculate
        

    // var nt = Number(entries[0]);
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
