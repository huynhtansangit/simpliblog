const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong, make sure ${selector} exists or typed correctly`
  );
};

// Active nav item in navbar
const navBar = document.getElementById("navbar-nav");
const navItems = navBar.getElementsByClassName("nav-item");
for (const index in navItems) {
  navItems.item(index).addEventListener("click", onClickNavItemHandler);
}
function onClickNavItemHandler() {
    const activatedItem = document.getElementsByClassName('activated');
    if(activatedItem.length>0){
        activatedItem[0].className = activatedItem[0].className.replace("activated","");
    }
   this.className+=' activated'
   const title = this.getElementsByClassName('nav-link')[0].text;
   document.title = `Simply Blog | ${title}`
}
// ---
