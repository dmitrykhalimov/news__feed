# News Widget

Виджет отображающий новостную ленту.

---
#### Технологии

_`ES2015+`, `Fetch API`, `Webpack`, `БЭМ`, `Gulp`, `Sass`._

#### Структура репозитория

* **build** - итоговая сборка, html-файл создан вручную, css и js копируются при помощи команд (см. ниже)
* **markup** - итоговая верстка, в нее Gulp копирует собранный проект
* **source** - исходные файлы
* **source/markup** - файлы проекта Sass/Gulp
* **source/js** - файлы JavaScript Webpack

#### Команды репозитория

* Запуск сервера верстки - `npm run markup-start` 
* Сборка верстки - `npm run markup-build` (сборка собирается в /markup)

* Запуск модуля - `npm run js-start`(используется папка /build)
* Сборка модуля - `npm run js-build` (сборка собирается в /build, копируется style.css из /markup)
* Сборка модуля в режиме production - `npm run js-build-prod` (сборка собирается в /build копируется style.css из /markup)

* Запуск тестирования - `npm run test`


#### Подключение и инициализация

Для подключения виджета в HTML-файл необходимо импортировать файл стиля и файл js

```
<link href="css/style.css" rel="stylesheet">
<script src="bundle.js"></script>
```
Для инициализации необходимо создать новый экземпляр виджета
```
<script>
    const newsWidgetData = new NewsWidget({
        container: "news",
        type: "server",
        source: "https://run.mocky.io/v3/f713c246-2a14-4520-8468-42de76929ed7"
    });
</script>
```
Конструктор принимает в себя 3 параметра:
- **container** - id-контейнера, 
- **type** - типа загрузки данных: `server` или `mock`, 
- **source** - адрес сервера. 

В режиме `mock`, не требуется указание сервера, данные загружаются из самого виджета (файл `source/mock.js`)

