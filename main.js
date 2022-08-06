function add() {
  if (document.getElementById("toaster-wrapper")) {
    const wrapper = document.getElementById("toaster-wrapper");
    const toasterContainer = document.createElement("div");
    toasterContainer.id = "toaster-container";
    toasterContainer.className = "toaster-container";
    const imageSection = document.createElement("img");
    imageSection.setAttribute("src", "./shilpa.jpg");
    imageSection.className = "toaster-image";
    toasterContainer.appendChild(imageSection);
    const toasterContent = document.createElement("div");
    toasterContent.className = "toaster-content";
    toasterContainer.appendChild(toasterContent);
    const title = document.createElement("span");
    title.className = "toaster-title";
    title.textContent = "Title";
    toasterContent.appendChild(title);
    const message = document.createElement("span");
    title.className = "toaster-message";
    title.textContent = "testing message";
    toasterContainer.appendChild(message);
    wrapper.appendChild(toasterContainer);
    return;
  }

  function removeChildrendiv() {
    const wrapper = document.getElementById("toaster-wrapper");
    const children = document.getElementById("toaster-wrapper").children;
    Object.values(children).shift().style.transition =
      "opacity " + 1000 + "s ease";
    Object.values(children).shift().style.opacity = 0;

    console.log("childrent", Object.values(children).shift());
    // for removing the toaster child from the toaster-wrapper
    wrapper.removeChild(Object.values(children).shift());
    // for removing the toaster wrapper after removing all the toaster container
    if (document.getElementById("toaster-wrapper") && children.length === 0) {
      document.body.removeChild(wrapper);
      clearInterval(myInterval);
    }
  }

  const myInterval = setInterval(removeChildrendiv, 3000);

  //   at the initial if we don't have the toaster-wrapper we append the toaster-wrapper in body
  if (!document.getElementById("toaster-wrapper")) {
    const toasterWrapper = document.createElement("div");
    toasterWrapper.id = "toaster-wrapper";
    toasterWrapper.className = "toaster-wrapper";
    document.body.appendChild(toasterWrapper);
    add();
    return;
  }
}
