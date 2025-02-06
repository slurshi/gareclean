document.addEventListener("DOMContentLoaded", function() {
    const serviceItems = document.querySelectorAll("#services ul li");

    serviceItems.forEach(item => {
        item.addEventListener("click", function() {
            alert(`Service Selected: ${this.textContent}\nFor pricing details, please contact us.`);
        });
    });
});
