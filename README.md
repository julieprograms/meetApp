# meetApp

# Objective
To build a serverless, progressive web application (PWA) with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

#Context

Serverless and PWAs have grown in popularity over the last few years, and they’re both
considered to be the future of web development. By combining these two concepts, your app
will not only work as a normal web application, but it will also reap the benefits of both
serverless architecture and PWAs:
● Serverless: No backend maintenance, easy to scale, always available, no cost for idle
time.
● PWAs: Instant loading, offline support, push notifications, “add to home screen” prompt,
responsive design, and cross-platform compatibility.
For this app, you’ll be using a TDD approach, where you write tests before writing the actual
functionality for your app in code. Writing tests forces you to focus on the requirements of your
application before jumping into the code. TDD relies on the repetition of a very short
development cycle, allowing you to get immediate feedback and deliver high-quality code.
Last but not least, you’ll add some graphs to your app, which will make it more visually
appealing and allow you to more easily draw conclusions from the data. A picture is worth a
thousand words, right? With a number of visualization techniques under your belt, you’ll be able
to display any type of data you want and produce a variety of output formats. Your app will allow
users to search for a city and get a list of events hosted in that city. For the data visualization
component, you’ll add two charts—one that shows how many events will take place in that city
on upcoming days, and another that visualizes the popularity of event genres in the form of a
pie chart.

#Features & Requirements

#Key Features

1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add an app shortcut to the home screen.
6. View a chart showing the number of upcoming events by city.

#Technical Requirements

● The app must be a React application.
● The app must be built using the TDD technique.
● The app must use the Google Calendar API and OAuth2 authentication flow.
● The app must use serverless functions (AWS lambda is preferred) for the authorization
server instead of using a traditional server.
● The app’s code must be hosted in a Git repository on GitHub.
● The app must work on the latest versions of Chrome, Firefox, Safari, Edge, and Opera,
as well as on IE11.
● The app must display well on all screen sizes (including mobile and tablet) widths of
1920px and 320px.
● The app must pass Lighthouse’s PWA checklist.
● The app must work offline or in slow network conditions with the help of a service
worker.
● Users may be able to install the app on desktop and add the app to their home screen
on mobile.
● The app must be deployed on GitHub Pages.
● The API call must use React axios and async/await.
● The app must implement an alert system using an OOP approach to show information to
the user.
● The app must make use of data visualization (recharts preferred).
● The app must be covered by tests with a coverage rate >= 90%
