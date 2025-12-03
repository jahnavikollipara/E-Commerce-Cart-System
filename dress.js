function processTryOnWithAPI() {
  // Manual overlay fallback. Works if 'selectedDress' is a transparent PNG!
  const ctx = canvas.getContext('2d');
  const pic = new Image();
  pic.src = snapshotData;
  pic.onload = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
    const dressImg = new Image();
    dressImg.crossOrigin = "Anonymous";
    dressImg.src = selectedDress;
    dressImg.onload = function() {
      // Adjust placement and scaling as necessary for your UI/camera
      ctx.drawImage(dressImg, canvas.width*0.22, canvas.height*0.36, canvas.width*0.56, canvas.height*0.48);
      preview.src = canvas.toDataURL('image/png');
    }
  }
}
