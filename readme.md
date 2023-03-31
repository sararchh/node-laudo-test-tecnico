
# Node API REST - Toxicological Report

  
## About
Back-end for testing and listing toxicological exams, where it is possible to pass the results and receive the test whether it was positive or negative

## How to run for development


1. Clone this repository
```bash
git clone https://github.com/sararchh/node-laudo-test-tecnico.git
```
2. Install all dependencies
```bash
npm i
```
3. Configure the `.env.development` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
```bash
APP_SECRET=
MONGO_FULL_URL=
```
4. Execute server
```bash
npm run dev
```
5. Build
```bash
npm run build
```
  

## Building and starting for production
  
```bash
npm run  build
npm start
```

## Routes

Necessary information in the body of each request

POST: /auth/sign-in
```
{
    "email": "teste@mail.com",
    "password": "123456"
}
```

POST: /auth/sign-up
```
{
    "name": "Usuário Teste",
    "password": "123456"
    "email": "teste@mail.com",
}
```

GET: /test/all
```
{ }
```

POST: /test/toxicological
```
{
    "codigo_amostra": "02383322",
    "Cocaína": "0.678",
    "Anfetamina": "0.1",
    "Metanfetamina": "0.1",
    "MDA": "0",
    "MDMA": "0",
    "THC": "0.1",
    "Morfina": "0.1",
    "Codeína": "0.1",
    "Heroína": "0.1",
    "Benzoilecgonina": "0.05",
    "Cocaetileno": "0.05",
    "Norcocaína": "0.05"
}
```
  ---

<p  align="center">Made with 💜 by <a  href="https://github.com/sararchh"  target="_blank">Sara Rocha</a></p>