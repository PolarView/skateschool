const aboutData = [
  {
    id: 1,
    title: "Летний скейт лагерь 1",
    brifeDescription:
      "Каждое лето мы используем на максимум и организуем уже традиционный скейт лагерь",
    description:
      "Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.",
    image: "skateCamp"
  },
  {
    id: 2,
    title: "Летний скейт лагерь 2",
    brifeDescription:
      "Каждое лето мы используем на максимум и организуем уже традиционный скейт лагерь",
    description:
      "Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.",
    image: "skateCamp"
  },
  {
    id: 3,
    title: "Летний скейт лагерь 3",
    brifeDescription:
      "Каждое лето мы используем на максимум и организуем уже традиционный скейт лагерь",
    description:
      "Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.",
    image: "skateCamp"
  },
  {
    id: 4,
    title: "Летний скейт лагерь 4",
    brifeDescription:
      "Каждое лето мы используем на максимум и организуем уже традиционный скейт лагерь",
    description:
      "Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.Let's consider a large image, a 2982x2808 Firefox logo image. We want to tile four copies of this image into a 300x300-pixel element. To do this, we can use a fixed background-size value of 150 pixels.",
    image: "skateCamp"
  }
];

const faqData = [
  {
    id: 0,
    question: " Нужен ли с собой скейтборд на первое занятие?",
    answer: `Нет, нашим ученикам на время тренировки предоставляется скейтборд. Но если у вас уже есть собственный, то вы можете его с собой взять. `,
    isOpen: false
  },
  {
    id: 1,
    question: "Нужна ли защита на время занятия?",
    answer:
      "Нет, нашим ученикам на время тренировки предоставляется защита: наколенники, налокотники и шлем. Но если у вас есть собственная защита, то вы можете ее с собой взять.",
    isOpen: false
  },
  {
    id: 2,
    question: " Вход в парк Bunker платный?",
    answer: `Да. Стоимость входа 500 рублей в будние дни и 600 в выходные.  `,
    isOpen: false
  },
  {
    id: 3,
    question: "Есть ли выездная тренировка?",
    answer:
      "Да, вы можете попросить наших тренеров приехать в другой скейт-парк. В таком случае тренировка будет стоить 2800 рублей за один час. ",
    isOpen: false
  },
  {
    id: 4,
    question: " Как часто нужно заниматься скейтбордингом, чтобы был результат?",
    answer: `Мы рекомендуем заниматься два раза в неделю с тренером и желательно два раза кататься самостоятельно, чтобы закрепить результат. `,
    isOpen: false
  },
  {
    id: 5,
    question: "Можно ли подарить тренировку ребенку/другу/коллеге/знакомому?",
    answer: `Да, в нашей школе есть электронные подарочные сертификаты на любое количество тренировок.`,
    isOpen: false
  }
];

const locationsData = [
  {
    id: 0,
    name: "Крытый скейт-парк Bunker",
    adress: " Ленинградское шоссе, 23.",
    imagesSrc: ["/locations/bunker1.webp", "/locations/bunker2.webp"],
    link: "https://yandex.ru/maps/-/CDaByAix"
  },
  {
    id: 1,
    name: " Скейт-парк Покровское-Стрешнево ",
    adress: "Ленинградское шоссе, 23.",
    imagesSrc: [
      "/locations/streshnevo1.webp",
      "/locations/streshnevo2.webp",
      "/locations/streshnevo3.webp"
    ],
    link: "https://yandex.ru/maps/-/CDaBuT~2"
  },
  {
    id: 2,
    name: "Скейт-парк ЦСКА",
    adress: "Ходынский бульвар, 3а.",
    imagesSrc: ["/locations/cska1.webp", "/locations/cska2.webp", "/locations/cska3.webp"],
    link: "https://yandex.ru/maps/org/skeyt_park_khodynskoye_pole/5763131076/?ll=37.535619%2C55.786246&z=14.8"
  }
];

const pricingData = [
  {
    id: 0,
    currentDuration: "hour",
    trainingType: "Индивидуальное занятие",
    trainingDescription: "- индивидульное занятие, один на один с тренером",
    imageSrc: "/pricing/individual.jpg",
    duration: {
      hour: {
        firstTrainPrice: 1000,
        standardTrainPrice: 2000
      },
      halfAndHour: {
        firstTrainPrice: 1500,
        standardTrainPrice: 2800
      }
    }
  },
  {
    id: 1,
    currentDuration: "hour",
    trainingType: "Дуэт",
    trainingDescription:
      "Отличный выбор для того, чтобы провести время с вашим ребенком, с близким человеком или второй половинкой.",
    imageSrc: "/pricing/duo.jpg",
    duration: {
      hour: {
        firstTrainPrice: 1000,
        standardTrainPrice: 2800
      },
      halfAndHour: {
        firstTrainPrice: 1500,
        standardTrainPrice: 4000
      }
    }
  },
  {
    id: 2,
    currentDuration: "hour",
    trainingType: "Груповые",
    trainingDescription: "Занятие в группе от 3 до 6 человек",
    imageSrc: "/pricing/group.jpg",
    duration: {
      hour: {
        firstTrainPrice: 1000,
        standardTrainPrice: 1100
      },
      halfAndHour: {
        firstTrainPrice: 1500,
        standardTrainPrice: 1500
      }
    }
  },
  {
    id: 3,
    currentDuration: "hour",
    trainingType: "Тренировка на выезд",
    trainingDescription:
      "Тренер приедет в любое удобное вам место, даже если его нету в нашем стандартном списке локаций.",
    imageSrc: "/about/skateCamp.webp",
    duration: {
      hour: {
        firstTrainPrice: 1000,
        standardTrainPrice: 2000
      },
      halfAndHour: {
        firstTrainPrice: 1500,
        standardTrainPrice: 2500
      }
    }
  }
];

const mentorsData = [
  {
    id: 0,
    name: "Роман",
    age: "29 лет",
    experience: 12,
    description:
      "описание будет здесь описание будет здесь описание будет здесь мописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьммы",
    video: "/mentors/mentor1.mp4",
    thumb: "mentors/mentor-thumb1.webp"
  },
  {
    id: 1,
    name: "Михаил",
    age: "29 лет",
    experience: 5,
    description:
      "описание будет здесь описание будет здесь описание будет здесь мописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьммы",
    video: "/mentors/mentor2.mp4",
    thumb: "mentors/mentor-thumb2.webp"
  },
  {
    id: 2,
    name: "Александр",
    age: "29 лет",
    experience: 7,
    description:
      "описание будет здесь описание будет здесь описание будет здесь мописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьммы",
    video: "/mentors/mentor3.mp4",
    thumb: "mentors/mentor-thumb3.webp"
  },
  {
    id: 3,
    name: "Андрей",
    age: "29 лет",
    experience: 6,
    description:
      "описание будет здесь описание будет здесь описание будет здесь мописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьописание будет здесьммы",
    video: "/mentors/mentor4.mp4",
    thumb: "mentors/mentor-thumb4.webp"
  }
];

const accordionsData = [
  {
    id: 1,
    question: "How can I book a workout class?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime. adipisicing elit. Molestiae temporibus beatae, totam repudiandae adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam"
  },
  {
    id: 2,
    question: "Can I pay by cash for my membership?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.olestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.  adipisicing elit. Molestiae temporibus beatae, totam repudiandae"
  },
  {
    id: 3,
    question: "What age do I need to be to join?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.totam repudiandae nam recusandae ea dolores tempora maxime.  adipisicing elit. Molestiae temporibus beatae it amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime.totam repudiandae nam recusandae ea dolores"
  },
  {
    id: 4,
    question: "Are there any lockers?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae temporibus beatae, totam repudiandae nam recusandae ea dolores tempora maxime. dolor sit amet  dolor sit amet "
  }
];

export { aboutData, faqData, locationsData, pricingData, mentorsData, accordionsData };
