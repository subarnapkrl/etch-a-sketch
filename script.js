const container=document.querySelector('#container');
const gridItem=document.querySelectorAll('.grid-item');



function createDiv(rows,columns)
{
    
    for(let i=0;i<(rows*columns);i++)
    {
        let squareDiv=document.createElement('div');
        squareDiv.innerText=(i+1);
        
        squareDiv.style.backgroundColor="white";
        squareDiv.style.height="50px";
        squareDiv.className="grid-item";
        container.appendChild(squareDiv);

        squareDiv.addEventListener('mouseover',()=>{
            squareDiv.style.backgroundColor="black";
            squareDiv.style.color="white";
            console.log(squareDiv);
        })

        squareDiv.addEventListener('mouseout',()=>{
            squareDiv.style.backgroundColor="white";
            squareDiv.style.color="black";
            console.log(squareDiv);
        })
    }
    
}
createDiv(16,16);


