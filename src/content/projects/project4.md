---
title: "Post App"
description: "Een webapp waarin je posts online kunt zetten en beheren"
stack: "MongoDB + Express.js + React.js + Node.js + Typescript"
pubDate: "3 februari 2023"
heroImage: "/prg6.png"
---

Voor programmeren 6 kreeg ik de opdracht om een webapp te maken met gebruik van de MERN tech stack. De mern stack bevat MongoDB, Express.js, React.js en Node.js. De opdracht bestond uit 2 delen: de back-end en de front-end. Wat je precies kon posten op je webapp was zelf te bepalen. Ik zelf had gekozen voor een vrij platform met "posts" Een posts bevat een gebruikersnaam, titel en beschrijving.

Tijdens het eerste deel kregen we de opdracht om een RESTful webserver te maken met Express.js Node.js en MongoDB, hiervoor kregen we onze eige Ubuntu server om dit op de doen (VPS server) In principe was de opdracht om een API te maken die voeldoet aan RESTful richtlijnen: de api moest aangestuurd worden met HTTP requests zoals GET, POST, DELETE en DELETE. Verder moest de API ook de juiste responses terug geven zoals 200: succes, 404 not found, 500 server error etc. De back-end hield in:

- CRUD (Create, Read, Update, Delete)
- Connectie met een MongoDB voor het opslaan van de posts
- Pagination, het inladen van max. 12 posts met pagina
- Details in kunnen laden per post (collectie weergaven en detail weergave)

Voor het tweede deel van deze cursus was het tijd voor de front-end. Dit diende gemaakt te worden met React, een Javascript framework. Ik heb toen ook gekozen om React te combineren met Typescript en Vite. Typescript zorgt ervoor dat je minder "domme" fouten maakt doordat het type-checking toevoegd aan Javascript. Dit heeft mij heel erg geholpen tijdens het programmeren, doordat het mij bijvoorbeeld beter liet nadenken over welke soort types in welke functies gaan, en welke types eruit komen. Vite heeft mij erg geholpen doordat je ermee gemakkelijk een React + Typescript project kan beginnen. Verder bevat het een live server en een manier om je React project te "builden" zodat het online gezet kan worden.

De front-end van deze webapp moest een gebruiksvriendelijke en professioneel uitziende UI bevatten voor het interacteren met de API die we hadden gemaakt in het eerste deel van de opdracht. Verder diende React vollop gebruikt te worden, door onderandere UseState variables te gebruiken in combinatie met Components. Een aantal features van de front-end:

- Een gebruiksvriendelijke en professionele UI gemaakt met puur CSS
- Overzicht pagina met een form om posts toetevoegen
- Detail pagina waar posts geupdate kunnen worden
- Navigatie om door de pagina's met posts te kunnen gaan
- Hover over een post om hem te verwijderen

Voor een volledige uitleg en visuele demonstratie van de webapp, klik [hier](https://youtu.be/cJ7AANP0Deg) voor de video
