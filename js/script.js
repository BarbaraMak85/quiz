function Question(question, answer_a, answer_b, answer_c, answer_d, corect, answer_image, answer_description) {
    this.question = question;
    this.answer_a = answer_a;
    this.answer_b = answer_b;
    this.answer_c = answer_c;
    this.answer_d = answer_d;
    this.corect = corect;
    this.user_correct = null;
    this.answer_image = answer_image;
    this.answer_description = answer_description;
}

let game = {
    questions: [
        new Question("Czym jest hipotetyczna biała dziura?", "a. To inna nazwa kwazara", "b. To przeciwieństwo kwazara", " c. To inna nazwa czarnej dziury", " d. To przeciwieństwo czarnej dziury", "d", "images/sky-space-dark.jpg", "Jest to przeciwieństwo czarnej dziury. Według teorii biała dziura miałaby być obszarem, gdzie zarówno energia, jak i materia wypływają z osobliwości. Dotychczasowe badania nie potwierdziły istnienia białych dziur, choć niektórzy badacze uważają, że powstanie Wszechświata, czyli Wielki Wybuch, mógł być w istocie przykładem takiego zjawiska."),
        new Question("Która gwiazda(nie uwzględniając Słońca) jest najjaśniejsza według jasności widmowej?", "a. Betelgeza", "b. Syriusza", " c. alfa Centauri A", " d. alfa Centauri B", "b", "images/galaxy-stars-illustration.jpg", "Syriusz jest najjaśniejszą gwiazdą (poza Słońcem) wg jasności widmowej, czyli jasności zależnej od przedziału widmowego, na który czuły jest odbiornik promieniowania np. ludzkie oko."),
        new Question("Ile wynosi doba gwiazdowa?", "a. 23 h 56 min 05 s", "b. 24 h 10 min 07 s", "c. 25 h 22 min 09 s", "c. 26 h 05 min 11 s", "a", "images/astronomy-comet-constellation.jpg", "Doba gwiazdowa( również dzień gwiazdowy lub dzień syderyczny)- czas gwiazdowy pomiędzy dwoma kolejnymi górowaniami punktu równonocy wiosennej i równy okresowi obrotu Ziemi wokół własnej osi względem gwiazd, czyli ok 23 godzinom 56 minutom i 4,091 sekundom średnim słonecznym. Dobę gwiazdową dzieli się na 24 godziny gwiazdowe, te na 60 minut gwiazdowych, ate z kolei na 60 sekund gwiazdowych."),
        new Question("W którym roku Mirosław Hermaszewski odbył lot kosmiczny na statku Sojuz 30?", " a. 1965 r.", "b. 1978 r.", "c. 1984 r.", "d. 1987 r.", "b", "images/flight-sky-earth-space.jpg", "W roku 1976 Mirosław Hermaszewski został wyłoniony w drodze selekcji z grona kilkset polskich pilotów myśliwców jako kandydat do lotu kosmicznego w ramach międzynarodowego programu interkosmos. Po trwających dwa lata przygotowaniach, w lipcu 1978 odbył ośmiodniowy  lot na pokładzie Sojuz 30, w trakcie którego osmiokrotnie okrążył ziemię."),
        new Question("Z jakim obiektem, wg Teorii Wielkiego Zderzenia kolizję miała Ziemia?", " a. Z kometą", "b. Z księżycem", "c. Z astreoidą", "d. Z inną planetą", "d", "images/astronomy-atmosphere-earth-exploration.jpg", "Wg Teorii Wielkiego Zderzenia w Ziemię uderzyła inna planeta nazwana Theą(lub Orfeuszem. Thea rozmiarami przypominała Marsa. Zderzenie nastąpiło pod kątem, dzieki czemu Ziemia przetrwała. Skutkiem tej kolizji było powstanie Księzyca oraz pochylenie ziemskiej osi obrotu"),
        new Question("Jak nazywa się hipotetyczna cząstka elementarna, która porusza się z prędkością nadświetlną?", " a. Bradion", "b. Lukson", "c. Tradion", "d. Tachion", "d", "images/time-lapse-photography-during-nighttime.jpg", "Tachion (z greckiegoχύς tachýs – szybki, prędki) to hipotetyczna cząstka elementarna, która porusza się z prędkością nadświetlną(większą niż prędkośćświatła w próżni). Nie ma jednak żadnego dowodu na istnienie tych cząstek. Te hipotetyczne cząstki posiadać mają następujące, paradoksalne właściwości: poruszać się mogą wyłącznie szybciejod światła, poruszają się w czasie wstecz. Nie wiadomo czy ich masa spoczynkowa ma sens fizyczny. W konsekwencji, interakcje tej cząstki z materią powodowałyby, iż ich prędkość mogłaby rosnąć nieograniczenie."),
        new Question("Z jakiego rodzaju plazmy składa się Słóńce?", "a. Z plazmy zimnej", "b. z plazmy gorącej", " c. Z plazmy wyładowania pierścieniowego", " d. Z żadnej z powyższych", "b", "images/sunset.jpg", "Słońce składa się z gorącej plazmy utrzymywanej przez grawitację i kształtowanej przez pole magnetyczne. Plazma goraca, czasami zwana plazmą tworzącą gwiazdy, składa się naładowanych i obojetnych cząstek elementarnych oraz w pełni zjonizowanych jąder atomowych, jednak z uwagi na dużą gęstość i wysoką temperaturę nie można mówić o obecności atomów neutralnych."),
        new Question("Z jakim obiektem, wg Teorii Wielkiego Zderzenia kolizję miała Ziemia?", " a. Z kometą", "b. Z księżycem", "c. Z astreoidą", "d. Z inną planetą", "d", "images/astronomy-atmosphere-earth-exploration.jpg", "Wg Teorii Wielkiego Zderzenia w Ziemię uderzyła inna planeta nazwana Theą(lub Orfeuszem. Thea rozmiarami przypominała Marsa. Zderzenie nastąpiło pod kątem, dzieki czemu Ziemia przetrwała. Skutkiem tej kolizji było powstanie Księzyca oraz pochylenie ziemskiej osi obrotu"),
        new Question("Czym jest Voorwerp Hanny?", " a. Obiektem astronomicznym o nieznanej naturze", "b. Największą znaną planetoidą", "c. Chondrytem węglistym", "d. Źródłem rozbłysku gamma", "a", "images/person-sky-silhouette-nigh.jpg", "Voorwerp Hanny to objekt astronomiczny o nieznanej naturze odkryty w 2007 roku przez holenderską nauczycielkę Hanny van Arkel w jasny, choć nie zawiera żadnych gwiazd. Dodatkowo posiada charakterystyczną dziurę o średnicy 16 000 lat świetlnych. Astronomowie przypuszczają, że to promieniowanie pochodzące ze środka galaktyki IC 2497 podgrzewa Voorwerp Hanny i pozwala mu świecić."),
        new Question("Jak nazywa się widoczna powierzchnia Słońca?", " a. Chromosfera", "b. Korona słoneczna", "c. Atmosfera słoneczna", "d. Fotosfera", "d", "images/yellow-sphere-illustration.jpg", "Fotosfera to wrząca gęsta fala gazów w stanie plazmy. W położonej najbardziej na zewnątrz warstwie, gęstość się zmniejsza, a przezroczystość zwiększa. Stąd promieniowanie słoneczne wymyka się w przestrzeń pozasłoneczną w postaci światła. Temperatura panująca w fotosferze wynosi 5600 stopni C."),

    ],

    current_question: null,
    timer: null,

    init: function() {
        this.newQuizButton();
        this.initAnswerButtons();
        this.oneMoreTimeButton();
        this.nextQuestionButton();
    },

    newQuizButton: function() {
        const button = document.getElementById('quiz_start');
        button.addEventListener('click', this.newQuiz);
    },

    nextQuestionButton: function() {
        const button = document.getElementById('next-question');
        button.addEventListener('click', game.randomQuestions);
    },

    oneMoreTimeButton: function() {
        const buttonAgain = document.getElementById('again');
        buttonAgain.addEventListener('click', this.oneMoreTime);
    },

    initAnswerButtons: function() {
        const buttons = document.querySelectorAll('[data-answer]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', this.checkAnswer);
        }
    },

    checkAnswer: function() {
        clearInterval(game.timer);

        let playerChoose = this.dataset.answer;

        if (game.questions[game.current_question].corect === playerChoose) {
            game.questions[game.current_question].user_correct = true;

        } else {
            game.questions[game.current_question].user_correct = false;
        }

        const buttons = document.querySelectorAll('[data-answer]');
        for (let i = 0; i < buttons.length; i++) {
            if (game.questions[game.current_question].corect === buttons[i].dataset.answer) {
                buttons[i].style.backgroundColor = '#89a970';
            } else {
                buttons[i].style.backgroundColor = '#f2385a';
            }
        }


        return game.afterAnswer();
    },

    afterAnswer: function() {
        const buttons = document.querySelectorAll('[data-answer]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById('time_question').style.display = 'none';
        return this.showQuestionDescription();
    },

    showQuestionDescription: function() {
        document.getElementById('answer_image').src = game.questions[game.current_question].answer_image;
        document.getElementById('answer_description').innerHTML = game.questions[game.current_question].answer_description;
        document.getElementById('answer_info').style.display = 'block';

        game.updateProgress();

        document.getElementById('next-question').style.display = 'block';
    },

    updateProgress: function() {
        let allQuestions = game.questions.length;
        let answerAllQuestions = game.questions.filter(function(item, index, array) {
            if (item.user_correct != null) {
                return item;
            }
        }).length;

        let questionsProgres = answerAllQuestions / allQuestions * 100;
        let questionProcent = document.getElementById('question_progress');
        questionProcent.value = questionsProgres;
    },

    newQuiz: function() {
        this.style.display = "none";
        document.querySelector('.quiz_display_button').style.display = "none";
        document.getElementById('game_area').style.display = "block";
        game.randomQuestions();
    },

    randomQuestions: function() {
        document.getElementById('answer_info').style.display = 'none';
        document.getElementById('next-question').style.display = 'none';
        document.getElementById('time_question').style.display = 'grid';

        const buttons = document.querySelectorAll('[data-answer]');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
            buttons[i].style.backgroundColor = 'transparent';
        }

        let availableQuestions = game.questions.filter(function(item, index, array) {
            if (item.user_correct == null) {
                return item;
            }
        });

        let progressWidth = ((game.questions.length - availableQuestions.length) + 1) * 10;
        document.querySelector('#question_progress').style.width = `${progressWidth}%`;

        if (availableQuestions.length === 0) {
            alert('Gra skonczona');
            game.generateList();
            return 1;

        }

        let randomIndex = Math.floor(Math.random() * game.questions.length);
        game.current_question = randomIndex;

        let randomQuestion = game.questions[randomIndex];

        if (randomQuestion.user_correct !== null) {
            return game.randomQuestions();
        }

        for (question in randomQuestion) {
            if (question != 'corect' && question != 'user_correct' && question != 'answer_description' && question != 'answer_image') {
                document.getElementById(question).innerHTML = randomQuestion[question];
            }
        }

        let time = 0;
        game.timer = setInterval(() => {
            time++;
            document.getElementById('time_question').innerHTML = time;
            if (time == 150) {
                game.questions[game.current_question].user_correct = false;
                clearInterval(game.timer);
                return game.afterAnswer();
            }
        }, 1000);

    },

    sumAnswers: function() {
        const questionLenght = game.questions.length;
        const correctAnswerLength = document.querySelectorAll('.correct_answer').length;
        const allAnswer = document.querySelector('#sum');
        allAnswer.innerHTML = `Twój wynik to ${correctAnswerLength} z ${questionLenght} (${correctAnswerLength / questionLenght * 100}%)`;
    },


    generateList: function() {
        const resultList = document.getElementById('results');
        for (let i = 0; i < game.questions.length; i++) {
            const elementList = document.createElement('li');
            elementList.innerHTML = game.questions[i].question;
            if (game.questions[i].user_correct === true) {
                elementList.classList.add('correct_answer');
            } else {
                elementList.classList.add('incorrect_answer');
            }
            resultList.appendChild(elementList);
        }
        this.sumAnswers();
        document.getElementById('game_area').style.display = 'none';
        document.getElementById('end_game').style.display = 'block';
    },

    oneMoreTime: function() {
        document.getElementById('end_game').style.display = 'none';
        document.getElementById('game_area').style.display = 'block';
        document.getElementById('question_progress').value = 0;
        document.getElementById('results').innerHTML = '';
        for (let i = 0; i < game.questions.length; i++) {
            game.questions[i].user_correct = null;
        }
        game.randomQuestions();
    }
}

game.init();