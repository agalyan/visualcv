import data from '../config/data.json';

export function getQuestions() {
  // Simulate data retrieval from the remote server
  //
  return new Promise(resolve => setTimeout(resolve(data), 700));
}

export function submitAnswers(data) {
  // @TODO: send data to remote server  
  //
  for (var [key, value] of data.entries()) {
    console.log(key, value);
  }
}