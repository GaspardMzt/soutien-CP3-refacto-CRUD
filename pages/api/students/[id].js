import base from "../../../middlewares/common";

// penser à faire d'abord le get avant le delete, sinon le delete supprime tout
import {
  deleteOneStudent,
  getOneStudent,
  patchOneStudent,
} from "../../../models/student";

const handleGet = async (req, res) => {
  const student = await getOneStudent(req.query.id);
  return res.status(201).send(student);
};

const handlePatch = async (req, res) => {
  const student = await patchOneStudent(req.body);
  return res.status(201).send(student);
};

const handleDelete = async (req, res) => {
  const student = await deleteOneStudent(req.query.id);
  return res.status(201).send(student);
};

export default base().get(handleGet).patch(handlePatch).delete(handleDelete);

// ANCIEN QU'ON VA REFACTO :
// const {
//   deleteOneStudent,
//   getOneStudent,
//   patchOneStudent,
// } = require("../../../models/student");

// async function handler(req, res) {
//   if (req.method === "DELETE") {
//     const studentToDelete = await deleteOneStudent(req.query.id);
//     return res.status(201).send(studentToDelete);
//   } else if (req.method === "PATCH") {
//     const studentToPatch = await patchOneStudent(req.body);
//     return res.status(201).send(studentToPatch);
//   } else if (req.method === "GET") {
//     const student = await getOneStudent(req.query.id);
//     return res.status(201).send(student);
//   }
// }

// export default handler;
