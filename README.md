## Zadanie domowe dla TeaCode

Odsyłam zadanie po 4h w stanie jaki udało mi się w tym czasie osiągnąć. Lista jest posortowana alfabetycznie po nazwisku, działa search imię / nazwisko. Problem z checkboxem opisany niżej.

- Od siebie dodam, że nigdy nie korzystałem z material.ui ani Bootstrapa(w przypadku React), dlatego nie zdecydowałem się na użycie ich - nie chciałem poświęcać za dużo czasu na stylowanie. Ostatecznie cieszę się, że tego nie zrobiłem, ponieważ i tak zabrakło mi czasu, co opisałem w sekcji Bugi / do poprawy.

- Na pewno po swojej stronie jeszcze spróbuję dla samego siebie poprawić ten kod, t.j obsługę chechboxa / user.active, i w przypadku ewentualnej rozmowy gwarantuję, że będę wiedział już co tam było nie tak :) Oraz nadrobię korzystanie z material.ui oraz bootstrapa w react.

### Bugi / do poprawy

- nie miałem pomysłu jak dodać domyślnie .active do state'u 'user' na etapie fetchu API, więc dodałem na etapie obsługi zaznaczania checkboxa.
  Obsługa jest więc napisana tak, że .active (checkbox) zmieniany jest z undefined na true, a później już true / false.
  Pozostawiłem console.log w przypadku kliknięcia w usera / szare pole, gdzie widać ID oraz stan .active . Przy filtrowaniu / searchowaniu userzy .active === true pozostają aktywni.

- czasami wizualnie checkbox po kliknięciu nie jest zaznaczany / odznaczany, natomiast w konsoli widać, że zmienia się stan .active. Wyszukanie w liście resetuje ten błąd wizualny (nie zmieniając stanu .active)

- zaznaczając checkbox w konsoli wyświetlane jest tylko ID danego usera, a nie wszystkich .active === true. useEffect z linijek 40-42 który miał to obsługiwać nie działa.

- pisząc na szybko - całą logikę obsługi listy zrobiłem w User.js, nie wystarczyło mi czasu na poprawne rozdzielenie tego na komponent UserList oraz elementu listy / User.

### Jak zainstalować

    1. Open your terminal and then type

       Github: $ git clone https://github.com/bysiuxvx/teacode-challenge-pb.git

       Gitlab: $ git clone https://gitlab.com/bysiuxvx/teacode-challenge-pb.git

       This clones the repo

    2. cd into the new folder and type

        $ npm install

        This installs the required dependencies

    3. To run the React project.
        $ npm start
