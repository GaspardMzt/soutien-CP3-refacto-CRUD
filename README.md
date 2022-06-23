## Getting Started

Npm i
git checkout -b dev
.env : avec un nom d’une nouvelle BDD
démarrer mysql
npx prisma studio
npm run dev (ou yarn dev)

## Puis

On supprime tout dans pages/api/students/ [id].js et index.js et on va réécrire en refactorisant.
-> Avec next-connect, plus simple, ressemble à express : https://www.npmjs.com/package/next-connect
npm i next-connect

Créer middlwares / commons.js et y copier :
import nc from "next-connect";

    export default function base() {
    return nc({
        onError: (err, req, res, next) => {
        console.error(err.stack);
        res.status(500).end("Sorry, an error occured, please try again later");
        },
        onNoMatch: (req, res, next) => {
        res.status(404).end("Not found");
        },
    });
    }

## Puis

Dans pages / api / students :
On va créer une fonction par méthode qu'on va ensuite exporter en bas.
Ne pas oublier : le middlware : on y a définit une base (qu'il faudra importer)
