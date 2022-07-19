function capitalizeWord(word) {
    
    word[0].toUpperCase();
    console.log( word[0].toUpperCase() + word.slice(1));
    return word[0].toUpperCase() + word.slice(1);
  }

  capitalizeWord('hello')