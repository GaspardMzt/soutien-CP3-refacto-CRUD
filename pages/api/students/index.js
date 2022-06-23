import base from "../../../middlewares/common";
import {
  createStudent,
  getStudents,
  // deleteAllStudents,
} from "../../../models/student";

const handlePost = async (req, res) => {
  const user = await createStudent(req.body);
  res.status(201).send(user);
};

const handleGet = async (req, res) => {
  res.send(await getStudents());
};

//  ecriture nouvelle méthode pour supprimer tout, marche pas :
// const handleDeleteAll = async (req, res) => {
//   res.send(deleteAllStudents());
// };

export default base().post(handlePost).get(handleGet);

// ANCIEN QU'ON VA REFACTO :
// const { createStudent, getStudents } = require("../../../models/student");

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const { firstname, lastname, campus } = req.body;
//     const user = await createStudent(req.body);
//     return res.status(201).send(user);
//   } else if (req.method === "GET") {
//     const users = await getStudents();
//     return res.status(201).send(users);
//   }
// }

// export default handler;
