async function loadMessage(){

    const res = await fetch("http://localhost:5000/api/message");

    const data = await res.json();

    document.getElementById("message").innerText = data.message;

}