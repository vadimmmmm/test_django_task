Задача разделена на 2 части. Первая это Backend он находится в ветке main и Frontend в ветке react, написанный с помощью библиотеки React.
Для того, чтобы запустить Backend необходимо спулить проект из ветки main и в директории проекта выполнить команду docker-compose up --build и зайти на следующий адрес http://0.0.0.0:8000/.
Для того, чтобы запустить Frontend необходимо спулить проект из ветки react и в директории проекта выполнить команду docker-compose up --build и зайти на следующий адрес http://0.0.0.0:3000/.


Сразу пользователя встретит форма авторизации, если у пользователя нету аккаунта он может его создать. После авторизации и регистрации пользователю позвразается JWT токен,который на фронте хранится в куках и перенаправит на страничку с формой для сокразения ссылок.
Также можно нажать на my urls на навбаре и увилеть таблицу с урлами,при нажатии на которые вас перенаправит на оригинальный сайт.

Картинки интерфейса можно увидеть в ветке main
