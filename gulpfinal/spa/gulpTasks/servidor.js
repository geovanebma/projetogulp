const gulp = require('gulp')
//servidor web do gulp
const webserver = require('gulp-webserver')
//Monitora os arquivos e sempre que houver uma mudança ele irá mostrar na web a execução
const watch = require('gulp-watch')

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            open: true,
            livereload: true,
        }))
}

//Sempre que for alterado o código, o servidor com o watch faz com que 
function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}