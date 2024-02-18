let title = prompt("enter the title: ")
let cName = prompt("enter the creator name: ")
let views = parseInt(prompt("enter the views number: "))
let monthsOld = parseInt(prompt("enter the months old: "))
let duration = prompt("video duration : ")
let thumbnail = prompt("enter your thambnail url: ")

let createCard = (title, cName, views, monthsOld, duration, thumbnail) => {
  let viewStr;
  if (views < 1000) {
    viewStr = views;
  } else if (views > 1000000) {
    viewStr = views / 1000000 + "M";
  } else {
    viewStr = views / 1000 + "K";
  }
  let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
    </div>
</div>`;

  document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
};

createCard(
  "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1",
  "Code With Harry",
  10,
  2,
  "21:31",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ"
);

createCard(
  "Your First HTML Website | Sigma Web Development Course - Tutorial #2",
  "Code With Harry",
  542000,
  4,
  "28:31",
  "https://i.ytimg.com/vi/kJEsTjH5mVg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTa4i6NuryzZhcPo7BkCK1G6PqGg"
);

createCard(
  "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
  "Code With Harry",
  339000,
  4,
  "11:12",
  "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAjPtvUdoA1O40DUFC8U1NdTYLk1g"
);
createCard(
    title,
    cName,
    views,
    monthsOld,
    duration,
    thumbnail
);
