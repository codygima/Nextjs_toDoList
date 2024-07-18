# Next.js To-Do List

## Overview
This to-do list was made using Next.js, Tailwind CSS, and DaisyUI. Using the three different software, I created a functional to-do list that utilizes the benefits of Next.js: server-side rendering, client-side rendering, and routing. Using [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/docs/use/), I could easily create intricate buttons, text inputs, and different kinds of components. I watched [Web Dev Simplified](https://www.youtube.com/watch?v=NgayZAuTgwM&t=440s) for a basic to-do list tutorial and a better understanding of Next.js. 

Unfortunately, due to time and other complications, I have not yet deployed the website. When I figure those complications out, then I will try to deploy the websites.

## Prerequisites
+ [Visual Studio Code](https://code.visualstudio.com/)
+ [Node.js](https://nodejs.org/en)

## Installation and Usage
To install this Next.js To-Do List, make sure you installed all the prerequisites to your computer, then open your local terminal and follow these steps:

1. Clone the Repository:
```bash
git clone https://github.com/codygima/Nextjs_toDoList.git
```
2. Navigate to the Project Directory:
```bash
cd Nextjs_toDoList
```
3. Open Visual Studio Code:
```bash
code .
```
4. Create a `.env` file:

To do this simply right-click inside the Workspace column on the left side of VS Code, then select `New File`.

5. Validate the Prisma Schema:
```bash
npx prisma migrate dev --name init
```

6. Run the Program:
```bash
npm run dev
```

7. Copy the Local URL:

In the terminal there should be a URL that you can use to host the website using your local browser. The URL should look something like, `http://localhost:3000`.

In doing all of this, you will be able to run the Next.js To-Do List website! It is a simple website but uses cool elements of Next.js which you can edit by looking through the code.
