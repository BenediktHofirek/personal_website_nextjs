import { useState } from 'react';
import styles from './faqSection.module.scss';

export default function faqSection({containerClass}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questionMap = {
    0: {
      index: 0,
      question: "Where are you from?",
      answer: "I'm from Brno, second biggest city in the Czech Republic."
    },
    1: {
      index: 1,
      question: "What languages do you speak?",
      answer: "Besides Javascript, I speak English and German too."
    },
    2: {
      index: 2,
      question: "Are you currently looking for a job?",
      answer: "Yes, I'm. If you have one, please leave me a message."
    },
    3: {
      index: 3,
      question: "What are your hobbies?",
      answer: "I like to play chess and other mathematic-based games."
    },
  }

  return (
    <div className={"section " + containerClass}>
      <div className="sectionTitle">
        <h2 className="sectionTitle_content">FAQ</h2>
      </div>
      <div className={styles.contentContainer}>
        {
          Object.values(questionMap).map((question) => (
            <div
              key={question.index}
              className={styles.question}
              onClick={() => setCurrentQuestion(question.index)}
              {...(question.index === currentQuestion ? {active: 'active'} : {})}
            >
              <div className={styles.question_titleContainer}>
                <h3 className={styles.question_title}>{question.question}</h3>
              </div>
              <p className={styles.question_answer}>
                {question.answer}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}