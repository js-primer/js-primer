function getUserInfo(userId) {
    const request = new XMLHttpRequest();
    request.open("GET", `https://api.github.com/users/${userId}`);
    request.addEventListener("load", (event) => {
        if (event.target.status !== 200) {
            console.log(`${event.target.status}: ${event.target.statusText}`);
            return;
        }
        console.log(event.target.status);
        console.log(event.target.responseText);
    });
    request.addEventListener("error", () => {
        console.error("Network Error");
    });
    request.send();
}