# Coablt Task

This is the frontend for the Coablt Task that include Slack messaging and google auth feature. The project is built using Next.js and interacts with a backend API.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Abdev1205/cobalt-frontend.git
cd your-repo-name
```

### Install Dependencies

Install the project dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### Setup Environment Variables

Create a `.env.local` file in the root directory of the project and add the following line:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

This environment variable is used to define the base URL of the backend API. Adjust the value as needed for your setup.

### Running the Project

To run the project in development mode, use the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

This will start the Next.js development server and your application will be available at `http://localhost:3000`.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

or

```bash
yarn build
```

After building, you can start the production server with:

```bash
npm start
```

or

```bash
yarn start
```

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Contains reusable React components.
- `hooks/`: Contains custom hooks including `useSlackMessages` `useSession`.
- `public/`: Contains public assets like images.
- `styles/`: Contains CSS and SCSS files.
- `utils/`: Contains utility functions and configurations.

## Using the Application

### Sending Messages

You can send messages to Slack by typing in the input field and either clicking the "Send" button or pressing the Enter key.

### Viewing Messages

Messages from Slack will be displayed in reverse chronological order, with the newest messages at the bottom. The view will automatically scroll to the latest message when new messages are received.

### Demo

https://www.loom.com/share/8ffd88984f24439eba6161bf94d6ce4c?sid=60e4602c-8405-46ff-8448-add265d92c98
