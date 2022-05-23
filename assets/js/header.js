
// Initialize header and footer
$("#header").load("pages/header.html", function () {
  const list = document.getElementById("list");
  const post = document.getElementById("post");
  const pathName = window.location.pathname;
  const activatedItem = document.getElementsByClassName("activated");
  if (activatedItem.length > 0) {
    activatedItem[0].className = activatedItem[0].className.replace(
      "activated",
      ""
    );
  }
  if (pathName.includes("index")) {
    list.className += " activated";
    const title = list.getElementsByClassName("nav-link")[0].text;
    document.title = `Simply Blog | ${title}`;
  } else if (pathName.includes("post-editor")) {
    post.className += " activated";
    const title = post.getElementsByClassName("nav-link")[0].text;
    document.title = `Simply Blog | ${title}`;
  }
});
// Active nav item in navbar
