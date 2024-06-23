const _data = [
    {
      imageUrl: ['/projects/BankingSystem/Home.png','/projects/BankingSystem/Registration.png','/projects/BankingSystem/Transfer.png'],
      title: "Golden Horizon Bank",
      description: `Golden Horizon Bank (GHB) is a simple Banking System website developed with Django and Supabase as the database.
      It was created as part of a 1st-semester Python project. The website enables users to create accounts, log in, and perform basic banking operations, including transferring points to other accounts using the receiver's ID and name.
       Additionally, users can change their passwords and edit their profiles once logged in.`,
      githubLink: "https://github.com/Ashenoy64/Banking-System",
      fields: ["Django","Python","Postgres","Supabase","HTML","CSS"],
    },
    {
      imageUrl: ['/projects/FaceDetection/home.png','/projects/FaceDetection/result.png'],
        title: "Face Detection",
        description: `This project is a Python Flask-based web application that allows you to upload a video, 
        inspect the frames for detected faces.`,
        githubLink: "https://github.com/Ashenoy64/FaceDetection-Flask",
        fields: ["FaceDetection", "Flask", "Python"],
      },
      {
        imageUrl: ['/projects/FileStorage/home.png','/projects/FileStorage/dashboard.png','/projects/FileStorage/download.png','/projects/FileStorage/final.png'],
        title: "File Storage",
        description: `This project is FileStorage, a simple and efficient web application built with Python, Streamlit, and Sockets.
        It empowers multiple users to upload and download files concurrently. 
        With FileStorage, you can easily upload files to the server and download them whenever needed.`,
        githubLink: "https://github.com/Ashenoy64/File-Storage.git",
        fields: ["Python","Streamlit","Sockets"],
      },
      {
        imageUrl: ['/projects/MARD/mard.png','/projects/MARD/mard_side.png'],
        title: "MARD - Multi-Functional AI Robot",
        description: `MARD (Multi-Functional AI Robot with Raspberry Pi 5 and OpenAI) is an exciting hardware project developed by Monish, Avanish, Ramesh, and Druva. 
        This project utilizes a Raspberry Pi 5, an L298 motor driver, and the power of OpenAI to create an intelligent robot that can interact with users through speech, movement, and remote control.
         With the ability to process voice commands and provide responses, MARD offers an engaging and interactive experience.`,
        githubLink: "https://github.com/Ashenoy64/MARD",
        fields: ["IOT","AI","RaspberryPI","Motor Driver"],
      },
      {
        imageUrl: ['/projects/IndustryRun/home.png','/projects/IndustryRun/play.png'],
        title: "Industry Run",
        description: `Industry Run is an exciting endless runner game developed using Unreal Engine 5.
        This game is a result of applying the knowledge gained from a comprehensive course on Unreal Engine 5 available on YouTube .
        The course covered various aspects of game development, and at the end of the tutorial, Industry Run was created as a bonus project to showcase the skills and concepts learned throughout the course.`,
        githubLink: "https://github.com/Ashenoy64/IndustryRun",
        fields:["Unreal","Blender"],
      },
      {
        imageUrl: ['/projects/ZEUS/zeus.png'],
        title: "ZEUS",
        description: `ZEUS is a powerful remote administration tool built with Python, designed to provide seamless control over a target system remotely.
        With ZEUS, you can perform a range of actions on the target system, making it a versatile tool for various tasks.`,
        githubLink: "https://github.com/Ashenoy64/ZEUS",
        fields:  ["Administration Tool","Firebase","Socket","Python"],
      },
      {
        imageUrl: ['/projects/Trackit/Home.png','/projects/Trackit/dashboard.png'],
        title: "TrackIt-Stock Price Prediction Website",
        description: `TrackIt is a web application designed to provide stock price predictions.
        Built using React, Express, and MongoDB, this project offers users insights into potential stock price trends.`,
        githubLink: "https://github.com/Ashenoy64/TrackIt",
        fields: ["MongoDB","React","Express","NodeJS"],
      },
      {
        imageUrl: ['/projects/CollabTE/Login.png','/projects/CollabTE/Dashboard.png','/projects/CollabTE/Offline.png','/projects/CollabTE/Online.png'],
        title: "CollabTE",
        description: `CollabTE is a collaborative text editor built using TipTap, offering a seamless platform for multiple users to collaboratively edit text files. 
        The editor utilizes Firebase for basic file system functionality, enabling offline editing capabilities along with a room-based collaborative environment. 
        Users can join specific rooms using unique IDs and collaboratively work on shared documents in real-time.`,
        githubLink: "https://github.com/Ashenoy64/CollabTE",
        fields: ["Nextjs","Tailwind","Firebase"],
      },
      {
        imageUrl: ['/projects/HPMP/Login.png','/projects/HPMP/Home.png','/projects/HPMP/Playlist.png','/projects/HPMP/Search.png'],
        title: "HPMP",
        description: `HPMP is a music player application! This web application aims to provide you with a fast and enjoyable music listening experience.`,
        githubLink: "https://github.com/Ashenoy64/HPMP",
        fields: ["Vercel","Nextjs",'MongoDB','Mysql'],
      },
      {
        imageUrl: ['/projects/Inventory/AdminDashboard.png','/projects/Inventory/AdminOrders.png','/projects/Inventory/AdminProducts.png','/projects/Inventory/Buy.png','/projects/Inventory/Cart.png','/projects/Inventory/NodeHealth.png','/projects/Inventory/OrderStatus.png'],
        title: "Inventory Management System",
        description: `The Inventory Management System is a comprehensive solution designed to streamline inventory operations,
         order processing, and administrative tasks. Leveraging various technologies, including RabbitMQ for communication, Next.js for 
         the user frontend, Streamlit for the admin console, and PostgreSQL for data storage, the system offers a robust platform for managing 
         inventory efficiently.
        `,
        githubLink: "https://github.com/Ashenoy64/Inventory-Management-System",
        fields: ["Docker","Rabbitmq","Postgres","Streamlit","Nextjs","Tailwind"],
      },
      {
        imageUrl: ['/projects/Kannon/CreateTest.png','/projects/Kannon/NodeHealth.png','/projects/Kannon/TestView.png','/projects/Kannon/RealTimeTest.png','/projects/Kannon/TestSummary.png'],
        title: "Kannon-1000:Distributed Load Testing System",
        description: `Kannon-1000 is a distributed load testing system designed for scalability and real-time monitoring.
         It allows users to perform tsunami and avalanche tests, view test statuses, and manage test creation through a Streamlit-powered interface.`,
        githubLink: "https://github.com/Ashenoy64/Kannon-1000",
        fields: ["Kafka","Streamlit","Python"],
      },
      {
        imageUrl: ['/projects/EscapeQuest/Level2.png','/projects/EscapeQuest/Level2_1.png','/projects/EscapeQuest/Level1.png'],
        title: "Escape Quest:VR Game",
        description: `.`,
        githubLink: "https://github.com/Ashenoy64/Kannon-1000",
        fields: ["Unity","VR","Blender",'C#'], 
      }
    
  ];

export default _data;