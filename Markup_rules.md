[Руководство по оформлению MD-текста](https://gist.github.com/Jekins/2bf2d0638163f1294637)

## Команды Git 

`git config user.name "John Doe"` - установка имени пользователя локально

`git config --global user.name "John Doe"` - установка имени пользователя глобально

`git config --unset user.name` - удаление поля user.name

`git config --remove-section user` - удаление секции user

`git config alias.namealias '! echo "hello"; echo "from git"'` - создание алиаса, ! для нескольких команд

`git commit --autor='John Doe<john@mail.com> --data='01.01.2025'` - указание автора при коммите

`git reset HEAD index.html` - сбрасывает добавление в индексацию для файла index.html

`git add --force dist/index.js` - индексация файла даже если он  в .gitignore

`git add -p index.html` - git будет уточнять для каждого фрагмента кода

`git commit --all(--all сокращение -a)(-a-m === -am"message")` - делает сразу коммит для отслеживаемых файлов

`git add .` - индексирует все файлы в текущей директории 

`git add -A` - индексирует все файлы от корня проекта, при этом можем находиться на другом уровне

`git rm index.html` - удаляет файл

`git rm -r src` - флаг -r для директории

`git rm -r --cached src` - флаг --cached удаляет из индекса тоже


*курсив*  
_курсив_

**жирный**  
__жирный__

***жирный курсив***  
___жирный курсив_