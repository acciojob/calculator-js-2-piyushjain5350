//your code here
 var ans = document.getElementById('ans');
        var input = document.getElementById('input');

        function addNum(value){
            input.value += ""+value;
        }
        function addOp(op){
            input.value += op;
        }
        function handleClear(){
            input.value = "";
        }
        function handleClick(){
            let res = eval(input.value)
            input.value = res;
        }
