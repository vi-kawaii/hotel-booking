## Доступные методы

- `/api/book` бронирование номера. Метод `POST`, параметры
  - room_id: integer, # айди номера для бронирования
  - from: epoch, # с какого момента
  - to: epoch, # до какого момента
  - is_vip: boolean # является ли клиент VIP
- `/api/cancel` отмена бронирования. Метод `POST`, параметры
  - id: integer # айди брони
- `/api/rooms/all` получить список всех номеров. Метод `GET`
- `/api/rooms/free` получить список доступных для бронирования номеров. Метод `GET`

## Инструкция

Создать файл `.env` и написать в нем

```
DATABASE_URL=postgres://username:password@host:port/dbname?schema=public
```

где:
- `username` имя пользователя
- `password` пароль
- `host` хост бд
- `port` порт
- `dbname` имя бд

Если тестируете на Windows, можно ввести

```
DATABASE_URL=postgres://postgres:пароль_при_установке@localhost:5432/postgres?schema=public
```

где `пароль_при_установке` это пароль который был указан при установке Postgres

Далее импортировать дамп бд из файла `dump.sql`

Потом ввести команды


```
npm i
npm run build
npm run start
```

API будет доступен по адресу `localhost:3000`