// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var size = document.querySelector('#sizePicker');
var table = document.querySelector('#pixelCanvas');



function makeGrid(event) {
  event.preventDefault();
  // To clear the previous grid.
  table.innerHTML = "";
  
  var hight = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
  //Nested loop to create the grid.
  for(var i=0; i<hight; i++){
    var row = document.createElement('tr');
    table.appendChild(row);

    for(var y=0; y<width; y++){
      var c = document.createElement('td');
      // An event listener to fill the cells with one click.
      c.addEventListener('click', function(){
           var color = document.querySelector('#colorPicker').value;
           this.style.backgroundColor = color;
      });
      // An event listener to clear the cells with a double click.
      c.addEventListener('dblclick', function(){
        this.style.backgroundColor = 'white';
      });
      row.appendChild(c);
    }
  }

}



size.addEventListener('submit', makeGrid);


