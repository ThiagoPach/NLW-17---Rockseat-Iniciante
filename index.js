const { select } = require('@inquirer/prompts')

const start = async () => {

    while(true){
        
        const opcao = await select ({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar"
                },
                {
                    name: "Listar Metas",
                    value: "listar metas"
                },
                {
                    name: "Sair",
                    value: "sair"
                }

            ]
        })

        switch(opcao) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                return
        }
    }
}

start()