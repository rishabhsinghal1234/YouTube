// import React from 'react';

//This fucntion wraps the words if lenght exceeds a limit.
export const Wordwrap = (StringToTruncate) => {
    if (StringToTruncate.length > 50) {
        return StringToTruncate.substring(0, 50) + "...";
    } else
        return StringToTruncate;
}

// //This Function Converts and returns the String to Title case
// function totitlecase(StringToConvert) {
//     console.log("totitlecase working");
//     return StringToConvert.replace(
//         /\w\S*/g,
//         function (txt) {
//             return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//         }
//     );
// }

// //This Function Converts and returns the String to Sentance case
// function tosentancecase(StringToConvert) {
//     console.log("tosentancecase working");
//     var theString = StringToConvert;
//     var newString = theString.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) { return c.toUpperCase() });
//     return newString;
// }
