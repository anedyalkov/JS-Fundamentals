function solve() {
    let btn = document.getElementsByTagName('button')[0]
        .addEventListener('click', function () {
            let input = document.getElementById('input').value;
           
            let pattern = /[0-9]+/g;
            let numberAsString = input.match(pattern)[0];
            input = input.slice(numberAsString.length);

            let str = input.substr(0, +numberAsString);
            let splitter = str[str.length - 1];

            let result = input.split(splitter).filter((x) => x);
            let firstStr = result[0];
            let secondStr = result[1];

            let regex = new RegExp(`[${firstStr}]`, 'g');
            // let regex = new RegExp(`[*0-9%&]`, "g");
            secondStr = secondStr.replace(regex, '');
            // secondStr = secondStr.split(regex).join('');
            secondStr = secondStr.replace(/#/g,' ');

            document.getElementById('output').textContent = secondStr;
        });
}