import { studentDB } from '../studentDB';
import { student } from '../types/student.type';

let localastudentDB = studentDB;

const readstudent = (): Promise<student[]> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(studentDB);
      } catch (error) {
        reject(error);
      }
    });
  };

  const  readgetstudentcc = (cc: string) =>{
    return new Promise((resolve, reject) => {
      try {
        const result = studentDB.filter(item => item.cc === cc);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  const readgetstudentcc1 = (cc: string) =>{
    return new Promise((resolve, reject)=> {
      try {
        const result = studentDB.find((item) => item.cc === cc);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  const createstudent = (body: student) => {
    return new Promise((resolve, reject) => {
      try {
        studentDB.push(body);
        resolve('Se ha agregado profesor correctamente');
      } catch (error) {
        reject(error);
      }
    });
  };

  const updatestudent = (body: student) => {
    return new Promise( async (resolve, reject) => {
      try {
        const updateAdmin = studentDB.push(body);;

        if(studentDB === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const updatestudentcc = (cc: string, body: student) => {
    return new Promise( async (resolve, reject) => {
      try {
        const studentIndex = studentDB.findIndex((item) => item.cc !== cc);
        studentDB[studentIndex] = body;
        if(studentIndex === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const updatestudentcc1 = (cc: string, body: student) => {
    return new Promise( async (resolve, reject) => {
      try {
        const studentIndex = studentDB.findIndex((item) => item.cc === cc);
  if (studentIndex !== -1) {
    studentDB[studentIndex].cc = body.cc;
  }
        if(studentIndex === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const deletestudent = () => {
    return new Promise((resolve, reject) => {
      try {
        if((studentDB.length === 0)== null){
          reject(404);
        } else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  export{
    readstudent,
    readgetstudentcc,
    readgetstudentcc1,
    createstudent,
    updatestudent,
    updatestudentcc,
    updatestudentcc1,
    deletestudent
  }
