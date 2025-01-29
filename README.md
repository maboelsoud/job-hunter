# Job Hunter

Job Hunter is a web application that helps you track your job applications and manage your communications.  It uses Firebase for authentication and database storage, and leverages the Gmail API to fetch email data.  The user interface is built with React and Mantine.

![UI overview](images/screenshot.png)

## Features

*   **Job Application Tracking:**  Track the status of your job applications, including employer, position, application date, interview dates, and actions to take.
*   **Email Integration:**  Integrates with Gmail to fetch relevant emails related to your job applications.
*   **User Authentication:** Secure user authentication using Firebase Authentication with options to sign in with Google, LinkedIn, and Email/Password.
*   **Responsive Design:** The application adapts to various screen sizes for optimal usability on desktops and mobile devices.
*   **Data Management:** Efficiently manages and displays job application and email data.


## Technologies Used

*   **Frontend:** React, Mantine UI, Firebase 
*   **Backend:** Node.js (Express.js), TypeScript, Firebase Admin SDK, Google APIs (Gmail API, Google People API)
*   **Database:** Firestore


## Installation

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/maboelsoud/job-hunter
    ```

2.  **Navigate to the Project Directory:**

    ```bash
    cd job-hunter
    ```

3.  **Install Dependencies for the parent repo and the client and server repos:**

    ```bash
    npm ci
    cd server && npm ci
    cd client && npm ci
    ```

4.  **Set up Environment Variables:**  Create a `.env` file (add `.env` to your `.gitignore`) in the root of your project 

Create a `.env` file (add `.env` to your `.gitignore`) in the server repo

```bash
touch server/.env
```
containing the following.  These can be obtained from the firebase and Google Cloud Console.  **Never check sensitive data like this into version control.**

```bash
CLIENT_ID_GMAIL="your-google-client-id"
CLIENT_SECRET_GMAIL="your-google-client-secret"
GEMENI_API_KEY="your-gemini-api-key" # obtained from https://aistudio.google.com/app/apikey
GOOGLE_CLOUD_PROJECT="your-firebase-project-name" # Firebase project name, obtained from the firebase console. Do not commit this to your repo.
FIREBASE_PRIVATE_KEY="your-firebase-database-private-key" # Firebase private key, obtained from the firebase console. Do not commit this to your repo.
```

5.  Start the Development Server:
```bash
npm run start
```
This will start both the frontend and backend development servers concurrently.

## Usage
- Sign In: Sign in using Google, LinkedIn, or your email address and password.
- View Job Statuses: The application displays your job applications with filters.
- View Emails: Use the tabs to switch between job statuses and emails.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

License
Copyright (c) 2024-2025 Mohamed Abo El Soud.

Job Hunter is made available under the terms the MIT License.

See the [LICENSE-MIT](https://github.com/maboelsoud/job-hunter/blob/main/LICENSE) file for license details.