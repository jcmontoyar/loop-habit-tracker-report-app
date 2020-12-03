import React from "react";

export default function Content({ contenidos }) {
  let val = 0;

  return (
    <>
      {contenidos.map((contenido) => (
        <div className="container-fluid">
        
          <div className="row">
            {getFirst(val, contenido)}
            {getSecond(val++, contenido)}
          </div>

          <hr />
        </div>
      ))}
    </>
  );
}

function getFirst(val, contenido) {
  return val % 2 === 0
    ? getText(contenido.text, contenido.titulo)
    : getImg(contenido.image, contenido.alt, contenido.h, contenido.w);
}

function getSecond(val, contenido) {
  return val % 2 === 1
    ? getText(contenido.text, contenido.titulo)
    : getImg(contenido.image, contenido.alt, contenido.h, contenido.w);
}

function getText(text, titulo) {
  return (
    <div className="col col-12 col-md-6 my-auto">
       <h3 className="text-center title">{titulo}</h3>
      <p className="">{text}    </p>
      
    </div>
  );
}

function getImg(img, alt, width, height) {
  return (
    <div className="col col-12 col-md-6 d-flex justify-content-center">
      <img src={img} alt={alt} width={width} height={height}  className="card"/>
    </div>
  );
}
