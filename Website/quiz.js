window.addEventListener('load', function(event)
{
    //wait for page to load, then run fuction;
    sendContactDetails()
})
function sendContactDetails(){
    //get form element
    const form = document.getElementById('contact-form')

    //when submit button pressed
    form.addEventListener('submit', (event)=>{
        event.preventDefault()
        console.log("Prevented default action")

        const formData = new FormData(form)

        const data = Object.fromEntries(formData.entries())
        
        console.log("formData", data)
        calculateScore(data);
    }
    )
}

function calculateScore(data){
    const name = data.Firstname
let Q1result = "result"
let Q2result = "result"
let Q3result = "result"

let Q1A = false
let Q2A = false
let Q3A = false

const element=document.getElementById("contacts")

    const Question1 = data.Q1
    if(Question1 === "A")
    {
        Q1result = "Correct!"
        Q1A = true
    }
    else{
        Q1result = "False"
    }
    console.log("Your first answer "+ Question1 +" " + "was ... " + Q1result )

    const Question2 = data.Q2

    if(Question2 === "B")
        {
            Q2result = "Correct!"
            Q2A = true
        }
        else{
            Q2result = "False"
        }
    console.log("Your Second answer " + Question2 +" "+ "was ... " + Q2result )

    const Question3 = data.Q3
    if(Question3 === "C")
        {
            Q3result = "Correct!"
            Q3A = true
        }
        else{
            Q3result = "False"
        }
    console.log("Your third answer " + Question3 +" "+ "was ... " + Q3result )


    if(Q1A && Q2A && Q3A)
    {
        console.log(name + " you are a WINNER WINNER CHICKEN DINNER")

        element.remove();
        document.getElementById("quiz-results").style.visibility = "visible";
        document.getElementById("quiz-results").innerHTML = name + ", You answered wisely... CONGRATULATIONS!!!";

        

    }
    else
    {
        console.log(name + " is a loo-hoo ser-herrrrrr");
        element.remove();
        document.getElementById("quiz-results").style.visibility = "visible";
        document.getElementById("quiz-results").innerHTML = name + ", You answered poorly...";

        //if(Q1result = "Correct!"){document.getElementById("F1Q").style.backgroundColor = "lightred";}
        //else if(Q1result = "False"){document.getElementById("F1Q").style.backgroundColor = "darkred";}
        //
        //if(Q2result = "Correct!"){document.getElementById("SEGAQ").style.backgroundColor = "lightblue";}
        //else if(Q2result = "False"){document.getElementById("SEGAQ").style.backgroundColor = "darkblue";}
        //
        //if(Q3result = "Correct!"){document.getElementById("treeQ").style.backgroundColor = "lightgreen";}
        //else if(Q3result = "False"){document.getElementById("treeQ").style.backgroundColor = "darkgreen";}
    }
 
    
}