function solve() {
    let submitBtn = document.getElementsByTagName('button')[0];
    let searchBtn = document.getElementsByTagName('button')[1];
    submitBtn.addEventListener('click', submit);
    searchBtn.addEventListener('click', search);

    function submit() { 
        event.preventDefault();

        let userTopics = [];
        let username = document.querySelectorAll('input[type = "text"]')[0].value;
        let password = document.querySelector('input[type = "password"]').value;
        let email = document.querySelectorAll('input[type = "text"]')[1].value;

        let checkboxes = Array.from(document.querySelectorAll('input[type = "checkbox"]'));

        for (let checkbox of checkboxes) {
            if (checkbox.checked) {
                userTopics.push(checkbox.value)
            }
        }

        let tr = document.createElement('tr');
        let tdUsername = document.createElement('td');
        tdUsername.innerHTML = username;
        let tdEmail = document.createElement('td');
        tdEmail.innerHTML = email;
        let tdTopics = document.createElement('td');
        tdTopics.innerHTML = userTopics.join(' ');

        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTopics);

        document.getElementsByTagName('tbody')[0].appendChild(tr);
    }

    function search() {
        let str = document.querySelectorAll('input[type = "text"]')[2].value;
        let table = Array.from(document.querySelectorAll('tbody tr'));

        for (let tr of table) {
            tr.style.visibility = 'hidden';
        }

        for (let tr of table) {
            console.log(tr.textContent);
            if (tr.textContent.includes(str)) {
                tr.style.visibility = 'visible';
            }
        }
    }
}