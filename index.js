
let fx, fy,sx,sy,tx,ty;
let submitButton = document.getElementById("submitButton");
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("width", "100%");
        svg.setAttribute("height", "1000px");
        svg.setAttribute("style", "background-color: white")
        document.body.appendChild(svg);
function drawLine( a, b, c, d)
{
        var newLine = document.createElementNS('http://www.w3.org/2000/svg',"line");
        newLine.setAttribute('x1',String(a));
        newLine.setAttribute('y1',String(b));
        newLine.setAttribute('x2',String(c));
        newLine.setAttribute('y2',String(d));
        newLine.setAttribute("stroke", "black")
        svg.appendChild(newLine);
}


submitButton.onclick = function()
{

    fx = document.getElementById("firstX").value;
    fy = document.getElementById("firstY").value;
    sx = document.getElementById("secondX").value;
    sy = document.getElementById("secondY").value;
    tx = document.getElementById("thirdX").value;
    ty = document.getElementById("thirdY").value;
    fx = Number(fx);
    fy = Number(fy);
    sx = Number(sx);
    sy = Number(sy);
    tx = Number(tx);
    ty = Number(ty);
    drawLine(fx,fy,sx,sy);
    drawLine(sx,sy,tx,ty);
    drawLine(tx,ty,fx,fy);

};


