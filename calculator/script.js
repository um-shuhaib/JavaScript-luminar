
        function buttonClick(e){
            value = e.target.value
            // document.getElementById("display").value += value
            // document.querySelector("#display").value += value      // alternative ways
            display.value += value     // display is id, 1st value is keyword and 2nd value is var
        }

        function result(){
            valuess = document.getElementById("display").value 
            resultss = eval(valuess)
            document.getElementById("display").value = resultss
        }

        function cleard(){
            document.getElementById("display").value = ""
        }