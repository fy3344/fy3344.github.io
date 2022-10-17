function postBtnClicked() {
    document.getElementById("post-container").style.display = "block";
    document.getElementById("video-container").style.display = "none";
    document.getElementById("video-btn").style.backgroundColor = "#aaaaaa";
    document.getElementById("post-btn").style.backgroundColor = "#4d1c07";
}

function videoBtnClicked() {
    document.getElementById("post-container").style.display = "none";
    document.getElementById("video-container").style.display = "block";
    document.getElementById("post-btn").style.backgroundColor = "#aaaaaa";
    document.getElementById("video-btn").style.backgroundColor = "#4d1c07";
}

