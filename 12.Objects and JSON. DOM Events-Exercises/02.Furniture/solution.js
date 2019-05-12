function solve() {
    let generateBtn = document.getElementsByTagName("button")[0];
    let buyBtn = document.getElementsByTagName("button")[1];

    generateBtn.addEventListener("click", generateFurniture);
    buyBtn.addEventListener("click", buyFurniture);

    function generateFurniture() {
        let furnitureList = JSON.parse(document.getElementsByTagName("textarea")[0].value);
        console.log(furnitureList);

        for (let furniture of furnitureList) {
            let div = document.createElement("div");
            div.setAttribute("class", "furniture");

            let name = document.createElement("p");
            name.innerHTML = `Name: ${furniture.name}`;

            let img = document.createElement("img");
            img.setAttribute("src", furniture.img);

            let price = document.createElement("p");
            price.innerHTML = `Price: ${furniture.price}`;

            let decFactor = document.createElement("p");
            decFactor.innerHTML = `Decoration factor: ${furniture.decFactor}`;

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            div.appendChild(name);
            div.appendChild(img);
            div.appendChild(price);
            div.appendChild(decFactor);
            div.appendChild(checkbox);

            document.getElementById("furniture-list").appendChild(div);
        }
    }

    function buyFurniture() {
        let furnitureNames = [];
        let totalPrice = 0;
        let totalDecFactor = 0;
        let furnitures = Array.from(
            document.getElementsByClassName("furniture")
        );
        let resultTextArea = document.getElementsByTagName("textarea")[1];

        for (let furniture of furnitures) {
            let checkbox = furniture.children[4];

            if (checkbox.checked) {
                let name = furniture.children[0].textContent.split(" ")[1];
                let price = +furniture.children[2].textContent.split(" ")[1];
                let decorationFactor = +furniture.children[3].textContent.split(" factor: ")[1];
                furnitureNames.push(name);
                totalPrice += price;
                totalDecFactor += decorationFactor;
            }
        }
        let averageDecFactor = totalDecFactor / furnitureNames.length;
        resultTextArea.value += `Bought furniture: ${furnitureNames.join(", ")}\n`;
        resultTextArea.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        resultTextArea.value += `Average decoration factor: ${averageDecFactor}`;
    }
}
