const container=document.querySelector('#container');
const gridItem=document.querySelectorAll('.grid-item');



function createDiv(rows,columns)
{

    while(document.querySelector("button")!=null)
    {
        document.querySelector("button").remove();
    }
    
    for(let i=0;i<(rows*columns);i++)
    {
        let squareDiv=document.createElement('div');
        // squareDiv.innerText=(i+1);
        
        squareDiv.style.backgroundColor="white";
        squareDiv.style.height="50px";
        squareDiv.className="grid-item";
        container.appendChild(squareDiv);

        squareDiv.addEventListener('mouseover',()=>{
            squareDiv.style.backgroundColor="black";
            
            console.log(squareDiv);
        })

        

        

        
    }
    makeButton();
    
}
createDiv(16,16);


function makeButton()
{
    const buttonDiv=document.querySelector('#button');

    const resetButton=document.createElement("button");
    resetButton.textContent="RESET!";
    resetButton.style.margin="20px";
    resetButton.className="rst-btn";
    buttonDiv.appendChild(resetButton);


    resetButton.addEventListener('click',()=>{
        document.querySelectorAll('.grid-item').forEach(e=>e.remove());
    
    let userInputGrid=prompt("Please Enter the number of grid squares per side (MAXIMUM:100)");
    if(userInputGrid>100)
    {
        alert('Error!');
        return;
    }
    rows=userInputGrid;
    columns=userInputGrid;
    createDiv(rows,columns);
    
    })




}


