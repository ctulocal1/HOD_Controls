function slideshow (imageArray) {
  let container=document.createElement(div);
  container.id='slideshow';
  for (filename in imageArray) {
    let img=document.createElement(img);
    img.src=filename;
    img.addClass='slide';
    container.appendChild(img);
  }
  let res_disp=document.getElementById('res_disp');
  res_disp.innerHTML='';
  res_disp.appendChild(container);
  $("#slideshow > img:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > img:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  }, 3000);
}
