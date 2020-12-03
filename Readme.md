# Проект «Новостная лента»

* [Проект на сервере](https://cinema.dkha.site/)

---
#### Технологии

_, `ES2015+`, `Fetch API`, `Webpack`, `БЭМ`, `Gulp`._

---

#### Основные команды

* Установка - `npm i`

Проект разделен на 2 блока - работы с версткой и работы со сборкой, т.к. использование gulp-webpack-stream показалось мне нецелесообразным.

Стурктура проекта:

build - папка в которую интегрирован bundle.js. Webpack-сервер рабтоает с ней (start, build)
markup - папка c версткой, Gulp работает с ней (start, build)
source - исходные коды
--markup - верстка
--js - JavaScript

* Запуск верстки - `npm run markup-start`
* Сборка верстки - `npm run markup-build`

* Запуск верстки - `npm run js-start`
* Сборка верстки - `npm run js-build`

* Запуск тестирования - `npm run test`
