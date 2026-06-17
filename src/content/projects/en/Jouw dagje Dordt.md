---
title: "Your day out in Dordt"
description: "A personalised day planner for tourists visiting Dordrecht, powered by GPT"
stack: "Vue.js + Wordpress + OpenAI"
pubDate: "2025-05-15"
heroImage: "/Images/JouwDagjeDordt/Desktop hero.png"
badge: "NEW!"
screenshotsMobile: [ "/Images/JouwDagjeDordt/Mobile Datepicker.png", "/Images/JouwDagjeDordt/Mobile Questions.png", "/Images/JouwDagjeDordt/Mobile Results.png"]
screenshotsDesktop: ["/Images/JouwDagjeDordt/Desktop questions.png"]
---
For my graduation project within the Creative Media and Game Technologies programme, I developed a personalised day-planner generator for InDordrecht, commissioned by Elephant and Dordrecht Marketing & Partners. InDordrecht is an online platform that informs visitors about events and activities in the city. Dordrecht Marketing wanted to explore how personalisation and AI could be used to make visiting the city more attractive, longer and more relevant for different target audiences.

My research question was:
"Which methods and technologies can Elephant use to personalise InDordrecht's event and amenity data, and thereby optimise the visitor experience, increase the number of visitors and extend their length of stay?"

My solution:
I developed a smart recommender tool, integrated into the InDordrecht website, that automatically generates a personalised day plan using a questionnaire and a Large Language Model (LLM). The tool asks questions such as who you're out with, what kind of atmosphere you want for your day, and what your interests are. Based on these answers, current events and contextual data about locations in the city, the AI creates a day plan.

The questions the day planner asks are fully configurable by the client. The context data is updated every day by uploading all location and event data into a vector store. This way the LLM can search through the context data itself via the file_search API to find suitable activities.

For this I:
- Researched tourism in the city and the role of personalisation and technology within it.
- Completed a full design process with audience research, user testing and prototyping with iterations.
- Tested iteratively with users (A/B tests and usability sessions).
- Connected InDordrecht's existing back-end to the OpenAI API.
- Used the responses API, the file_search API, a vector database and prompt engineering to enable the LLM to generate day plans.
- Built an integration with WordPress to make settings adjustable, so the client never has to touch the code to edit my solution.
- Designed and implemented a user-friendly interface with Vue.js and SCSS.
- Programmed it production-ready: input validation and error handling are implemented, and correct code conventions were followed.
