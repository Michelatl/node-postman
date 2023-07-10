import { administratorDB } from '../AdminDB';
import { administrator } from '../types/anmin.types';


let localadministratorDB = administratorDB;

const readAdmin = (): Promise<administrator[]> => {
    return new Promise((resolve, reject) => {
      try {
        resolve(administratorDB);
      } catch (error) {
        reject(error);
      }
    });
  };

  const readgetcc = (cc: string) =>{
    return new Promise((resolve, reject) => {
      try {
        const result = administratorDB.filter(item => item.cc === cc);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  const readgetcc1 = (cc: string) =>{
    return new Promise((resolve, reject)=> {
      try {
        const result = administratorDB.find((item) => item.cc === cc);
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  };

  const createAdmin = (body: administrator) => {
    return new Promise((resolve, reject) => {
      try {
        administratorDB.push(body);
        resolve('Se ha agregado profesor correctamente');
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateAdmin = (body: administrator) => {
    return new Promise( async (resolve, reject) => {
      try {
        const updateAdmin = administratorDB.push(body);;

        if(administratorDB === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateAdmincc = (cc: string, body: administrator) => {
    return new Promise( async (resolve, reject) => {
      try {
        const administratorIndex = administratorDB.findIndex((item) => item.cc !== cc);
        administratorDB[administratorIndex] = body;
        if(administratorIndex === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const updateAdmincc1 = (cc: string, body: administrator) => {
    return new Promise( async (resolve, reject) => {
      try {
        const administratorIndex = administratorDB.findIndex((item) => item.cc === cc);
  if (administratorIndex !== -1) {
    administratorDB[administratorIndex].cc = body.cc;
  }
        if(administratorIndex === null){
          reject(404);
        }else{
          resolve(200);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  const deleteAdmi = () => {
    return new Promise((resolve, reject) => {
      try {
        if((administratorDB.length === 0)== null){
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
    readAdmin,
    readgetcc,
    readgetcc1,
    createAdmin,
    updateAdmin,
    updateAdmincc,
    updateAdmincc1,
    deleteAdmi
  }

