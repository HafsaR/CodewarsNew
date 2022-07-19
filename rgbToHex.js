function componentToHex(c){
   
var hex = c.toString(16).toUpperCase();
return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b){
    if(r<0){
        r =  0;
      }else if(r>255){
        r=255;
      }
      
      if(g<0){
        g=0;
      } else if(g>255){
        g = 255;
      }
      if(b<0){
        b=0;
      } else if(b>255){
        b=255;
      }
    
    let h = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    console.log("Hex value: "+ h);
 return h;
}

 rgbToHex(255,255,255);
rgbToHex(0,51,255);
rgbToHex(0,0,-20);
rgbToHex(255,255,300);
rgbToHex(148,0,211);