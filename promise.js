function getAluno(matricula) {
  return new Promise((resolve, reject) => {
    const aluno = { id: 123, nome: 'Claudiney Junior' };
    setTimeout(() => {
      if (!matricula) {
        reject('Matrícula aluno não encontrada');
      }
        resolve(aluno);
    }, 3000);
  });
}

function getProfessor(matricula) {
  return new Promise((resolve, reject) => {
    const professor = { id: 1, nome: 'José Carlos Bortot' };
    setTimeout(() => {
      if (!matricula) {
        reject('Matrícula professor não encontrada');
      }
        resolve(professor);
    }, 3000);
  });
}

getAluno(123).then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

getProfessor('ola').then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

/**
 * Abaixo temos um exemplo usando promise.all
 */

// const promises = [];

// promises.push(getProfessor(123));
// promises.push(getAluno(12));

// Promise.all(promises)
//   .then((resultados) => {
//     resultados.map((result) => console.log(result));
//   })
//   .catch((error) => console.log(error));

/**
 * Abaixo temos um exemplo consumindo uma função assíncrona utilizanod async / await
 */

// async function asyncrono() {
//   try {
//     const professor = await getProfessor(123);
//     console.log(professor);
//     const aluno = await getAluno(123);
//     console.log(aluno);
//   } catch(error) {
//     console.log(error);
//   }
// }

// asyncrono();