 const projects = document.querySelectorAll(".project");

projects.forEach(project => {

    project.addEventListener("mouseenter", () => {
        projects.forEach(otherProject => {

            if (otherProject !== project) {
                otherProject.style.opacity = "0.35";
            }

        });
    });


    project.addEventListener("mouseleave", () => {

        projects.forEach(otherProject => {
            otherProject.style.opacity = "1";
        });

    });

});