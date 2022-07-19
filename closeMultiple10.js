// Return the closest number multiple of 10

function closeMultiple10(num)  {
    let m = Math.round(num / 10) * 10
    console.log(m);
    return m ;
  };

  closeMultiple10(25)
  closeMultiple10(33)
  closeMultiple10(21)