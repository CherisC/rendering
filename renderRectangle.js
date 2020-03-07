//Still wrapping my head around rendering. Like understanding where to put certain functions. //
//Getting comfortable with template literals and using placeholders//
//Wanted to get the rectangle centered but honestly got frustrated and walked away from it//
//The video James made is very helpful. I'm still going thru it, rewinded & pausing to make sure I get it//

function renderRectangle(rectangle) {
    return `
        <div class="text-center mt-5">
            <div style="width: ${rectangle.width}px; height: ${rectangle.height}px; background-color: ${rectangle.color}">
            </div>
        </div>
    `
}

function rectangle() {
    //variable created for rectangle body//
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"

    
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}

