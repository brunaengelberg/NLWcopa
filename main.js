function CreateGame(player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">

</li>
    `
}

function CreateCard(date, day, games) {
    return ` <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
        ${games}

    </ul>
</div>
    `
}

document.querySelector("#app").innerHTML = `
<header>
                <img src="./assets/logo.svg" alt="Logo da NLW">

            </header>
            <main id="cards">
               ${CreateCard("24/11", "quinta", CreateGame(`brazil`, `16:00`, `serbia`))}
               ${CreateCard("28/11", "segunda", CreateGame(`brazil`, `13:00`, `swit`))}
               ${CreateCard("02/12", "sexta", CreateGame(`brazil`, `16:00`, `camaron`))}
            </main>`