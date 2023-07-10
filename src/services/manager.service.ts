import {administrator } from '../types/anmin.types';
import {
    readAdmin,
    readgetcc,
    readgetcc1,
    createAdmin,
    updateAdmin,
    updateAdmincc,
    updateAdmincc1,
    deleteAdmin

} from '../data/Admin.data';

interface ServiceLayerResponse {
    code: number,
    result?: administrator | administrator[],
    message?: string;
    errorMessage?: unknown,
  }

  const getadmin = (): Promise<ServiceLayerResponse> => {
    return new Promise((resolve, reject) => {
        readAdmin()
        .then((dataLayerResponse: administrator[]) => {
          const localadministratorDB = dataLayerResponse;
          resolve({ code: 200, result: localadministratorDB});
        })
        .catch((error) => {
          reject({code: 500, message: "Error inesperado ", errorMessage: error });
        });
    });
  };
  const getadmincc = (cc: string): Promise<{ code: number, message: string | administrator }> => {
    return new Promise((resolve, reject) => {
      readgetcc (cc)
        .then(response => {
          if((response as administrator[]).length === 0){
            resolve({ code: 404 , message: 'El profesor no se encuantra registrado' });
          }else{
            resolve({ code: 200, message: response as administrator });
          }
        })
        .catch(error => {
          reject({code: 500, message: "Error inesperado "});
        });
    });
  };

const getadmincc1 = (cc: string): Promise<{ code: number, message: string | administrator }> => {
  return new Promise((resolve, reject) => {
    readgetcc1(cc)
      .then((response) => {
        if((response as administrator[]).length === 0){
          resolve({ code: 404 , message: 'El profesor no se encuantra registrado' });
        }else{
          resolve({ code: 200, message: response as administrator });
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado "});
      });
  });
};

const postAdmin= (body: administrator): Promise<{ code: number, message: string }> => {
  return new Promise((resolve, reject) => {
    createAdmin(body)
      .then((response) => {
        resolve({code: 201, message: response as string });
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado "}); 
      });
  });
};

const putAdmin = (body: administrator): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateAdmin(body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'El profesor  fue actualizado correctamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'profesor no encontrado'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};

const putAdmincc = (cc: string, body: administrator): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateAdmincc(cc, body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'profesor se actualizado exitosamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'profesor no  se actualizo'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};


const putAdmincc1 = (cc: string, body: administrator): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updateAdmincc1(cc, body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'se actualizao la cc del profesor correctamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'cc del profesor no  se actualizo'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};

const deleteAdmi = (): Promise<{ code: number, result: administrator[] }> => {
  return new Promise((resolve, reject) => {
    deleteAdmin()
      .then((data) => {
        const localadministratorDB: administrator[] = data as administrator[];
        resolve({ code: 200, result: localadministratorDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado", errorMessage: error });
      });
  });
};















export {
    getadmin,
    getadmincc,
    getadmincc1,
    postAdmin,
    putAdmin,
    putAdmincc,
    putAdmincc1,
    deleteAdmi
  };

