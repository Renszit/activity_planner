
## Setup
get your api key here: https://www.weatherapi.com/
create a `.env.local` file in the root directory and add the following variables:
```
WEATHER_API_KEY=<your-api-key>
```
run npm install or yarn to install dependencies
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- See current weather for location
- See rain forecast for next 12 hours
- Task overview per person
- Task due today gets highlighted with border
- Add new tasks
- Delete tasks
- Edit tasks

## Follow up questions

Implementation:

1. What libraries did you use? What are they used for? Why did you choose them
specifically?

See Tech stack, below. I chose most of these libraries because they are the ones I am most familiar with and I knew they would allow me to build the app quickly. I am new to Tailwind CSS and wanted to use this project as an opportunity to learn it.

2. What improvements or new features would you add if you had more time to work on
the problem?

I would add a backend to store the tasks and user data. I would also add a login system so that users could have their own task lists. I would also add a feature to allow users to share their task lists with other users.

3. Which parts did you find most difficult and which parts did you spend the most time
with?

I found the task list form to be the most difficult. I spent a lot of time trying to figure out how to get the form to work with the data structure I had chosen. I also spent a lot of time trying to figure out how to get the form to work with the Tailwind CSS styling.

4. What are key things to consider when deploying this application for customer
use/production?

I would need to consider security and performance. I would also need to consider how to handle errors and how to monitor the application.

Feedback:
1. How did you find the challenge overall? Did you have any issues or have difficulties
completing?

Overall I found the challenge to be a good experience. I did not have any issues or difficulties completing it.

2. We would love to hear any suggestions or improvements you have to make this
challenge better! (Optional)

I do not have any suggestions or improvements at this time.

## Tech Stack

- Next.js
Next.js is a popular React framework for building fast and scalable web applications with server-side rendering and easy routing.

- React
React is a widely used JavaScript library for building user interfaces, providing an efficient way to create interactive and reusable UI components for web and mobile applications.

- Tailwind CSS
Tailwind CSS is a utility-first CSS framework that enables rapid and efficient web development by providing a comprehensive set of pre-built classes that can be easily composed to style user interfaces.

- Typescript
TypeScript is a strongly-typed superset of JavaScript that enhances the development experience by adding static typing, allowing for better code organization, improved tooling support, and increased maintainability of large-scale applications.

- dayjs
Day.js is a lightweight and modern JavaScript library for manipulating, formatting, and displaying dates and times in a simple and intuitive way, providing a convenient alternative to the native Date object.

- uuid
UUID (Universally Unique Identifier) is a standardized format for generating unique identifiers, commonly used in software development to ensure the uniqueness of entities or resources across distributed systems or databases, providing a high level of reliability and avoiding conflicts.
