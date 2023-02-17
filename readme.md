## GoIT Node.js Course Homework #4

Продовження створення REST API для роботи з колекцією контактів.

Methods / Endpoints:
[POST] </users/signup> - реєстрація нового користувача;
[POST] </users/login> - доступ користувача до сервісу;
[POST] </users/logout> - видалення токену поточного користувача, вихідз сервісу;

Methods / Service enpoints:
[GET] <api/contacts> - отримати перелік контактів поточного користувача;
[GET] <api/contacts?page={first_page}&limit{per_page}> - пагінация відповіді;
[GET] <api/contacts?sort={key_name}&sort_order{asc|desc}> - сортування відповіді;
[GET] <api/contacts/{contact_id}> - отримати інформацію про контакти поточного користувача;
[POST] <api/contacts> - додати до бази контакт поточного користувача;
[PUT] <api/contacts/{contact_id}> - оновити інформацію про контакти поточного користувача;
[PATCH] <api/contacts/{contact_id}/favorite> - оновити статус обраного для контакта користувача;
[DELETE]<api/contacts/{contact_id}> - видалити контакт

### Команди:

- `npm start` &mdash; старт сервера в режимі production
- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок
