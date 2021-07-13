console.log("x-x");
var url = "assets/database.json";

var jsonFile = new XMLHttpRequest();
jsonFile.open("GET", url, true);
jsonFile.send();

jsonFile.onreadystatechange = function () {
  if (jsonFile.readyState == 4 && jsonFile.status == 200) {
    var json = JSON.parse(jsonFile.responseText);
    var id = getUrlVars()["id"];
    var entry = json[id - 1];

    console.log(json);

    console.log("entry", id - 1);
    console.log("json", json[13]);

    var h2 = document.createElement("h2");
    h2.innerHTML = entry.title;
    document.getElementById("head").appendChild(h2);

    var p = document.createElement("p");
    p.innerHTML = entry.short;
    document.getElementById("head").appendChild(p);

    var gallery = entry.images;
    var row = document.createElement("div");
    row.classList.add("row");

    gallery.forEach((entryImage) => {
      const regX = /\.[0-9a-z]+$/i;
      const extension = entryImage.match(regX);

      var column = document.createElement("div");
      column.classList.add("column");
      column.classList.add("content");
      column.classList.add("center");

      let link;
      let image;

      switch (extension[0]) {
        case ".mp4":
        case ".wav":
          link = document.createElement("a");
          image = document.createElement("img");

          link.href = `./images/${entryImage}`;
          link.target = "_blank";
          link.style = "border-bottom: none !important";

          image.src = "./assets/images/video.png";
          image.style = "max-width: 50%; max-height: 50%";

          column.appendChild(link);
          link.appendChild(image);
          break;
        case ".pdf":
          link = document.createElement("a");
          image = document.createElement("img");

          link.href = `./images/${entryImage}`;
          link.target = "_blank";
          link.style = "border-bottom: none !important";

          image.src = "./assets/images/pdf.png";
          image.style = "max-width: 50%; max-height: 50%";

          column.appendChild(link);
          link.appendChild(image);
          break;
        default:
          image = document.createElement("img");

          image.src = `./images/${entryImage}`;
          image.classList.add("imgResize");

          column.appendChild(image);
          break;
      }

      //fix image.click( () => window.open(image.src,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1'));

      row.appendChild(column);
    });
    document.getElementById("head").appendChild(row);

    var description = document.createElement("p");
    description.innerHTML = entry.description;
    document.getElementById("description").appendChild(description);
  }
};

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(
    /[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
      vars[key] = value;
    },
  );
  return vars;
}
