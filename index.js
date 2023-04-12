let unread_icon =
  '<span class="dot" id="redDot"><i class="fa-solid fa-circle fa-2xs"></i></span>';

const unread_num = document.getElementById("unread-num");

const nodeList = document.querySelectorAll("[class=notif]");

function GetUnreadNum() {
  let count = 0;
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].innerHTML.includes(unread_icon)) {
      count++;
    }
  }
  unread_num.innerHTML = count;
}
GetUnreadNum();
function MarklAllRead() {
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = nodeList[i].innerHTML.replace(unread_icon, "");
    nodeList[i].style.backgroundColor = "var(--white)";
  }
  GetUnreadNum();
}

for (let i = 0; i < nodeList.length; i++) {
  if (nodeList[i].innerHTML.includes(unread_icon)) {
    nodeList[i].style.backgroundColor = "var(--light-gray-blue-1)";
  }
  nodeList[i].onmousedown = function () {
    nodeList[i].innerHTML = nodeList[i].innerHTML.replace(unread_icon, "");
    nodeList[i].style.backgroundColor = "var(--white)";
    GetUnreadNum();
  };
}
