function load(page){
    navBar(page);
    social();
}

function navBar(page){
  let htmlNav = [
    '<div>',
    '<nav class="navbar navbar-default">',

    '<ul class="nav navbar-nav">',
    '<li id="Title"><h1><span class="homeName">Gabriel\'s</span> Website</h1></li>',
    '<li id="AboutMe" class="links"><a href="aboutme.html">About Me</a></li>',
    '<li id="Projects" class="links"><a href="projects.html">Projects</a></li>',
    '<li id="Home" class="links"><a href="index.html">Home</a></li>',
    '</ul>',

    '</nav>',
    '</div>'
  ].join('\n');
  document.getElementById("header").innerHTML += htmlNav;
  document.getElementById(page).className += " active";
}

function social(){
  let htmlsocial = [
    '<ul class="social"',
      '<li>',
        "<a href='https://github.com/GabrielGagn0n'>",
          "<img src='assets/github.png' alt='Github' class='imageSocial' />",
        "</a>",
      "</li>",
    '</ul>'
  ].join('\n');
  document.getElementById("social").innerHTML += htmlsocial;
}