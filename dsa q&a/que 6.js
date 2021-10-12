//Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.


function isOperator(x)
{
    switch (x) {
    case '+':
    case '-':
    case '/':
    case '*':
        return true;
    }
    return false;
}

function preToPost(pre_exp)
{

    let s = [];

    let length = pre_exp.length;


    for (let i = length - 1; i >= 0; i--)
    {

        
        if (isOperator(pre_exp[i]))
        {
            
            let op1 = s[s.length - 1];
            s.pop();
            let op2 = s[s.length - 1];
            s.pop();

            
            let temp = op1 + op2 + pre_exp[i];

            
            s.push(temp);
        }

        
        else {
            
            s.push(pre_exp[i] + "");
        }
    }

    
    return s[s.length - 1];
}

let pre_exp = "*-A/BC-/AKL";
document.write("Postfix : " + preToPost(pre_exp));









