---
title: "Post App"
description: "Een webapp waarin je posts online kunt zetten en beheren."
stack: "MongoDB + Express.js + React.js + Node.js + TypeScript"
pubDate: "3 februari 2023"
heroImage: "/Images/PostsApp/prg6.png"
---

Voor Programmeren 6 kreeg ik de opdracht om een webapplicatie te maken met gebruik van de MERN tech stack. De MERN-stack bevat MongoDB, Express.js, React.js en Node.js. De opdracht bestond uit 2 delen: de backend en de frontend. Wat je precies kon posten op je webapplicatie was zelf te bepalen. Ikzelf had gekozen voor een vrij platform met "posts". Een post bevat een gebruikersnaam, titel en beschrijving.

Tijdens het eerste deel kregen we de opdracht om een RESTful webserver te maken met Express.js, Node.js en MongoDB. Hiervoor kregen we onze eigen Ubuntu-server om dit op te doen (VPS-server). In principe was de opdracht om een API te maken die voldoet aan RESTful-richtlijnen: de API moest aangestuurd worden met HTTP-verzoeken zoals GET, POST, PUT en DELETE. Verder moest de API ook de juiste responscodes teruggeven zoals 200: succes, 404: niet gevonden, 500: serverfout, etc. De backend hield in:

- CRUD (Create, Read, Update, Delete)
- Verbinding met een MongoDB voor het opslaan van de posts
- Paginering, het inladen van maximaal 12 posts per pagina
- Details in kunnen laden per post (weergave van collecties en detailweergave)

Voor het tweede deel van deze cursus was het tijd voor de frontend. Dit diende gemaakt te worden met React, een JavaScript-framework. Ik heb toen ook gekozen om React te combineren met TypeScript en Vite. TypeScript zorgt ervoor dat je minder "domme" fouten maakt doordat het type-checking toevoegt aan JavaScript. Dit heeft mij heel erg geholpen tijdens het programmeren, doordat het mij bijvoorbeeld beter liet nadenken over welke soort types in welke functies gaan, en welke types eruit komen. Vite heeft mij erg geholpen doordat je ermee gemakkelijk een React + TypeScript project kan beginnen. Verder bevat het een live server en een manier om je React-project te "builden" zodat het online gezet kan worden.

De frontend van deze webapplicatie moest een gebruiksvriendelijke en professioneel uitziende UI bevatten voor het interacteren met de API die we hadden gemaakt in het eerste deel van de opdracht. Verder diende React volop gebruikt te worden, door onder andere UseState-variabelen te gebruiken in combinatie met Components. Een aantal features van de frontend:

- Een gebruiksvriendelijke en professioneel ogende UI gemaakt met puur CSS
- Overzichtspagina met een formulier om posts toe te voegen
- Detailpagina waar posts geüpdatet kunnen worden
- Navigatie om door de pagina's met posts te kunnen gaan
- Hover over een post om hem te verwijderen

Voor een volledige uitleg en visuele demonstratie van de webapplicatie, klik [hier](https://youtu.be/cJ7AANP0Deg) voor de video.
