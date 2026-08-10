(function () {
  "use strict";

  var titleEl = document.getElementById("screen-title");
  var backBtn = document.getElementById("back-btn");
  var listEl = document.getElementById("menu-list");

  // stack of { title, items } — top of stack is what's currently shown
  var stack = [{ title: APP_CONFIG.appTitle, items: APP_CONFIG.menu }];

  function render() {
    var current = stack[stack.length - 1];
    titleEl.textContent = current.title;
    backBtn.classList.toggle("show", stack.length > 1);

    listEl.innerHTML = "";
    listEl.classList.remove("screen-enter");
    void listEl.offsetWidth; // restart animation
    listEl.classList.add("screen-enter");

    if (!current.items || current.items.length === 0) {
      var empty = document.createElement("li");
      empty.className = "empty";
      empty.textContent = "কোনো আইটেম যোগ করা হয়নি";
      listEl.appendChild(empty);
      return;
    }

    current.items.forEach(function (item) {
      var li = document.createElement("li");
      li.className = "menu-item";
      li.setAttribute("role", "button");
      li.setAttribute("tabindex", "0");

      var label = document.createElement("span");
      label.textContent = item.title;
      li.appendChild(label);

      var isFolder = Array.isArray(item.children) && item.children.length > 0;

      var icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.setAttribute("class", "chevron");
      icon.innerHTML = isFolder
        ? '<path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>'
        : '<path d="M14 5l7 7-7 7M21 12H3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      li.appendChild(icon);

      function activate() {
        if (isFolder) {
          openFolder(item.title, item.children);
        } else if (item.url) {
          window.open(item.url, "_blank", "noopener");
        }
      }

      li.addEventListener("click", activate);
      li.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") activate();
      });

      listEl.appendChild(li);
    });
  }

  function openFolder(title, items) {
    stack.push({ title: title, items: items });
    history.pushState({ depth: stack.length }, "", "");
    render();
  }

  function goBack() {
    if (stack.length > 1) {
      stack.pop();
      render();
    }
  }

  backBtn.addEventListener("click", function () {
    history.back();
  });

  window.addEventListener("popstate", function () {
    goBack();
  });

  // apply theme + hero image from config
  document.title = APP_CONFIG.appTitle;
  document.getElementById("hero").style.backgroundImage =
    "url('" + APP_CONFIG.heroImage + "')";
  document
    .querySelector('meta[name="theme-color"]')
    .setAttribute("content", APP_CONFIG.themeColor);

  var creditName = document.getElementById("credit-name");
  var creditRole = document.getElementById("credit-role");
  var creditInst = document.getElementById("credit-inst");
  if (creditName) creditName.textContent = APP_CONFIG.designerName || "";
  if (creditRole) creditRole.textContent = APP_CONFIG.designerRole || "";
  if (creditInst) creditInst.textContent = APP_CONFIG.designerInstitute || "";

  render();

  // register service worker for offline app-shell + installability
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("service-worker.js").catch(function () {});
    });
  }
})();
