//      Assíncronismo

//#####################################################
//
//      Promisses => objeto de processamento assíncrono
//               inicialmente, seu valor é desconhecido.
//               Ela pode ser resolvida ou rejeitada.
//
//#####################################################

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Resolvida!'));
    }, 2000);
});

await myPromise
    .then((result) => result + 'passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));

//#####################################################
//
//      async/await
//
//#####################################################

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved;
}

resolvePromise(); // Promisse {<pending>}
await resolvePromise(); // "Resolvida passando pelo then e agora acabou!"

async function resolvePromise() {
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });

    let result;

    try {
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
            .catch((err) => console.log(err.message));
    } catch (err) {
        result = err.message;
    }


    return result;
}

//#####################################################
//
//      Consumo de APIs
//
//#####################################################

fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json))

fetch('https://endereco-api.com/', {
    method: 'GET',
    cache: 'no-cache',
}).then(response => response.json())
    .then(json => console.log(json))

fetch('https://endereco-api.com/', {
    method: 'POST',
    cache: 'no-cache',
    body: JSON.stringfy(data)
}).then(response => response.json())
    .then(json => console.log(json))