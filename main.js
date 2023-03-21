const svgDetail = {
  success: {
    width: 24,
    height: 24,
    fill: "#00C853",
    path: "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7L19.5899 5.59L8.99991 16.17Z",
  },
  error: {
    width: 24,
    height: 24,
    fill: "#E53935",
    path: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",
  },
  warning: {
    width: 24,
    height: 24,
    fill: "#FFA000",
    path: "M11 15H13V17H11V15ZM11 7H13V13H11V7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z",
  },
};

function add(type, messageText) {
  if (document.getElementById("toaster-wrapper")) {
    const allChildren =
      document.getElementById("toaster-wrapper").childNodes.length;
    if (allChildren > 0) {
      return;
    }
    const wrapper = document.getElementById("toaster-wrapper");
    const toasterContainer = document.createElement("div");
    toasterContainer.id = "toaster-container";
    toasterContainer.className = `toaster-container ${type}`;
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

    iconSvg.setAttribute("fill", `${svgDetail[type].fill}`);
    iconSvg.setAttribute(
      "viewBox",
      `0 0 ${svgDetail[type].width} ${svgDetail[type].height}`
    );

    iconSvg.classList.add("post-icon");
    iconPath.setAttribute("d", `${svgDetail[type].path}`);
    iconSvg.style.width = "30px";
    iconSvg.id = "icon";
    iconSvg.style.cursor = "pointer";
    iconSvg.appendChild(iconPath);
    toasterContainer.appendChild(iconSvg);
    const toasterContent = document.createElement("div");
    toasterContent.className = "toaster-content";
    toasterContainer.appendChild(toasterContent);
    const title = document.createElement("span");
    title.className = "toaster-title";
    title.textContent = "Title";
    toasterContent.appendChild(title);
    const message = document.createElement("div");
    title.className = "toaster-message";
    title.textContent = `${messageText}`;
    toasterContainer.appendChild(message);
    wrapper.appendChild(toasterContainer);
    const iconSection = document.getElementById("icon");
    if (iconSection) {
      iconSection.addEventListener("click", (e) => {
        deleteChild();
      });
    }
    return;
  }

  function deleteChild() {
    const wrapper = document.getElementById("toaster-wrapper");
    if (wrapper) {
      const children = document.getElementById("toaster-wrapper").children;
      Object.values(children).shift().className = "clear-toast";
      setTimeout(() => {
        // for removing the toaster child from the toaster-wrapper
        wrapper.removeChild(Object.values(children).shift());
        // for removing the toaster wrapper after removing all the toaster container
        if (
          document.getElementById("toaster-wrapper") &&
          children.length === 0
        ) {
          document.body.removeChild(wrapper);
        }
      }, 40);
    }
  }

  function removeChildrendiv() {
    const wrapper = document.getElementById("toaster-wrapper");
    if (wrapper) {
      const children = document.getElementById("toaster-wrapper").children;
      Object.values(children).shift().className = "clear-toast";
      setTimeout(() => {
        // for removing the toaster child from the toaster-wrapper
        wrapper.removeChild(Object.values(children).shift());
        // for removing the toaster wrapper after removing all the toaster container
        if (
          document.getElementById("toaster-wrapper") &&
          children.length === 0
        ) {
          document.body.removeChild(wrapper);

          myInterval && clearInterval(myInterval);
        }
      }, 40);
    }
  }

  const myInterval = setInterval(removeChildrendiv, 3000);

  //   at the initial if we don't have the toaster-wrapper we append the toaster-wrapper in body
  if (!document.getElementById("toaster-wrapper")) {
    const toasterWrapper = document.createElement("div");
    toasterWrapper.id = "toaster-wrapper";
    toasterWrapper.className = "toaster-wrapper";
    document.body.appendChild(toasterWrapper);
    add(type, messageText);
    return;
  }
}
