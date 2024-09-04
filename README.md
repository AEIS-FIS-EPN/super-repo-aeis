# Súper Repo AEIS

## Introducción

Aplicación web desarrollada para compartir contenido de materias de la facultad de ingeniería en sistemas de la Escuela Politécnica Nacional [(EPN)](https://www.epn.edu.ec/)

## Cómo funciona

En esta aplicación encontrarás varios repositorios de estudiantes de la FIS que han aprobado diversas materias y han decidido compartir su contenido para ayudar a otros estudiantes.

Esperamos que el contenido que encuentres aquí sea de ayuda para tu semestre 🚀

Link aplicación: https://super-repo-aeis.pages.dev/

## Cómo contribuir

Si tienes contenido de alguna materia que te gustaría compartir simplemente haz un fork al repositorio, edita el archivo [src/lib/repos.json](https://github.com/AEIS-FIS-EPN/super-repo-aeis/blob/main/src/lib/repos.json) y agrega un nuevo objeto como el siguiente ejemplo:

```json
{
	"subject": "Recuperación de Información",
	"subjectId": "ICCD753",
	"semester": 7,
	"formattedSemester": "Séptimo",
	"career": "Computación",
	"repoUrl": "https://github.com/Cheveniko/search-front",
	"author": "Cheveniko",
	"authorUrl": "https://github.com/Cheveniko"
}
```

Una vez agregues el objeto con la información de tu repositorio, crea un Pull request para solicitar que se incluyan los cambios que realizaste en la rama principal.

Por favor no olvides leer las [reglas de contribución.](https://github.com/AEIS-FIS-EPN/super-repo-fis/blob/main/CONTRIBUTING.md)

## Roadmap

El siguiente paso del proyecto Súper Repo FIS es crear una aplicación web con las siguientes features:

- [x] Una interfaz gráfica donde se desplieguen los repositorios de una manera accesible y rápida.
- [x] Una barra de búsqueda de materias y repositorios.
- [ ] Un sistema de calificación de repositorios para evaluar la utilidad de los repositorios.
- [ ] Light mode.

La aplicación está desarrollada en [Sveltekit](https://kit.svelte.dev/)

Si quieres sumarte al equipo de desarrollo únete al canal de Discord https://discord.gg/CPWPTbDFCE

No importa si no tienes conocimientos en Sveltekit, este proyecto es para aprender 🙌🏻

Mi humilde aporte by RT
