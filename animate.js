const textList = [
  '<i class="fab fa-instagram fa-lg fa-fw"></i>',
  '<i class="fab fa-github fa-lg fa-fw"></i>',
  '<i class="fab fa-twitter fa-lg fa-fw"></i>',
  "<i class='fas fa-chess-pawn fa-lg fa-fw'></i>",
];
const linklist = [
  "https://www.instagram.com/deafwired/",
  "https://github.com/deafwired",
  "https://twitter.com/deaf_wired",
  "https://www.chess.com/member/deafwired",
];
const cycle = document.getElementById("cycle");
let w = 0;
const cycleText = () => {
  cycle.setAttribute("href", linklist[w]);
  cycle.setAttribute("class", "fadeOut");
  cycle.setAttribute("style", "color:orange;");
  cycle.setAttribute("target", "_blank");
  cycle.innerHTML = textList[w];
  w = ++w % textList.length;
};
cycleText();
cycle.addEventListener("animationiteration", cycleText);
