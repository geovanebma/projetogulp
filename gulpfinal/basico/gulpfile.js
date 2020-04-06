const gulp = require("gulp")

//series - executa os métodos em série
//parallel - executa os métodos em Paralelo
const {series, parallel} = require("gulp")

const antes1 = cb => {
    console.log("Tarefa antes 1")
    return cb()
}

const antes2 = cb => {
    console.log("Tarefa antes 2")
    return cb()
}

function copiar(cb){
    gulp.src(['pastaA/**/*.txt'])
        .pipe(gulp.dest("pastaB"))

    return cb()
}

function fim(cb){
    console.log("Fim da Tarefa")
    return cb()
}

//Este default, faz com que possa encontrar e executar o arquivo corretamente ao colocar no terminal o comando "gulp"
//Pode misturar series com parallel
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)