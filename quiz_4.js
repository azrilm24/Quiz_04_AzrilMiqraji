const nama = 'Azril Miqraji'

// object pertanyaan
const questions = [
    {
      nomor: " 1",
      pertanyaan: "berapa hasil dari 1 + 1?",
      opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
    },
    {
        nomor: " 2",
        pertanyaan: "berapa hasil dari 2 + 2?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
      },
      {
        nomor: " 3",
        pertanyaan: "berapa hasil dari 2 + 4? ",
        opsi: ["a. 2", " b. 4", "c. 6", " d. 8"],
      },
      {
        nomor: " 4",
        pertanyaan: "berapa hasil dari 2 + 5? ",
        opsi: ["a. 2", "b. 5", "c. 7", "d. 9"],
      },
      {
        nomor: " 5",
        pertanyaan: "berapa hasil dari 4 + 5 ?",
        opsi: ["a. 2", "b. 5", "c. 7", "d. 9"],
      },
      {
        nomor: " 6",
        pertanyaan: "berapa hasil dari 1 - 1?",
        opsi: ["a. 0", "b. 3", "c. 4", "d. 5"],
      },
      {
        nomor: " 7",
        pertanyaan: "berapa hasil dari 10 / 10?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 1"],
      },
      {
        nomor: " 8",
        pertanyaan: "berapa hasil dari 5 x 2?",
        opsi: ["a. 2", "b. 10", "c. 4", "d. 5"],
      },
      {
        nomor: " 9",
        pertanyaan: "berapa hasil dari 7 x 1?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 7"],
      },
      {
        nomor: " 10",
        pertanyaan: "berapa hasil dari (2x1) + (2+2)?",
        opsi: ["a. 2", "b. 3", "c. 4", "d. 5"],
      },
]

// object jawaban user
const answer_input_user = [
    {
       answer_user : "a. 2",
    },
    {
       answer_user : "c. 4",
    },
    {
      answer_user : "c. 6",
    },
    {
      answer_user : "d. 9",
    },
    {
      answer_user : "c. 7",
    },
    {
      answer_user : "a. 0",
    },
    {
      answer_user : "d. 1",
    },
    {
      answer_user : "b. 10",
    },
    {
      answer_user : "d. 7",
    },
    {
      answer_user : "d. 5",
    },
]

// object jawaban benar
const correct_answer = [
    {
      nomor: " 1",
      answer: "a. 2",
    },
    {
        nomor: " 2",
        answer: "c. 4",
      },
      {
        nomor: " 3",
        answer: "c. 6",
      },
      {
        nomor: " 4",
        answer: "c. 7",
      },
      {
        nomor: " 5",
        answer: "d. 9",
      },
      {
        nomor: " 6",
        answer: "a. 0",
      },
      {
        nomor: " 7",
        answer: "d. 1",
      },
      {
        nomor: " 8",
        answer: "b. 10",
      },
      {
        nomor: " 09",
        answer: "d. 7",
      },
      {
        nomor: " 10",
        answer: "d. 5",
      },
]

let point_benar = 0;
let point_salah = 0;

for (let i= 0; i < questions.length; i++){
    console.log("pertanyaan" + questions[i].nomor , questions[i].pertanyaan, questions[i].opsi);
    console.log("jawaban anda: " + answer_input_user[i].answer_user);
    console.log("jawaban benar:  " + correct_answer[i].answer);

    // perbandingan antara jawaban user dan jawaban benar
 if ( answer_input_user[i].answer_user === correct_answer[i].answer) {
      console.log('Jawaban benar! Poin benar ditambah satu.\n');
      point_benar++;
    } else {
      console.log('Jawaban Salah! Poin salah ditambah satu.\n');
      point_salah++;
   };
}

console.log("terimakasih "  + nama + " telah menyelesaikan test ini...")
console.log("anda menjawab " + point_benar +" pertanyaan dengan benar")
console.log("dan " + point_salah + " pertanyaan salah")


// let point_benar = 0
// let point_salah = 0

// if (answer_input_user.answer_input === questions.correctAnswer ) {
//     console.log('point benar ditambah satu')
//     point_benar++
// } else {
//     console.log('point salah ditambah satu')
//     point_salah++
// }

