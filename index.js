const app = require("express")();
const body = require("body-parser");

//ARRAY DE OBJETOS
const projects = [];

//CONTANTOR DE REQUISICOES FEITAS PARA O SERVIDOR
let requests = 1;

//MIDDLEWARE GLOBAL
app.use(body.json());

//MIDDLEWARE GLOBAL
app.use((req,res,next) => {
    console.log(`Request ${(requests++)}`);
    next();
});

//MIDDLEWARE LOCAL
function checkIfExistProjects(req,res,next) {
    const { id } = req.params;
    const index = projects.find ( (element, index) => { if(element.id == id) {  req.body.index = index; return true; } });
    if(!index) {
        res.status(404).json({message: `The Project ${id} not found!`});
    }
    next();
}

//MIDDLEWARE LOCAL
function checkProjects(req,res,next) {
    if(!projects.length > 0) {
        res.status(404).json({message: "Projects not found!"});
    }
    next();
}

//MIDDLEWARE LOCAL
function checkRouteParams(req,res,next) {
    const { id, title} = req.body;
    if(!id || !title) {
        return res.status(400).json({message:"Bad request!"});
    }
    next();
}

//DEFININDO OS METODOS PARA UMA MESMA ROTA
app.route("/projects/:id")
    .put( checkIfExistProjects, (req,res,next) => {
        const { index, title } = req.body;
        projects[index].title = title;
        res.json({message: `The project ${ index } as altered with success!`});
    } )
    .delete(checkIfExistProjects, (req,res,next) => {
        const { index } = req.body;
        projects.splice(0, index);
        res.json({message: `The project ${ index } as deleted with success!`});
    });

//DEFININDO OS METODOS PARA UMA MESMA ROTA
app.route("/projects")
    .get(checkProjects,(req,res,next) => {
        res.json(projects);
    })
    .post(checkRouteParams, (req,res,next) => {
        const { id, title} = req.body;
        projects.push({id: id, title : title, task: []});
        res.json({message:"Project saved!"});
    });

//DEFININDO OS METODOS PARA UMA MESMA ROTA
app.route("/projects/:id/task")
    .post(checkIfExistProjects,(req,res,next) => {
        const { index, title } = req.body;
        projects[index].task.push(title);
        res.json("Task add with success in projects!");
    });

//DEFININDO A PORTA DE COMUNICACAO COM O SERVIDOR
app.listen(3333,() => {
    console.log("Server is running!");
});

