/** Gets random object in answers array */

function getRandom(answers) {
  const randomIndex = Math.floor(Math.random() * answers.length - 1);
  return answers[randomIndex];
}

export default getRandom;