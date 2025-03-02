const _data = [
  {
    imageUrl: ['/projects/MARD/mard.png', '/projects/MARD/mard_side.png'],
    title: "MARD - Multi-Functional AI Robot",
    description: `MARD (Multi-Functional AI Robot) is an innovative hardware project built using a Raspberry Pi 5, L298 motor driver, and OpenAI’s AI capabilities.
    Designed for seamless interaction, MARD responds to voice commands, moves autonomously, and can be controlled remotely.
    By combining speech recognition and intelligent automation, it provides an engaging and interactive user experience.`,
    githubLink: "https://github.com/Ashenoy64/MARD",
    fields: ["IOT", "AI", "RaspberryPI", "Motor Driver"],
    pinned: true,
  },
  {
    imageUrl: ['/projects/Kannon/CreateTest.png', '/projects/Kannon/NodeHealth.png', '/projects/Kannon/RealTimeTest.png'],
    title: "Kannon-1000:Distributed Load Testing System",
    description: `Kannon-1000 is a distributed load testing system built for scalability and real-time test monitoring.
    It enables users to conduct tsunami and avalanche tests while providing live status updates and performance insights.
    With a Streamlit-powered interface, users can efficiently create, manage, and track load tests in real time.`,
    githubLink: "https://github.com/Ashenoy64/Kannon-1000",
    fields: ["Kafka", "Streamlit", "Python"],
    pinned: true,
  },
  {
    imageUrl: [],
    title: "Genric AI Game Engine",
    description: `A Prototype Game Engine that can run and simulate multiple sequentially played games like Tic Tac Toe , Connect4 , etc.
    This utilizes a modified version of Monte Carlo Tree Search for the artificial intelligence baked in The game engine, this is designed to be completely modular and highly generic for extensive Modifications and CROSS IMPORTS.
    The AI is capable of playing any game that the game engine can run`,
    githubLink: "https://github.com/Ashenoy64/Generic-AI-Game-Engine",
    fields: ["C++", "TreeSearch"],
    pinned: true,
  },
  {
    imageUrl: ['/projects/EscapeQuest/Level2.png', '/projects/EscapeQuest/Level2_1.png', '/projects/EscapeQuest/Level1.png'],
    title: "Escape Quest:VR Game",
    description: `EscapeQuest is an exciting VR project that immerses you in themed escape rooms. 
    Experience the thrill of solving intricate puzzles and exploring detailed virtual environments.
     Use your VR controllers to interact with objects, navigate the game world, and uncover clues with an intuitive in-VR user interface.
     Dive into EscapeQuest for an unforgettable adventure full of challenges and fun!`,
    githubLink: "https://github.com/Ashenoy64/EscapeQuest",
    fields: ["Unity", "VR", "Blender", 'C#'],
    pinned: true,
  },
  {
    imageUrl: [ '/projects/FileStorage/dashboard.png', '/projects/FileStorage/download.png', '/projects/FileStorage/final.png'],
    title: "File Storage",
    description: `FileStorage is a lightweight and efficient web application built with Python, Streamlit, and Sockets. It enables multiple users to upload and download files simultaneously, 
    making file sharing seamless. Additionally, FileStorage allows users to turn their remote machines into storage devices, providing easy access to storage from anywhere.`,
    githubLink: "https://github.com/Ashenoy64/File-Storage.git",
    fields: ["Python", "Streamlit", "Sockets"],
    pinned: false,
  },
  
  {
    imageUrl: ['/projects/IndustryRun/home.png', '/projects/IndustryRun/play.png'],
    title: "Industry Run",
    description: `Industry Run is a fast-paced endless runner game developed using Unreal Engine 5 as part of a learning project.
    Built to explore game development concepts, it features immersive visuals, smooth mechanics, and an industrial-themed environment where players navigate obstacles in an ever-evolving world.`,
    githubLink: "https://github.com/Ashenoy64/IndustryRun",
    fields: ["Unreal", "Blender"],
    pinned: true,
  },
  {
    imageUrl: ['/projects/Trackit/dashboard.png'],
    title: "TrackIt-Stock Price Prediction Website",
    description: `TrackIt is a web application designed to provide stock price predictions.
        Built using React, Express, and MongoDB, this project offers users insights into potential stock price trends.`,
    githubLink: "https://github.com/Ashenoy64/TrackIt",
    fields: ["MongoDB", "React", "Express", "NodeJS"],
    pinned: true,
  },
  {
    imageUrl: [],
    title: "Golden Horizon Bank",
    description: `Golden Horizon Bank (GHB) is a simple banking system website built with Django and Supabase as the database.
    It allows users to create accounts, log in, and perform basic banking operations, such as transferring points to other accounts using the receiver's ID and name.
    Additionally, users can update their profiles and change passwords for account security`,
    githubLink: "https://github.com/Ashenoy64/Banking-System",
    fields: ["Django", "Python", "Postgres", "Supabase", "HTML", "CSS"],
    pinned: false,
  },
  {
    imageUrl: ['/projects/FaceDetection/home.png', '/projects/FaceDetection/result.png'],
    title: "Face Detection",
    description: `This Flask-based web app lets you upload a video and extract faces from a specific time frame.
    Just select a timestamp, and it will detect and collect faces from that frame.`,
    githubLink: "https://github.com/Ashenoy64/FaceDetection-Flask",
    fields: ["FaceDetection", "Flask", "Python"],
    pinned: false,
  },
  {
    imageUrl: ['/projects/ZEUS/zeus.png'],
    title: "ZEUS",
    description: `ZEUS is a powerful remote administration tool built with Python, designed to provide seamless control over a target system remotely.
        With ZEUS, you can perform a range of actions on the target system, making it a versatile tool for various tasks.`,
    githubLink: "https://github.com/Ashenoy64/ZEUS",
    fields: ["Administration Tool", "Firebase", "Socket", "Python"],
    pinned: false,
  },
  {
    imageUrl: ['/projects/CollabTE/Login.png', '/projects/CollabTE/Online.png'],
    title: "CollabTE",
    description: `CollabTE is a collaborative text editor built using TipTap, offering a seamless platform for multiple users to collaboratively edit text files. 
        The editor utilizes Firebase for basic file system functionality, enabling offline editing capabilities along with a room-based collaborative environment. 
        Users can join specific rooms using unique IDs and collaboratively work on shared documents in real-time.`,
    githubLink: "https://github.com/Ashenoy64/CollabTE",
    fields: ["Nextjs", "Tailwind", "Firebase"],
    pinned: false,
  },
  {
    imageUrl: ['/projects/HPMP/Login.png', '/projects/HPMP/Home.png', '/projects/HPMP/Playlist.png', '/projects/HPMP/Search.png'],
    title: "HPMP",
    description: `HPMP is a music player application! This web application tries to provide you with a fast and enjoyable music listening experience.`,
    githubLink: "https://github.com/Ashenoy64/HPMP",
    fields: ["Vercel", "Nextjs", 'MongoDB', 'Mysql'],
    pinned: false,
  },
  {
    imageUrl: ['/projects/Inventory/AdminDashboard.png', '/projects/Inventory/AdminOrders.png', '/projects/Inventory/AdminProducts.png', '/projects/Inventory/OrderStatus.png'],
    title: "Inventory Management System",
    description: `The Inventory Management System is a comprehensive solution designed to streamline inventory operations,
         order processing, and administrative tasks. Leveraging various technologies, including RabbitMQ for communication, Next.js for 
         the user frontend, Streamlit for the admin console, and PostgreSQL for data storage, the system offers a robust platform for managing 
         inventory efficiently.
        `,
    githubLink: "https://github.com/Ashenoy64/Inventory-Management-System",
    fields: ["Docker", "Rabbitmq", "Postgres", "Streamlit", "Nextjs", "Tailwind"],
    pinned: false,
  },
];

export default _data;