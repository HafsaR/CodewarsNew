
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };
  
  domainName("https://www.google.com")


  function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }