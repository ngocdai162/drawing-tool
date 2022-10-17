import React, { useEffect, useState } from 'react';
import { LiterallyCanvasReactComponent } from "literallycanvas";



export const DrawingTool = () => {


const LC = require("literallycanvas");

   const [lcElm,setLcElm] = useState()


  const [images, setImages] = useState([]);

  const onInit = lc => {
    setLcElm(lc)
  };

  useEffect(()=> {
    console.log('lc',LC)
  })
   
  const onSave = () => {
    if (!lcElm) return;
    const img = lcElm.getImage();

    if (!img) return;
    try {
      const imgData = img.toDataURL();
      setImages([...images, imgData]);
    } catch (err) {
      console.log(err);
    }
  };

  const loadBackground = event => {
    if (!lcElm) return;
    const img = new Image();
    img.src = "/img/map2.png";
    let shape = LC.createShape("Image", { x: 0, y: 0, image: img, scale: 0.5 });
    lcElm.saveShape(shape);
  };

  const canvasTemp = document.querySelectorAll(".lc-drawing canvas");
  var ctx = canvasTemp[1]?.getContext('2d');
  console.log(ctx);

  
  const close = () => {
   
  

// line
ctx.beginPath();
ctx.closePath ();
  }
  

  //IMAGE
//   let img = new Image();
//   img.src = 'https://i.pinimg.com/564x/85/9f/52/859f5219ba0b8d67f399c0db5a648694.jpg';
//   img.onload = function () {
//     fill_canvas(img);       // FILL THE CANVAS WITH THE IMAGE.
//   }

//   function fill_canvas(img) {
//     // CREATE CANVAS CONTEXT.
  
//     ctx.drawImage(img, 0, 0);       // DRAW THE IMAGE TO THE CANVAS.
// }

const selectElm = document.querySelector(('[title="SelectShape"]'));
if(selectElm) {
  selectElm.style.backgroundImage = "url('https://cdn.icon-icons.com/icons2/494/PNG/512/select_icon-icons.com_48233.png')";
}

  return (
    <div style={{ padding: 10 }}>
      <div>
      <LC.LiterallyCanvasReactComponent
          onInit={onInit}
          tools={[
            LC.tools.Pencil,
            LC.tools.Eraser,
            LC.tools.Line,
            LC.tools.Rectangle,
            LC.tools.Ellipse,
            LC.tools.Polygon,
            LC.tools.Text,
            LC.tools.Pan,
            LC.tools.SelectShape,
          ]}
          imageURLPrefix="https://cdn.jsdelivr.net/npm/literallycanvas@0.5.2/lib/img"
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <button
          style={{ width: 150, margin: 10, fontSize: 14 }}
          onClick={loadBackground}
        >
          Load Map
        </button>
        <button
          style={{ width: 150, margin: 10, fontSize: 14 }}
          onClick={() => {onSave()}}
        >
          Save As Image
        </button>
        <button
          style={{ width: 150, margin: 10, fontSize: 14 }}
          onClick={() => setImages([])}
        >
          Clear Images
        </button>
        <button onClick = {() => {close()}}>close</button>
      </div>
      <ul style={{ marginTop: 10, listStyleType: "none" }}>
        {images.map((img, index) => (
          <li key={index}>
            <img src={img} onClick={(e) => {console.log(e.target)}} />
          </li>
        ))}
      </ul>
    </div>
  );
}

