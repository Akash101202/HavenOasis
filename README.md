#HavenOasis

Overview
HavenOasis is a modern full-stack application that provides users with a seamless experience in managing, discovering, and reserving safe and comfortable stays. Built using React for both client and server-side rendering, Supabase as the backend database API, and Styled Components for an elegant UI, this project demonstrates the application of a complete MERN stack architecture with modern tools and practices.

Features
User authentication (login, registration)
Browse and search stays based on location and other filters
Detailed property information
Add properties as a host
Reserve properties as a guest
Responsive design for mobile and web platforms
Table of Contents
Overview
Features
Tech Stack
Setup and Installation
Project Structure
Screenshots
Contributing
License
Tech Stack
Frontend:

React (Server-Side & Client-Side Rendering)
Styled Components
Backend:

Supabase (Database API)
Other Tools:

GitHub for version control
Vercel for deployment
Setup and Installation
Prerequisites
Make sure you have the following installed:

Node.js (version 14+)
Supabase account
Git
Installation Steps
Clone the repository:

bash
Copy code
git clone https://github.com/Akash101202/HavenOasis.git
Navigate to the project directory:

bash
Copy code
cd HavenOasis
Install dependencies:

bash
Copy code
npm install
Set up the environment variables:

Create a .env file in the root directory.
Add your Supabase API keys and other required variables as shown below:
bash
Copy code
REACT_APP_SUPABASE_URL=your_supabase_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_key
Start the development server:

bash
Copy code
npm start
Open your browser and navigate to http://localhost:3000.

Project Structure
Here is an overview of the file structure for the project:

bash
Copy code
HavenOasis/
│
├── public/            # Static files and public assets
│
├── src/
│   ├── components/    # Reusable components like Navbar, Footer
│   ├── pages/         # Pages like Home, Property Details
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services for interacting with Supabase
│   ├── styles/        # Global styles and theme
│   ├── App.js         # Root component
│   └── index.js       # Entry point of the React app
│
├── .env               # Environment variables
├── package.json       # Dependencies and scripts
└── README.md          # Project documentation (this file)
Screenshots
Include some representative screenshots of your application in action.

Landing Page

###Dashboard
![{E501CF4D-4DB5-4F5E-ACE2-B87B29090AC1}](https://github.com/user-attachments/assets/4ea26d05-d6b9-437b-ae65-fa3ae1778892)

###Bookings
![{06C6F96A-50E7-44C9-AAA1-647CAF3F306B}](https://github.com/user-attachments/assets/e6c9f1d5-8e07-43b0-9c6f-7045070506ea)

###Cabins
![{56B315DA-A727-420B-B067-A2FE0D9EDAC6}](https://github.com/user-attachments/assets/5c4fa2bc-84eb-4bb2-83c3-2ec721ac362b)

###Users
![{78C1A590-901C-4298-95B9-EA5C8308EA0E}](https://github.com/user-attachments/assets/22807509-2708-4bc4-9c80-a09de2ad56fe)

###Settings
![{1C330070-1EA4-4BF2-85DD-DB058701FBC9}](https://github.com/user-attachments/assets/bc36247b-55d8-400e-a0f2-5fc66d1c96c0)

###Update Account
![{908CDBFF-276F-4450-903A-AECCDF336515}](https://github.com/user-attachments/assets/4ae2aff6-ecd0-421c-a1bc-1b65cd7d5b83)

###Dark Mode
![{A5C4E24E-BEAA-462A-99C2-935A09FA1F4A}](https://github.com/user-attachments/assets/c5b68d32-bcef-4be4-b67a-2f6d56e9bb84)


Contributing
Contributions are welcome! Here’s how you can get started:

Fork this repository.
Create a new branch for your feature or bug fix: git checkout -b my-feature
Commit your changes: git commit -m 'Add my feature'
Push to the branch: git push origin my-feature
Open a pull request.
Please ensure your changes adhere to the coding standards of this project.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to Supabase for providing a powerful backend API solution.
Special thanks to the contributors who helped improve this project.
Once you fill in the screenshots and any other relevant details, this README should give a complete overview of the project for potential users, contributors, or employers.

Let me know if you'd like to adjust anything!
