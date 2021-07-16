let input1 = document.getElementById('color1'),
    input2 = document.getElementById('color2'),
    body = document.getElementById('body'),
    code = document.getElementById('code'),
    color1 = "#000046", color2 = "#1CB5E0";


    input1.addEventListener("input", () =>{

        color1 = input1.value;
        body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;
        codeGenerator();
 
    });

    input2.addEventListener("input", () =>{

        color2 = input2.value;
        body.style.background = `linear-gradient(to right, ${color1} , ${color2})`;
        codeGenerator();

 
    });

let codeGenerator = () => {
    code.textContent = `your code is: background: linear-gradient(to right, ${color1} , ${color2})`;
};