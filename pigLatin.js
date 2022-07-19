// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    let s = str.split(' '), w = []
    s.forEach(e => {
        w.push(e.slice(1) + e.slice(0,1) + 'ay')
    });
    w.join(' ')
    console.log('w: ', w.join(' '));

  }
  pigIt('Hello world !')
  pigIt('Pig latin is cool')