let rootNode = document.getElementById("root"),
    thumbnailsDiv = createAppendElement("div", rootNode),
    thumbnailsUl = document.createElement("ul");

function createAppendElement(whatElement, whatNode) {
    let element = document.createElement(whatElement);
    whatNode.appendChild(element);
    return element;
}

function getTankPreview(tanksArray, node) {
    let h1 = createAppendElement("h1", thumbnailsDiv);
    thumbnailsDiv.className = "thumbnails";
    h1.innerHTML = "Most popular tanks";
    thumbnailsDiv.appendChild(thumbnailsUl);
    window.addEventListener("hashchange", (e) => {
        getTankDetails(tanksArray, thumbnailsDiv, location.hash);
        return false;
    });
    for (let item in tanksArray) {
        let li = createAppendElement("li", node),
            imgTank = createAppendElement("img", li),
            infDiv = createAppendElement("div", li),
            imgCountry = createAppendElement("img", infDiv),
            title = createAppendElement("h4", infDiv);
        infDiv.className = "infDiv";
        imgCountry.className = "imgCountry";
        imgCountry.src = tanksArray[item].country_image;
        imgTank.src = tanksArray[item].preview;
        title.innerHTML = tanksArray[item].level + " <span title=" + tanksArray[item].model.replace(/ /g, "_") + ">" + tanksArray[item].model + "</span>";
        li.title = "Click to details";
        imgCountry.title = tanksArray[item].country;
        li.addEventListener("click", () => {
            location.hash = tanksArray[item].model.replace(/ /g, "_");
            return false;
        });
    }
}

function getTankDetails(tanksArray, node, hash) {
    node.innerHTML = "";
    node.className = "thumbnails-details";
    for (let item in tanksArray) {
        if (tanksArray[item].model === location.hash.substring(1).replace(/_/g, " ")) {
            let titleDiv = createAppendElement("div", node),
                imgCountry = createAppendElement("img", titleDiv),
                h1 = createAppendElement("h1", titleDiv),
                span = createAppendElement("span", h1),
                contentDiv = createAppendElement("div", node),
                column1 = createAppendElement("div", contentDiv),
                column2 = createAppendElement("div", contentDiv),
                h3_1 = createAppendElement("h3", column1),
                h3_2 = createAppendElement("h3", column2),
                imgTank = createAppendElement("img", column1),
                back = createAppendElement("h5", column1);
            titleDiv.className = "thumbnails-details-title";
            imgCountry.className = "imgCountry";
            contentDiv.className = "contentDiv";
            back.className = "back";
            imgCountry.src = tanksArray[item].country_image;
            imgTank.src = tanksArray[item].preview;
            imgCountry.title = tanksArray[item].country;
            h1.innerHTML = tanksArray[item].model;
            span.innerHTML = " (level " + tanksArray[item].level + ")";
            back.innerHTML = "Back to list view";
            h3_1.innerHTML = "Preview";
            h3_2.innerHTML = "Characteristic"
            column2.innerHTML += `<table>
                              <tr>
                                <td>damage</td>
                                <td>` + tanksArray[item].details.damage + `</td>
                              </tr>
                              <tr>
                                <td>breoning</td>
                                <td>` + tanksArray[item].details.breoning + `</td>
                              </tr>
                              <tr>
                                <td>attack speed</td>
                                <td>` + tanksArray[item].details.attack_speed + `</td>
                              </tr>
                              <tr>
                                <td>time of targeting</td>
                                <td>` + tanksArray[item].details.time_of_targeting + `</td>
                              </tr>
                              <tr>
                                <td>ammunition</td>
                                <td>` + tanksArray[item].details.ammunition + `</td>
                              </tr>
                            </table>`;
            back.addEventListener("click", () => {
                location.hash = "";
                return false;
            });
            break;
        }
    }
    if (location.hash === "") {
        thumbnailsUl.innerHTML = "";
        getTankPreview(tanks, thumbnailsUl);
    }
}
getTankPreview(tanks, thumbnailsUl);
