const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".Tabs a").forEach(link => {

    if(link.pathname.split("/").pop() === currentPage){
        link.classList.add("active");
    }

})