let sub = document.querySelector("#sub");
let myText = document.querySelector(".my-text");

for (let i = 0 ; i < 5 ; i++) {
  let sub2 = document.createElement("input");
  sub2.type = "submit";
  sub2.value = "Delete";

  sub2.style.cssText =
    "border-radius: 5px;position: relative;top: 20%;left: 15%;margin-right: 20px;padding: 5px;background-color: rgb(233, 30, 70);text-align: center;color: rgb(255, 255, 255);font-family: 'Times New Roman', Times, serif ;";
  // console.log(sub2)

  let myText2 = document.createElement("input");
  myText2.type = "text";
  myText2.value = "";
  myText2.style.cssText =
    "    border-radius: 5px;position: relative;top: 20%;left: 15%;margin-right: 20px;padding: 5px;";
  let tasks = document.createElement("div");
  tasks.style.cssText =
    "    display: block;background-color: rgba(217, 227, 236, 0.938);height: 50px;width: 50%;margin: auto;border-radius: 5px;";
  tasks.appendChild(myText2);
  tasks.appendChild(sub2);
  document.body.append(tasks);
  myText.addEventListener("blur", function () {
    if (myText.value === "") {
      sub.preventDefault;
    } else {
      window.localStorage.setItem("value", myText.value);
      myText2.value = window.localStorage.getItem("value");
    }
  });
  sub2.addEventListener("click", function () {
    window.localStorage.removeItem("value");
    tasks.remove();
  });
}
