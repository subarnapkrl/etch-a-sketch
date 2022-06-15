const container=document.querySelector('#container');


function createDiv(rows,columns)
{
    
    for(let i=0;i<(rows*columns);i++)
    {
        let squareDiv=document.createElement('div');
        squareDiv.innerText=(i+1);
        squareDiv.style.backgroundColor="blue";
        squareDiv.className="grid-item";
        container.appendChild(squareDiv);
    }
}
createDiv(16,16);