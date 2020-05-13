const questions = [
  {
    title: "topact",
    question: "Who is the top selling musical act of all time?",
    answers: [
      { value: 0, answer: "U2" },
      { value: 0, answer: "Elvis Presley" },
      { value: 0, answer: "Michael Jackson" },
      { value: 5, answer: "The Beatles" },
    ],
  },
  {
    title: "prince",
    question:
      "At 20-years-old, this artist played over 27 different instruments by himself on his debut album 'For You.'",
    answers: [
      { value: 5, answer: "Prince" },
      { value: 0, answer: "Stevie Wonder" },
      { value: 0, answer: "John Lennon" },
      { value: 0, answer: "BB King" },
    ],
  },
  {
    title: "clapton",
    question:
      "After the unexpected death of his 4-year-old son in 1991, Eric Clapton wrote this acoustic ballad as a tribute to his life.",
    answers: [
      { value: 0, answer: "Layla" },
      { value: 0, answer: "Badge" },
      { value: 5, answer: "Tears In Heaven" },
      { value: 0, answer: "Wonderful Tonight" },
    ],
  },
  {
    title: "elvis",
    question:
      "This Mississippi native is widely recognized as a primary source of inspiration for British Rock and Roll bands such as The Beatles, The Rolling Stones, Cream and Led Zeppelin.",
    answers: [
      { value: 0, answer: "Muddy Waters" },
      { value: 5, answer: "Elvis Presley" },
      { value: 0, answer: "Robert Johnson" },
      { value: 0, answer: "Guitar Slim" },
    ],
  },
  {
    title: "jay",
    question:
      "This mogul became the first certified billionaire hip-hop artist in 2019 by Forbes Magazine.",
    answers: [
      { value: 0, answer: "Dr. Dre" },
      { value: 0, answer: "Diddy" },
      { value: 5, answer: "JAY-Z" },
      { value: 0, answer: "Master P" },
    ],
  },
  {
    title: "thriller",
    question: `Featuring hit songs like "Billie Jean," "Human Nature," "Wanna Be Startin' Something" and "Beat It" this album is the top selling album of all time.`,
    answers: [
      { value: 0, answer: "Bad" },
      { value: 0, answer: "Off The Wall" },
      { value: 0, answer: "Dangerous" },
      { value: 5, answer: "Thriller" },
    ],
  },
  {
    title: "jimi",
    question:
      "On August 18th, 1969 this iconic guitar player closed out the inaugural Woodstock Festival with a sunrise set.",
    answers: [
      { value: 0, answer: "Carlos Santana" },
      { value: 5, answer: "Jimi Hendrix" },
      { value: 0, answer: "Richie Havens" },
      { value: 0, answer: "Jerry Garcia" },
    ],
  },
  {
    title: "tool",
    question:
      "After a 15 year hiatus from the recording studio, this legendary prog-rock band released a new album in 2019 titled 'Fear Innoculum.'",
    answers: [
      { value: 5, answer: "Tool" },
      { value: 0, answer: "Soundgarden" },
      { value: 0, answer: "Pearl Jam" },
      { value: 0, answer: "Queens of the Stoneage" },
    ],
  },
  {
    title: "passaway",
    question:
      "Jimi Hendrix, Janis Joplin, Jim Morrison, Amy Winehouse and Kurt Cobain all passed away unexpectedly at this age.",
    answers: [
      { value: 0, answer: "21" },
      { value: 0, answer: "25" },
      { value: 0, answer: "26" },
      { value: 5, answer: "27" },
    ],
  },
  {
    title: "manson",
    question:
      "Known for his eccentric theatrics on stage, detailed make up and costume changes, this shock rocker was falsely accused of inspiring the Columbine High School shootings in 1999.",
    answers: [
      { value: 0, answer: "Rob Zombie" },
      { value: 0, answer: "Alice Cooper" },
      { value: 5, answer: "Marilyn Manson" },
      { value: 0, answer: "Gene Simmons" },
    ],
  },
  {
    title: "phish",
    question:
      "This jam band performed the largest millennium concert in the world on 12/31/99 to over 80,000 fans in south Florida.",
    answers: [
      { value: 0, answer: "The Grateful Dead" },
      { value: 0, answer: "The Allman Brothers" },
      { value: 0, answer: "Widespread Panic" },
      { value: 5, answer: "Phish" },
    ],
  },
  {
    title: "rhcp",
    question: `This California quartet won their first Grammy award in 1993 for Best Hard Rock Performance with their song "Give It Away."`,
    answers: [
      { value: 5, answer: "Red Hot Chili Peppers" },
      { value: 0, answer: "Jane's Addiction" },
      { value: 0, answer: "Rage Against The Machine" },
      { value: 0, answer: "Incubus" },
    ],
  },
  {
    title: "billie",
    question:
      "At only 18-years-old this female artist is the youngest artist in history to record the theme song for a James Bond movie.",
    answers: [
      { value: 0, answer: "Whitney Houston" },
      { value: 0, answer: "Mariah Carey" },
      { value: 0, answer: "Aretha Franklin" },
      { value: 5, answer: "Billie Eilish" },
    ],
  },
  {
    title: "marvin",
    question:
      "Which famous American musician was fatally shot by his father on April 1, 1984?",
    answers: [
      { value: 0, answer: "Al Green" },
      { value: 0, answer: "Otis Redding" },
      { value: 5, answer: "Marvin Gaye" },
      { value: 0, answer: "Sam Cooke" },
    ],
  },
  {
    title: "dave",
    question:
      "This multi-instrumentalist was originally the drummer for Nirvana before founding the Foo Fighters as the band's rhythm guitar player and lead singer.",
    answers: [
      { value: 5, answer: "Dave Grohl" },
      { value: 0, answer: "Krist Novoselic" },
      { value: 0, answer: "Danny Carey" },
      { value: 0, answer: "Jack Irons" },
    ],
  },
  {
    title: "aretha",
    question:
      "Who was the first female artist inducted in the Rock and Roll Hall of Fame?",
    answers: [
      { value: 0, answer: "Whitney Houston" },
      { value: 0, answer: "Dusty Springfield" },
      { value: 5, answer: "Aretha Franklin" },
      { value: 0, answer: "Patti LaBelle" },
    ],
  },
  {
    title: "mtv",
    question:
      "Who was the first artist to air on MTV when the channel was first broadcasted on August 1, 1981?",
    answers: [
      { value: 5, answer: "The Buggles" },
      { value: 0, answer: "Pat Benatar" },
      { value: 0, answer: "Rod Stewart" },
      { value: 0, answer: "The Who" },
    ],
  },
  {
    title: "bowie",
    question: `David Bowie performed the song "Under Pressure" with what other singer?`,
    answers: [
      { value: 0, answer: "Mick Jagger" },
      { value: 0, answer: "Paul McCartney" },
      { value: 0, answer: "Robert Plant" },
      { value: 5, answer: "Freddie Mercury" },
    ],
  },
  {
    title: "zeppelin",
    question:
      "In what year did Led Zeppelin make their debut in the United States?",
    answers: [
      { value: 5, answer: "1968" },
      { value: 0, answer: "1969" },
      { value: 0, answer: "1965" },
      { value: 0, answer: "1970" },
    ],
  },
  {
    title: "floyd",
    question:
      "Following its release in 1973, which Pink Floyd album remained on the U.S. Billboard album charts for over 750 weeks (almost 14 years)?",
    answers: [
      { value: 0, answer: "The Piper at the Gates of Dawn" },
      { value: 0, answer: "The Wall" },
      { value: 0, answer: "Animals" },
      { value: 5, answer: "Dark Side of the Moon" },
    ],
  },
];

const formElement = document.getElementById("form1");
questions.forEach((question) => {
  const container = document.createElement("div");
  const questionElement = document.createElement("p");
  questionElement.innerText = question.question;
  container.appendChild(questionElement);
  question.answers.forEach((answer) => {
    const answerElement = document.createElement("input");
    answerElement.setAttribute("type", "radio");
    answerElement.setAttribute("name", question.title);
    answerElement.setAttribute("value", answer.value);
    const answerText = document.createElement("p");
    answerText.innerText = answer.answer;
    answerText.setAttribute("class", "answers");
    const breakElement = document.createElement("br");
    answerText.appendChild(breakElement);
    container.appendChild(answerElement);
    container.appendChild(answerText);
  });
  formElement.appendChild(container);
});

document.getElementById("submitbutton").addEventListener("click", myFunction);

function myFunction(event) {
  console.log("Click");
  event.preventDefault();
  let result = 0;
  questions.forEach((question) => {
    const value = document.querySelector(
      `input[name = "${question.title}"]:checked`
    ).value;
    result += parseInt(value);
  });

  let correctAnswers = document.querySelectorAll('input[value="5"]');
  correctAnswers.forEach((answer) => {
    let answerText = answer.nextSibling;
    answerText.style.backgroundColor = "yellow";
  });

  document.getElementById("grade").innerHTML = result;

  return false;
}
