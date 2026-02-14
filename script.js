function loadProject(path) {
    const frame = document.getElementById("projectFrame");
    const welcome = document.getElementById("welcomeScreen");

    welcome.style.display = "none";
    frame.style.display = "block";
    frame.src = path;
}
