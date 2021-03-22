# auto-imports-loader
auto resolver pug, scss e.t.c  imports. for webpack

## автоматическое построение импортов до компонентов/блоков web-страницы которому нужен только список имён компонентов. ##
технически это генерация файлов заданного расширения с импортами. в резолвящем файле нужно импортить только этот сгенерированный файл.
### ограничения (лёгкая версия БЭМ ограничений): ###
* единое пространство имён блоков
* блоки должны быть на одном уровне в их каталоге, но каталогов с блоками может быть много и где угодно
* нужно в конфиге явно указать адреса каталогов с блоками
* имя каталога блока == baseName импортируемого в нём файла
* в коревом файле импортируется рядом лежащий файл для сгенерированных импортов (imports.pug например) куда лоадер и сложит адреса до его импортов и всех вложенных импортов
* #### если блоку нужны дополниетльные импорты: ####
  * в каталоге блока нужно положить json с массивом имён нужных блоков

### options ###
```javascript
{
  // каталоги блоков
  sources: ['src/components/complicated', 'src/components/simple',],
  // имя файлов с массивами имён нужных блоков
  startImportFileName: 'import.json',
  // имя файла куда нужно положить сгенерированные импорты
  // и коллбек получающий на вход путь до импортируемого файла, а возвращающий строку с конструкцией импорта файла по полученному пути
  // коллбек вызывается для каждого найденного пути, и все полученные строки складываются в startImportFileName
  parsedImportFilesGenerators: new Map([
    ['imports.pug', (importPath) => `include ${importPath.split('\\').join('/')}\n`],
  ]),
}
```
### пример конфига для pug файлов ###
```javascript
{
  test: /\.pug$/,
  include: [
    path.resolve(__dirname, "src/pages")
  ],
  exclude: [
    s => path.basename(s, path.extname(s)) == 'imports'
  ],
  use: [
    {
      loader: 'pug-loader',
      options: {
        root: path.resolve(__dirname, 'src'),
        basedir: path.resolve(__dirname, 'src'),
      }
    },
    {
      loader: 'auto-imports-loader',
      options: {
        sources: ['src/components/complicated', 'src/components/simple',],
        startImportFileName: 'import.json',
        parsedImportFilesGenerators: new Map([
          ['imports.pug', (importPath) => `include ${importPath.split('\\').join('/')}\n`],
        ]),
      }
    }
  ]
},
{
  test: /\.pug$/,
  exclude: {
    and: [
      path.resolve(__dirname, "src/pages")
    ],
    not: [
      s => path.basename(s, path.extname(s)) == 'imports'
    ]
  },
  use: [
    {
      loader: 'pug-loader',
      options: {
        root: path.resolve(__dirname, 'src'),
        basedir: path.resolve(__dirname, 'src'),
      }
    },
  ]
},
```
