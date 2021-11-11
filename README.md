Задача разделена на 2 части. Первая это Backend он находится в ветке main и Frontend в ветке react, написанный с помощью библиотеки React.
Для того, чтобы запустить Backend необходимо спулить проект из ветки main и в директории проекта выполнить команду docker-compose up --build и зайти на следующий адрес http://0.0.0.0:8000/.
Для того, чтобы запустить Frontend необходимо спулить проект из ветки react и в директории проекта выполнить команду docker-compose up --build и зайти на следующий адрес http://0.0.0.0:3000/.


Сразу пользователя встретит форма авторизации, если у пользователя нету аккаунта он может его создать. После авторизации и регистрации пользователю позвразается JWT токен,который на фронте хранится в куках и перенаправит на страничку с формой для сокразения ссылок.
Также можно нажать на my urls на навбаре и увилеть таблицу с урлами,при нажатии на которые вас перенаправит на оригинальный сайт.

Картинки интерфейса можно увидеть в ветке main

Первый sql запрос: 
SELECT 
   b.client_number,
   count(IF(v.outcome = 'win', 1, NULL)) AS 'Побед',
   count(IF(v.outcome = 'lose', 1, NULL)) AS 'Поражений'
FROM `event_entity` e
INNER JOIN `bid` 		 b ON e.play_id = b.play_id
INNER JOIN `event_value` v ON e.play_id = v.play_id
GROUP BY b.client_number
ORDER BY b.client_number;
 
 Второй sql вопрос:
 WITH gamesCTE (first_team, second_team, games_count)
        AS
        (
                SELECT 
				  least(e.home_team, e.away_team) as 'first_team',
				  greatest(e.home_team, e.away_team) as 'second_team',
				  count(*)
				FROM `event_entity` e
				GROUP BY first_team, second_team
				HAVING COUNT(*) >= 1
				ORDER BY first_team, second_team
        )
SELECT 
	concat(first_team, '-', second_team) as 'Game',
    games_count as 'Games count'
FROM gamesCTE;
