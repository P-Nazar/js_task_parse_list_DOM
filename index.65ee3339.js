var t,e=document.querySelectorAll("li");t=[],e.forEach(function(e){var a={name:e.textContent.trim().split(" ")[0],position:e.getAttribute("data-position"),salary:e.getAttribute("data-salary"),age:e.getAttribute("data-age")};t.push(a)});var a=document.querySelector("ul"),r=Array.from(e).sort(function(t,e){var a=+t.getAttribute("data-salary").slice(1).replaceAll(",","");return+e.getAttribute("data-salary").slice(1).replaceAll(",","")-a});a.innerHTML="",r.forEach(function(t){var e=document.createElement("li");e.textContent="".concat(t.textContent.trim().split(",")),a.appendChild(e)});
//# sourceMappingURL=index.65ee3339.js.map