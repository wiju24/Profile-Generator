const createHTML = (data) =>{ 
    const profilePage = [];
    
        const createIntern = intern => {
            return `
                <div class="card" style="display:inline-block">
                    <img src="/Assets/download.png" alt="John" style="width:100%">
                    <h1>${intern.name}</h1>
                    <p class="title">Intern</p>
                    <p>${intern.school}</p>
                    <p><button>${intern.email}</button></p>
                </div>
            `
        }
        const createEngineer = engineer => {
            return  `
                <div class="card" style="display:inline-block">
                    <img src="/Assets/engineer.png" alt="John" style="width:100%">
                    <h1>${engineer.name}</h1>
                    <p class="title">Engineer</p>
                    <p><button>${engineer.email}</button></p>
                    <a href="https://github.com/${engineer.github}"><button>Github</button></a>
                </div> 
            `
        }
        const createManager = manager => {
            return `
                <div class="card" style="display:inline-block">
                    <img src="/Assets//manager.png" alt="John" style="width:100%">
                    <h1>${manager.name}</h1>
                    <p class="title">Manager</p>
                    <p><button>${manager.email}</button></p>
                    <p><button>Room: ${manager.roomNumber}</button></p>
                </div>
        `
        }
        
        for (let i = 0; i < data.length; i++) {
            const person = data[i];
            const role = person.getRole();
    
            if (role === 'Intern'){
                const intern = createIntern(person);
                profilePage.push(intern)
            }
    
            if (role === 'Engineer'){
                const engineer = createEngineer(person);
                profilePage.push(engineer)
            }
    
            if (role === 'Manager'){
                const manager = createManager(person);
                profilePage.push(manager)
            }
        }
        return profilePage.join()
    };
    
    module.exports = (teamCard) => {
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Profile Generator</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="./index.css">
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                  <span class="navbar-brand mb-0 h1">The Big 3</span>
                </div>
            </nav>
        
        </head>
        <body>
            <div class="profile-container">
                ${createHTML(teamCard)}
            </div>
            <script src="../src/generateHTML.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </body>
        </html> `
    }