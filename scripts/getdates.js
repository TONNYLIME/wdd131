const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = new Date().getFullYear();

// Output the date the document was last modified in the second footer paragraph
// Assumes the second paragraph in the footer has an ID of "lastModified"
document.getElementById("lastModified").innerHTML = 
    `Last modified: ${document.lastModified}`;