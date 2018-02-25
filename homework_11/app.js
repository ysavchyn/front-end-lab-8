let rootNode = document.getElementById("root"), id = 0, main = document.createElement("div"),
getTree = (treeArray, node, display = "block") => {
    let ul = document.createElement("ul");
    ul.style.display = display;
    node.appendChild(ul);
    for (let item in treeArray) {
        let li = document.createElement("li"), a = document.createElement("a"), icon = document.createElement("i"), opened = false;
        li.setAttribute("id", id);
        ul.appendChild(li);
        a.setAttribute("href", "#");
        if (treeArray[item].hasOwnProperty("folder")) {
            icon.setAttribute("class", "material-icons");
            icon.innerHTML = "folder";
            a.onclick = function(e) {
                let targetElement = document.getElementById(Number(e.target.parentElement.id));
                if (opened === true) {
                    icon.innerHTML = "folder";
                    targetElement.lastChild.style.display = "none";
                    opened = false;
                } else {
                    icon.innerHTML = "folder_open";
                    targetElement.lastChild.style.display = "block";
                    opened = true;
                }
                return false;
            }
        } else {
            icon.setAttribute("class", "material-icons file-icon");
            icon.innerHTML = "insert_drive_file";
        }
        li.appendChild(icon);
        li.appendChild(a);
        a.innerHTML = treeArray[item].title;
        let newNode = document.getElementById(id);
        id++;
        if ((treeArray[item].children === false || treeArray[item].children === null) && treeArray[item].hasOwnProperty("children")) {
            let newUl = document.createElement("ul"), newLi = document.createElement("li"), em = document.createElement("em");
            newUl.style.display = display;
            newLi.id = id;
            newNode.appendChild(newUl);
            newUl.appendChild(newLi);
            newLi.appendChild(em);
            em.innerHTML = "Folder is empty";
            id++;
            continue;
        } else {
            getTree(treeArray[item].children, newNode, "none");
        }
    }
}
rootNode.appendChild(main);
getTree(structure, main);
