function missingLetter(str) {
    // used a for loop for counter to go through given string characters
    for (let i = 0; i < str.length; i++) {
    //  Code of the current character
      const charCode = str.charCodeAt(i);
  
    //   So if the current character's code is not equivalent to the 1st character + number of iteration this 
    // means that a letter has been skipped
      if (charCode !== str.charCodeAt(0) + i) {
        // if current character had skipped along a code, then we subtract 1 to get the previous 
        // character and return it
        return String.fromCharCode(charCode - 1);
      }
    }
    // otherwise return undefined
    return undefined;
  }
  
  // testcases here
  missingLetter("abce")
  missingLetter("abcdefghjklmno")
  missingLetter("stvwx")
  missingLetter("bcdf")
  missingLetter("abcdefghijklmnopqrstuvwxyz")