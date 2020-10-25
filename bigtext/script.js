let srcText = document.querySelector(".source");

let res1 = document.querySelector(".result1");
res1.textContent=srcText.textContent.replace(/'/igm,"\"");

let res2 = document.querySelector(".result2");
res2.textContent=srcText.textContent.replace(/(\W)'/igm,"$1\"").replace(/'(\W)/igm,"\"$1");