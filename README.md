# Inditex Challenge 🦸

The project consists of a SSR web application built with NextJS and Sass. We use the Marvel API to fetch and display data from various characters in the Marvel Universe and their features.

[SuperHero Live Demo](https://inditex-challenge-66kixvc3jq-lm.a.run.app/)

## Quick Start for Developers

### Requirements
- NodeJS (Version 20)
- Yarn

### Installation Steps
```bash
yarn install
```
### Marvel API
To access the superhero data from Marvel, registration is required on their development portal. After registration, you will receive two keys: a public one and a private one. Both are indispensable for this project. Register here: [Marvel's Development Portal](https://developer.marvel.com/)

### Marvel API's host configuration
In order to make successful requests to the Marvel API, it is necessary to attach an authorized or referral host. Follow [this link](https://developer.marvel.com/account) and add the domain where your application is deployed. Make sure to add a domain for local testing (`marvel.yourdomain.local`).

Add the following line to the `/etc/hosts` file for it to work properly: `127.0.0.1 marvel.yourdomain.local`

### Creation of the .env file
Set a new .env file to include the following environment variables (you can refer to .env.template):
- `NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY` (*) public key obtained from Marvel's developer portal
- `NEXT_PUBLIC_MARVEL_PUBLIC_API_URL` (*) Marvel API url
- `MARVEL_PRIVATE_API_KEY` (*) private key obtained from Marvel's developer portal

## Project Structure
The application is based on the app-router modality of NextJS. It includes the `/app` directory for route management and the composition of layouts and page components.

Directory definition:
- `/components`: It houses business-agnostic and generic independent components like a button
- `/pods`: Contains logical information divided into different areas, such as interfaces, utilities, contexts, services
- `/scenes`: Includes components with business logic, where we usually make API calls
- `/theme`: Stores all .scss files, including global styles and CSS variables for theming

### Scripts
- `dev`: Starts application in development mode
- `build`: Generates a build of the application in production mode
- `start`: Starts the application in SSR production mode
- `lint`: Runs linting to verify code style
- `test`: Runs tests to verify application functionality,
- `playwright`: Runs e2e tests to verify app flows 
- `playwright:ui`: Runs e2e tests to verify app flows in interactive mode 

### Component Development
Proper separation of responsibilities between components is essential. This allows creating more maintainable, versatile components and provides a better development experience.

### Fetching
In this project we use [SWR](https://swr.vercel.app/) as a fetcher to simplify data recovery processes.

## Docker
The application includes a Dockerfile for deployment. With Docker installed, run the following commands to start the application:

```bash
docker build -t superhero:0.0.1 .
```

```bash
docker run --env-file .env -p 80:80 superhero:0.0.1
```
## License
MIT License. This page was generated non-profit.

## References
All visual material on the page is provided by [Marvel](https://marvel.com)