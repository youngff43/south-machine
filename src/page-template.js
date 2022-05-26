function allCards(managerCard, anyEngineerCard, anyInternCard) {
const page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Created Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/5e8e5a7f18.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="./css/style.css"></link>
    </head>
    <body>
        <nav>
            <h1>My Created Team</h1>
        </nav>
        <main class="container-fluid">
            <div class="row">
                <div class="col-lg-4">
                <div class="stable sticky-top">
                        ${managerCard}
                </div>
                </div>
                <div class="col-lg-8">
                    <div class="employees">
                            ${anyEngineerCard}
                            ${anyInternCard}
                    </div>
                </div>
            </div>
        </main>
    </body>
    </html>`
    return page
}

module.exports = allCards 