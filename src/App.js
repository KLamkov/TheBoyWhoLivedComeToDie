import React, { useState } from 'react';
import './App.css';

const questions = [
	{
		question: 'Яке прізвище у Гаррі?',
		options: ['Петр', 'Шпроттер', 'Борисенко', 'Поттер'],
		answer: 'Поттер'
	},
	{
		question: 'Як звали батьків Гаррі Поттреа?',
		options: ['Надія та Володимир', 'Ганна та Петро', 'Лілі та Джеймс', 'Вадим та Віра'],
		answer: 'Лілі та Джеймс'
	},
	{
		question: 'Що маґли бачать на місці Гоґвортсу?',
		options: ['Небезпечні руїни', 'Заборонений ліс', 'Торгівельний центр', 'Нічого'],
		answer: 'Небезпечні руїни'
	},
	{
		question: 'Яке із цих заклинань є забороненим?',
		options: ['Авада Кедавра', 'Экспеллиармус', 'Алохомора', 'Акцио'],
		answer: 'Авада Кедавра'
	},
	{
		question: 'Чому чарівники починають навчатися в Хоґвортсі з 11-12 років?',
		options: ['До цього віку вони не можуть контролювати свої магічні здібності', 'Щоб було більше шансів захиститися від педофолів', 'Бо чарівні палички обирають свого користувача тільки після 11 років', 'Бо навчання занадто небезпечне для малюків'],
		answer: 'До цього віку вони не можуть контролювати свої магічні здібності'
	},
	{
		question: 'Хто або що може контролювати василіска?',
		options: ['Студенти факультету Слизерин', 'Хто має спеціальну магічну дудку', 'Той, хто знає парселтанг', 'Смертежери'],
		answer: 'Той, хто знає парселтанг'
	},
	{
		question: 'Скільки вартує навчання в Хоґвортсі?',
		options: ['1500 галеонів', '6500 гривень', 'Воно безкоштовне для всіх', "Оплата приймається кров'ю"],
		answer: 'Воно безкоштовне для всіх'
	},
	{
		question: 'Яке магічне створіння з України фігурує у всесвіті Гаррі Поттера?',
		options: ['Гіпогриф', 'Голуб із біолабораторії', 'Дракон', 'Фестрал'],
		answer: 'Дракон'
	},
	{
		question: 'Кому належать слова «Щастя можна знайти навіть у темні часи, якщо не забувати звертатися до світла?',
		options: ['Северусу Снейпу', 'Сіріусу Блеку', 'Джеймсу Поттеру', 'Албусу Дамблдору'],
		answer: 'Албусу Дамблдору'
	},
	{
		question: 'Що допоможе оговтатися після зустрічі з дементорами?',
		options: ['Шоколад', 'Вершкове пиво', 'Закляття «Експекто патронум»', 'Секс із маглом'],
		answer: 'Шоколад'
	},
	{
		question: "Як називається людина, яка народилася в сім'ї чарівників, але повністю позбавлена магічних здібностей?",
		options: ['Сквиб', 'Снич', 'Шмига', 'Дивний сікель'],
		answer: 'Сквиб'
	},
	{
		question: 'Коли день народження Гаррі Поттера?',
		options: ['29 червня 1981р', '31 липня 1980р', '30 липня 1981р', 'Нема точної дати'],
		answer: '31 липня 1980р'
	},
	{
		question: 'Хто вбив Добі?',
		options: ['Луціус Мелфой', 'Старість', 'Гаррі Поттер', 'Белатриса Лестранж'],
		answer: 'Белатриса Лестранж'
	},
	{
		question: 'Хто найстарший із наведених людей?',
		options: ['Білл Візлі', 'Персі Візлі', 'Чарлі Візлі', 'Джордж Візлі'],
		answer: 'Білл Візлі'
	},
	{
		question: 'Що таке "The Quibbler"?',
		options: ['Заклинання', 'Газета', 'Маленька істота що мешкає у чулані', 'Так називають чаклуна що не втратив цноту'],
		answer: 'Газета'
	},
	{
		question: 'Хто створив Карту Мародерів?',
		options: ['Годрик Гриффіндор, Кандіда Когтевран, Cалазар Слізерін, Пенелопа Пуффендуй', 'Джордж ті Фред Візлі', 'Джеймс Поттер, Рімус Люпін, Піттер Петтигрю, Сіріус Блек', 'DeepStateMap'],
		answer: 'Джеймс Поттер, Рімус Люпін, Піттер Петтигрю, Сіріус Блек'
	},
	{
		question: ' В якому році відбулася битва під Хоґвортсом?',
		options: ['2000 рік', '1998 рік', '2023 рік', 'У рік народження твоеї матусі'],
		answer: '1998 рік'
	},
	{
		question: 'Що виробляє компанія у якій працює Вернон Дурсль?',
		options: ['Цвяхи', 'Панчохи', 'Анальні пробки', 'Свердла'],
		answer: 'Свердла'
	},
	{
		question: 'Якого кольору кров єдинорога?',
		options: ['Синій', 'Червоний', 'Колір спілого авокадо', 'Срібло'],
		answer: 'Срібло'
	},
	{
		question: 'Хто був першим поцілунком Рона Візлі?',
		options: ['Лаванда Браун', 'Герміона Грейнджер', 'Його вітчим', 'Кеті Белл'],
		answer: 'Лаванда Браун'
	},
	{
		question: ' Скільки сходів має Хоґвортс?',
		options: ['142', 'Несчислана кількість', '654', '873'],
		answer: '142'
	},
	{
		question: 'Де відбувся перший поцілунок Гаррі Поттера та Джині Візлі',
		options: ['У лісі', 'Спільна кімната Гріффіндора', 'У домі Візлі під час вечері', 'У дешевому мотелі'],
		answer: 'Спільна кімната Гріффіндора'
	},
	{
		question: 'Яких тварин не любить Хагрід,',
		options: ['Він любить усіх', 'Нетверезих чаклунів', 'Папуг', 'Кішок'],
		answer: 'Кішок'
	},
	{
		question: 'Що відповів Северус Снейп коли Дамблдор його запитав зі сльозами на очах "Аж через стільки часу?" ?',
		options: ['Завжди', 'Звісно', 'Та мабуть', 'Відвали'],
		answer: 'Завжди'
	},
	{
		question: 'Хто найкафовіший персонаж із всесвіту Гаррі Поттера?)',
		options: ['Северус Снейп', 'Дамблдор', 'Гаррі Поттер', 'Отой чувак на автобусі'],
		answer: 'Северус Снейп'
	}		
];

const resultCategories = [
	{
		minScore: 0,
		maxScore: 10,
		image: 'min.png',
		text: 'Твоїх знаннь недостатньо для виживання у світі чаклунів!',
	},
	{
		minScore: 10,
		maxScore: 19,
		image: 'midl.png',
		text: 'Непогано! Ти щось знаєш, але є куди рости!',
	},
	{
		minScore: 20,
		maxScore: Infinity, 
		image: 'max.png',
		text: 'Мої вітання ти заслуговуєш на повагу Северуса!',
	},
];

function App() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [quizStarted, setQuizStarted] = useState(false);

	const handleStartQuiz = () => {
    	setQuizStarted(true);
 	};
  
  	const handleAnswerOptionClick = (answerOption) => {
    	if (answerOption === questions[currentQuestion].answer) {
      	setScore(score + 1);
    }
  
    const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
		} else {
		setShowScore(true);
		}
  	};

	const getResultCategory = () => {
		// Найти категорию результата на основе полученного счета
		for (const category of resultCategories) {
		if (score >= category.minScore && score <= category.maxScore) {
			return category;
		}
		}
		// Если ни одна из категорий не соответствует, вернуть последнюю категорию
		return resultCategories[resultCategories.length - 1];
	};
  
  return (
	<div className='app'>
	{!quizStarted ? (
        <div className='start-section'>
          	<h1>Прийшов час перевірити справжній ти чаклун чи таке!</h1>
          	<p>Тицни кнопку якщо не боїшся своєї матусі.</p>
          	<button onClick={handleStartQuiz}>Почати тест</button>
        </div>
    ) : showScore ? (
		<div className='score-section'>
          <h2>Ваш результат:</h2>
          <p>Ви набрали {score} из {questions.length} правильних відповідей.</p>
          <img src={getResultCategory().image} alt='Результат' />
          <p>{getResultCategory().text}</p>
          <button onClick={() => { setShowScore(false); setScore(0); setCurrentQuestion(0); }}>
            Спробувати ще раз
          </button>
        </div>
	) : (
		<>
		<div className='question-section'>
			<div className='question-count'>
			<span>Питання{currentQuestion + 1}</span>/{questions.length}
			</div>
			<div className='question-text'>{questions[currentQuestion].question}</div>
		</div>
		<div className='answer-section'>
			{questions[currentQuestion].options.map((answerOption) => (
			<button key={answerOption} className='btn' onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
			))}
		</div>
		<div className='progress-bar'>
			<div className='filler' style={{ width: `${(currentQuestion + 1) * 4}%` }} />
		</div>
		</>
	)}
	</div>
);
}

export default App;