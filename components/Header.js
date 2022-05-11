function navBarLoad(page){
    let html = [
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
    document.getElementById("header").innerHTML += html;
    document.getElementById(page).className += " active";
}
/*
        <h1><span style={{color:"var(--main)"}}>Gabriel's</span> Website</h1>
        <a href="../">Home</a>
        <a href='https://github.com/GabrielGagn0n'>
            <img src={github} alt="Github" width={50} height={50} />
        </a>*/