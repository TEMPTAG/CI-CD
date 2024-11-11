## <a name="top"></a>

# Continual Integration Continual Deployment

## GitHub Actions CI/CD Setup

---

![GitHub License](https://img.shields.io/github/license/TEMPTAG/CI-CD?label=License)

## Description

This project demonstrates the implementation of a CI/CD pipeline using GitHub Actions, Cypress for component testing, and automatic deployment to Render. The application is a full-stack coding quiz built using the MERN (MongoDB, Express, React, Node.js) stack, and TypeScript for server-side logic.

Screenshot of the deployed application on load:
![Rendered Application Screenshot](/assets/readme_assets/applicationScreenshot.jpg)

[Visit the Deployed Application](https://ci-cd-epzt.onrender.com/)

Screenshot of the

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)
- [License](#license)

---

## Features

- Full-stack application with a MERN stack.
- Component tests using Cypress.
- Continuous Integration with GitHub Actions for testing.
- Continuous Deployment to Render when changes are merged into the main branch.
- TypeScript integration for the server-side code.

---

## Technologies Used

- Node.js (v22.10.0)
- Bun (v1.1.0)
- MongoDB (v5.0)
- Express (Server-side framework)
- React (Client-side framework)
- TypeScript (Strongly-typed JavaScript)
- Vite (Front-end build tool)
- Cypress (End-to-end and component testing framework)
- Render (Cloud hosting service)

---

## Installation

**To install this project locally, jump into your terminal application and please follow these steps**:

1. **Clone the `CI-CD` repository**:

   ```bash
   Using HTTPS:
   git clone https://github.com/TEMPTAG/CI-CD.git

   Using SSH:
   git clone git@github.com:TEMPTAG/CI-CD.git

   Using GitHub CLI:
   gh repo clone TEMPTAG/CI-CD
   ```

2. **Navigate into the `CI-CD` directory you just cloned down**:

   ```bash
   cd CI-CD
   ```

3. **Install the Dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   > Create a .env file in the root directory and set up any required environment variables, such as MongoDB connection strings, if necessary.

5. **Seed the Database**:

   ```bash
   npm run seed
   ```

6. **Run the application**:
   ```bash
   npm start
   ```
   > The application will run locally on http://localhost:3001

---

## Usage

**To deploy the application to Render, follow these steps**:

1. Set up a Render service and configure it to pull the repository from GitHub.
2. Disable Auto-Deploy and get the Render Deploy Hook URL.
3. Configure GitHub Actions by adding the deploy hook URL as a secret in the repository settings.

Checking Tests results:
![Screenshot of Checking Tests Results on GitHub](/assets/readme_assets/checkingTests.jpg)

Deploy To Render results:
![Screenshot of Deploy To Render Results on GitHub](/assets/readme_assets/deployTests.jpg)

---

## Contributing

![GitHub contributors](https://img.shields.io/github/contributors/TEMPTAG/CI-CD?color=green) ![GitHub commit activity](https://img.shields.io/github/commit-activity/t/TEMPTAG/CI-CD)

OH. MY. GOODNESS. Collaborations are amazing. Share ideas, code, etc. with others is the best way to share knowledge, mutual enthusiasms, and a lot of times we make cool friends along the way. I welcome contributions in many ways, shapes, and forms:

- [Email Me](mailto:iansterlingferguson@gmail.com) and just plain tell me what you like, do not like, would like to see changed... just give me a compliment before laying it on me
- FORK IT ALL - create a fork, clone it down, mess it up, do the neato commits and comments, push it back, test it at least a million times, then submit a pull request for me to review and merge into the project if I think you are cool (and the code is cool too) - but again, the nice thing to do would be emailing me first and telling me your intentions... and don't forget the compliment part

Something, something... Have your people call my people. And by call, I mean email - who answers the phone these days?

---

## Questions

Have questions about this project? Want to collaborate? Eager to discuss conspiracy theories or debate why your favorite car is not as cool as you think? [Email Me](mailto:iansterlingferguson@gmail.com) — just do not call, because I probably will not answer.

Did this project make your life better in any way, shape, or form? Check out my other exceptionally rare moments of lucidity on my [GitHub Profile](https://github.com/TEMPTAG)

---

## License

This project is covered under the MIT License. The details of the MIT License can be found on their site [HERE](https://opensource.org/licenses/MIT). You can also see the full details of the [LICENSE](./LICENSE) for this specific project in the linked file.

<div align="center">
<em>Copyright © 2024 Ian Ferguson - powered by caffine, love, and a little bit of fun</em>

[Back to top](#top)
