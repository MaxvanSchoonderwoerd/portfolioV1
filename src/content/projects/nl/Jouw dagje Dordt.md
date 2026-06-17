---
title: "Jouw dagje Dordt"
description: "Een gepersonaliseerde dagjesplanner voor toeristen van Dordrecht, powered by GPT"
stack: "Vue.js + Wordpress + OpenAI"
pubDate: "2025-05-15"
heroImage: "/Images/JouwDagjeDordt/Desktop hero.png"
badge: "NEW!"
screenshotsMobile: [ "/Images/JouwDagjeDordt/Mobile Datepicker.png", "/Images/JouwDagjeDordt/Mobile Questions.png", "/Images/JouwDagjeDordt/Mobile Results.png"]
screenshotsDesktop: ["/Images/JouwDagjeDordt/Desktop questions.png"]
---
Voor mijn afstudeerproject binnen de opleiding Creative Media and Game Technologies heb ik in opdracht van Elephant en Dordrecht Marketing & Partners een persoonlijke dagplanner generator ontwikkeld voor InDordrecht. InDordrecht is een online platform dat bezoekers informeert over evenementen en activiteiten in de stad. Dordrecht Marketing wilde onderzoeken hoe personalisatie en AI ingezet kunnen worden om het bezoek aan de stad aantrekkelijker, langer en relevanter te maken voor verschillende doelgroepen.

Mijn onderzoeksvraag was:
“Welke methoden en technologieën kan Elephant inzetten om evenementen- en voorzieningsdata van InDordrecht te personaliseren en daarmee de bezoekerservaring te optimaliseren, het aantal bezoekers te vergroten en hun verblijfsduur te verlengen?”

Mijn oplossing:
Ik ontwikkelde een slimme recommender-tool, geïntegreerd in de website van InDordrecht, die met behulp van een vragenlijst en een Large Language Model (LLM) automatisch een gepersonaliseerde dagplanning genereert. De tool stelt vragen zoals met wie je op pad bent, in welke sfeer je je dag wil doorbrengen, en wat je interesses zijn. Op basis van deze antwoorden, actuele evenementen en contextdata over locaties in de stad, maakt de AI een dagplanning.

De vragen die de dagplanner stelt is vrij in te stellen door de opdrachtgevers. De context data wordt elke dag geupdate door alle locatie- en evenementendata te uploaden in een vector store. Op die manier kan het LLM middels de file_search api zelf door de context data zoeken naar passende activiteiten.

Hierbij heb ik:
- Onderzoek gedaan naar toerisme in de stad, en de rol van personalisatie en technologie hierin.
- Een volledig ontwerptraject doorlopen met doelgroeponderzoek, gebruikerstests en prototyping met iteraties.
- Iteratief getest met gebruikers (A/B-tests en usability sessies)
- De bestaande back-end van InDordrecht gekoppeld aan de OpenAI API.
- Middels de responses API, file_search API, het gebruik van een vector database en prompt engineering ervoor gezorgd dat de LLM dagplanningen kan genereren. 
- Een integratie met WordPress gebouwd om instellingen aanpasbaar te maken, zodat de opdrachtgever nooit de code in hoeft om mijn oplossing te bewerken.
- Een gebruiksvriendelijke interface ontworpen en geimplementeerd met Vue.js en SCSS.
- Productie-klaar geprogrammeerd: er is input validatie en error handling geimpleneteerd, en er zijn correcte code conventies gehanteerd.