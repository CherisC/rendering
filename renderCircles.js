
function renderCircles(cs) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    for (var = i; i < circles.length; i++) {
// Not sure what I did wrong with the for loop. I think I broke it. Still a bit confused/unsure about placement//
    // Still wrapping my head around where functions go & which ones to use where.// 
    
    }
    function drawCircle(circles) {
        return `
     
    return `
        <div class="text-center mt-5">
            ${circlesHtml}
        </div>
    `
    

function renderCircle(c) {
    return `<div style="width: ${c.radius}px;
                        height: ${c.radius}px;
                        background-color: ${c.color};
                        border-radius: ${c.radius}px;
                        margin: 10px auto">
            </div>`
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}