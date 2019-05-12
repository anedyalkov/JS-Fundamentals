function solve() {
    let firstInputValue = document.getElementById("str1").value;
    let secondInputValue = document.getElementById("str2").value;
    let outputElement = document.getElementById("result");
    console.log(firstInputValue);
    console.log(secondInputValue);

    let firstInputValueAsArr = firstInputValue
        .toLowerCase()
        .split(" ")
        .filter(w => w);

    let result = firstInputValueAsArr
        .map((word, index, arr) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join("");
    if (
        secondInputValue !== "Camel Case" &&
        secondInputValue !== "Pascal Case"
    ) {
        result = "Error!";
    } else if (secondInputValue === "Camel Case") {
        result = result.charAt(0).toLowerCase() + result.slice(1);
    }
    outputElement.textContent = result;
}
