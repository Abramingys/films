# Films collection

- Deploy: https://films-indol.vercel.app/
- API: https://kinopoiskapiunofficial.tech/

---

## Основной функционал:

- Регистрация и авторизация пользователей (страница регистрации и входа)
- Главная страница с фильмами
- Просмотр карточки фильма с информацией
- Поиск по названию фильма, выпадающее меню из фильмов (страница поиска)
- История поиска: сохранение по поиску, возможность перейти на страницу поиска (страница истории)
- Избранные фильмы: пользователь может добавлять и удалять фильмы из избранного (страница избранное)

---

## Реализация требований:

### 1 уровень (обязательный - необходимый минимум):

- [x] Реализованы Требования к функциональности
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использую LocalStorage
- [x] Использую функциональные компоненты c хуками
- [x] Есть рендеринг [списков](https://github.com/Abramingys/films/blob/main/src/components/Movies/Movies.jsx)
- [x] Реализованы форма ([RegistrationForm](https://github.com/Abramingys/films/blob/main/src/components/RegistrationForm/RegistrationForm.jsx)),
- [x] Есть применение Контекст API ([ThemeContext](https://github.com/Abramingys/films/blob/main/src/providers/themeContext.jsx))
- [x] Есть применение предохранителя ([ErrorBoundary](https://github.com/Abramingys/films/blob/main/src/routing/router.jsx))
- [x] Есть кастомный хук ([useFetch](https://github.com/Abramingys/films/blob/main/src/hooks/useFetch.jsx), [useTheme](https://github.com/Abramingys/films/blob/main/src/hooks/useTheme.jsx))
- [x] Пара компонентов использует PropTypes ([MoviesCard](https://github.com/Abramingys/films/blob/main/src/components/MoviesCard/MoviesCard.jsx), [FilmInformation](https://github.com/Abramingys/films/blob/main/src/components/FilmInformation/FilmInformation.jsx))
- [x] Использую useDebounce ([useDebounce](https://github.com/Abramingys/films/blob/main/src/hooks/useDebounce.jsx), [SearchForm](https://github.com/Abramingys/films/blob/main/src/components/Search/Search.jsx))
- [x] Есть применение [lazy + Suspense](https://github.com/Abramingys/films/blob/main/src/routing/router.jsx)
- [x] Использую Modern Redux with Redux Toolkit ([store](https://github.com/Abramingys/films/blob/main/src/redux/store.js))
- [x] Использую слайсы ([historySlice](https://github.com/Abramingys/films/blob/main/src/redux/slices/historySlice.js), [favoriteSlice](https://github.com/Abramingys/films/blob/main/src/redux/slices/favoriteSlice.js))
- [x] Есть кастомная [мидлвара](https://github.com/Abramingys/films/blob/main/src/redux/slices/historyMiddleware.js)
- [x] Используется [RTK Query](https://github.com/Abramingys/films/blob/main/src/api/kinopoiskApi.jsx)
- [ ] Используется [Transforming Responses](https://github.com/Abramingys/films/blob/main/src/api/kinopoiskApi.jsx)
