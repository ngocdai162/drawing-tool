<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/paper.js/0.22/paper.js"></script>
<script type="text/paperscript" canvas="myCanvas">
var myPath;

export const DrawingFirst = () => {
  const onMouseDown = (event)=>{
    if (window.mode == "drawing") {
      myPath = new Path();
      myPath.strokeColor = 'black';
    }
    else if (window.mode == "erasing") {
       myPath = new Path();
       myPath.strokeColor = 'white';
       myPath.strokeWidth =  10;
    }
}

  const  onMouseDrag = (event) => {
  if (window.mode == "drawing") {
    myPath.add(event.point);
  }
  else if (window.mode == "erasing") {
    myPath.add(event.point);
  }
}
}

</script>
<script type="text/javascript">
  window.onload = function () {
      window.mode = "drawing";
      document.getElementById('toggle').onclick = function () {
          window.mode = window.mode == "drawing" ? "erasing": "drawing";
          document.getElementById('state').innerHTML = window.mode;
      };
  };
</script>
</head>
<body>
    <input id="toggle" type="button" value="toggle erase/draw"/>
    State: <span id="state">drawing</span>
    <canvas id="myCanvas" width="400" height="400"></canvas>
</body>
</html>