//Write a JavaScript program to check whether a given string contains an equal number of p's and t's.

// Define a function named equal_pt with parameter str
function equal_pt(str) { 
    // Replace all characters except 'p' with an empty string and store the result in str_p
    var str_p = str.replace(/[^p]/g, "");
  
    // Replace all characters except 't' with an empty string and store the result in str_t
    var str_t = str.replace(/[^t]/g, "");
  
    // Get the length of str_p and store it in p_num
    var p_num = str_p.length;
  
    // Get the length of str_t and store it in s_num
    var s_num = str_t.length;
  
    // Return true if the lengths of str_p and str_t are equal; otherwise, return false
    return p_num === s_num;
  }
  
  // Log the result of calling equal_pt with the given strings to the console
  console.log(equal_pt("paatpss"));
  console.log(equal_pt("paatps"));