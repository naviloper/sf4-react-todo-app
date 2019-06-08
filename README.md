## About
This is a sample project that shows integration between Reactjs and Symfony4.3.  
One aproach can be creating two seperate repository for frontend and backend. But integrating them in one repository could have some benefits.  
In this project our frontend application that has been developed with reactjs (it can develope with any other framework like angular or vuejs) has been stored in `frontapp/` folder. The frontend app is a simple todo app and the backend app that has been developed with Symfony4.3 provides its RestFul API for front app.  

## Requirments
- PHP 7.1 >= 
- composer
- Node 6 >=
- npm 5 >=

## Setup and Run
1. Clone the project:
    ```bash
    $> git clone https://github.com/dvlpr-n/sf4-react-todo-app.git my-project-name

    $> cd my-project-name
    ```
1. Install php vendors:
    ```bash
    $> composer install
    ```

1. Install javascript libraries:
    ```bash
    $> npm install
    ```

1. Build libraries:
    ```bash
    $> npm run-script build
    // for developement build run this
    $> npm run-script dev
    ```
1. For run the project you can setup it in Apache or Nginx or you can simply run it with php build-in server:
    ```bash
    &> php bin/console server:start
    ```
