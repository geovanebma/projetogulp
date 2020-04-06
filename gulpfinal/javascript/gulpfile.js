//A missão aqui é juntar os dois arquivos em um só

const {series} = require('gulp')
const gulp = require("gulp")

//Junta os arquivos em um só
const concat = require("gulp-concat")

//Pega todo o código que vai ser unificado
const uglify = require("gulp-uglify")

//Converte o arquivo js com seus métodos e funções no mais atual possível
const babel = require("gulp-babel")

//comments: false - faz com que os arquivos de comentários não sejam encaminhados para a pasta destino final
//presets: ["env"] - Faz com que o código seja modificado para sua sintaxe mais atual do JS
//.on('error... - Tratamento de erro
function transformacaoJS(cb){
    return gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err = () => {console.log(err)})
        .pipe(concat("codigo.min.js"))
        .pipe(gulp.dest("build"))
}

function fim(cb){
    console.log('Fim!!!')
    return cb()
}


exports.default = series(transformacaoJS, fim)