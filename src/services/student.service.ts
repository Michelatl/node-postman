import {student } from '../types/student.type';
import {
    readstudent,
    readgetstudentcc,
    readgetstudentcc1,
    createstudent,
    updatestudent,
    updatestudentcc,
    updatestudentcc1,
    deletestudent

} from '../data/student.data';
interface ServiceLayerResponse {
    code: number,
    result?: student | student[],
    message?: string;
    errorMessage?: unknown,
  }

  const getstudent = (): Promise<ServiceLayerResponse> => {
    return new Promise((resolve, reject) => {
        readstudent()
        .then((dataLayerResponse: student[]) => {
          const localastudentDB = dataLayerResponse;
          resolve({ code: 200, result: localastudentDB});
        })
        .catch((error) => {
          reject({code: 500, message: "Error inesperado ", errorMessage: error });
        });
    });
  };
  const getstudentcc = (cc: string): Promise<{ code: number, message: string | student }> => {
    return new Promise((resolve, reject) => {
        readgetstudentcc (cc)
        .then(response => {
          if((response as student[]).length === 0){
            resolve({ code: 404 , message: 'El estudiante no se encuantra registrado' });
          }else{
            resolve({ code: 200, message: response as student });
          }
        })
        .catch(error => {
          reject({code: 500, message: "Error inesperado "});
        });
    });
  };

const getstudentcc1 = (cc: string): Promise<{ code: number, message: string | student }> => {
  return new Promise((resolve, reject) => {
    readgetstudentcc1(cc)
      .then((response) => {
        if((response as student[]).length === 0){
          resolve({ code: 404 , message: 'El estudiante no se encuantra registrado' });
        }else{
          resolve({ code: 200, message: response as student });
        }
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado "});
      });
  });
};

const poststudent= (body: student): Promise<{ code: number, message: string }> => {
  return new Promise((resolve, reject) => {
    createstudent(body)
      .then((response) => {
        resolve({code: 201, message: response as string });
      })
      .catch(error => {
        reject({code: 500, message: "Error inesperado "}); 
      });
  });
};

const putstudent= (body: student): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updatestudent(body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'El estudiante  fue actualizado correctamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'estudiante no encontrado'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};

const putstudentcc = (cc: string, body: student): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updatestudentcc(cc, body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'estudiante se actualizado exitosamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'estudiante no  se actualizo'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};


const putstudentcc1 = (cc: string, body: student): Promise<ServiceLayerResponse> => {
  return new Promise((resolve, reject) => {
    updatestudentcc1(cc, body)
      .then((dataLayerResponse) => {
        if(dataLayerResponse === 200)(
          resolve({code: 200, message: 'se actualizao la cc del estudiante correctamente' as string })
        );
      })
      .catch(error =>{
        if(error === 404){
          reject({ code: 404, message: 'cc del estudiante no  se actualizo'});
        }else{
          reject({ code: 500, message: 'Unexpected error', errorMessage: error});
        }
      });
  });
};

const deletestuden= (): Promise<{ code: number, result: student[] }> => {
  return new Promise((resolve, reject) => {
    deletestudent()
      .then((data) => {
        const localastudentDB: student[] = data as student[];
        resolve({ code: 200, result: localastudentDB });
      })
      .catch((error) => {
        reject({ code: 500, message: "Error inesperado", errorMessage: error });
      });
  });
};















export {
    getstudent,
    getstudentcc,
    getstudentcc1,
    poststudent,
    putstudent,
    putstudentcc,
    putstudentcc1,
    deletestuden
  };

