document.addEventListener("DOMContentLoaded", function () {
    const resumeButtons = document.querySelectorAll(".resume-button");
    resumeButtons.forEach(button => {
        button.addEventListener("click", function () {
            window.open('resume.pdf', '_blank');
        });
    });
});