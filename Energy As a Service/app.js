const activePage = window.location.pathname;
const navLinks = document.querySelectorAll(".Nav a").forEach((link) => {
  // console.log(link.href);
  if (link.href.includes(`${activePage}`)) {
    console.log(`${activePage}`);
    link.classList.add(`active`);
  }
});

const sideLinks = document.querySelectorAll(".Side_Menu a").forEach((sLink) => {
  // console.log(link.href);
  if (sLink.href.includes(`${activePage}`)) {
    console.log(`${activePage}`);
    sLink.classList.add(`active`);
  }
});
