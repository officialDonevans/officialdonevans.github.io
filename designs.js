// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()

//setting the height and width to the values inserted into the input box
$("#sizePicker").submit(function (event){
  event.preventDefault();
  height = $("#inputHeight").val();
  width = $("#inputWeight").val();
  makeGrid(height, width);
})


function makeGrid(x,y) {

// Your code goes here!
  
  //Remove all exixting Table Rows and Table Data
$("tr").remove();

//form the square
  for (var i=1; i<=x; i++){
    $("#pixelCanvas").append("<tr id=table" + i + "></tr>");
    for (var j=1; j<=y; j++) {
      $("#table" + i).append("<td></td>");
    }
}

  
  //adding and removing color from the box on click
$("td").click(function addColor(){
    color= $("#colorPicker").val();

    if ($(this).attr("style")){
      $(this).removeAttr("style")
    }else {
      $(this).attr("style", "background-color:" + color);
    }
  })
}
