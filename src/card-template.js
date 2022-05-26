// create the manager card
function generateManagerCard(manager) {
const managerCard = `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title text-center"><i class="fa-solid fa-briefcase"></i> MANAGER </h2>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="font-weight-bold">Name:</span> ${manager.name}</li>
                <li class="list-group-item"><span class="font-weight-bold">ID:</span> ${manager.id}</li>
                <li class="list-group-item"><span class="font-weight-bold">Email:</span> <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item"><span class="font-weight-bold">Office Number</span>: ${manager.officeNumber}</li>
            </ul>
        </div>
        </div>
        `
        return managerCard
    }
  
// create the engineer card
function generateEngineerCard(engineers) {
    let anyEngineerCard = ""
    for(let i = 0; i < engineers.length; i++) {
        let engineer = engineers[i]
        let card = `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title text-center"><i class="fa-solid fa-calculator"></i></i> ENGINEER </h2>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="font-weight-bold">Name:</span> ${engineer.name}</li>
                <li class="list-group-item"><span class="font-weight-bold">ID:</span> ${engineer.id}</li>
                <li class="list-group-item"><span class="font-weight-bold">Email:</span> <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item"><span class="font-weight-bold">GitHub:</span> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
        </div>
        `
        anyEngineerCard += card 
    }
    return anyEngineerCard
    }
  
// create the intern card 
function generateInternCard(interns) {
    let anyInternCard = ""
    for(let i =0; i < interns.length; i++) {
        let intern = interns[i]
        let card = `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title text-center"><i class="fa-solid fa-graduation-cap"></i> INTERN </h2>
        </div>
        <div class="card-body">
            <ul class="list-group list-group-flush">
                <li class="list-group-item"><span class="font-weight-bold">Name:</span> ${intern.name}</li>
                <li class="list-group-item"><span class="font-weight-bold">ID:</span> ${intern.id}</li>
                <li class="list-group-item"><span class="font-weight-bold">Email:</span> <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item"><span class="font-weight-bold">School:</span> ${intern.school}</li>
            </ul>
        </div>
        </div>
        `
        anyInternCard += card
        }
        return anyInternCard
        }


module.exports = { generateManagerCard, generateEngineerCard, generateInternCard }
