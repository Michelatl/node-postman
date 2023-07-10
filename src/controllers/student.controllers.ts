import express from 'express';
import {
  getstudent,
  getstudentcc,
  getstudentcc1,
  poststudent,
  putstudent,
  putstudentcc,
  putstudentcc1,
  deletestuden
  } from '../services/student.service';
  const router = express.Router();

  router.get('', async (req, res) => {
    try{
      const response = await getstudent();
      res.status(response.code).json({ result: response.result });
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.get('/cc/:cc', async (req,res) => {
    try{
      const cc = req.params.cc;
      const response = await getstudentcc(cc);
      res.status(response.code).json(response.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.get('/cc/:cc1', async (req,res) => {
    try{
      const cc = req.params.name; // Se obtiene el nombre del parámetro de la petición y se guarda en una variable.

      const response = await getstudentcc1(cc);
      res.status(response.code).json(response.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.post('', async function(req, res) {
    try{
      const body = req.body;

      const response = await poststudent(body);
      res.status(response.code).json(response.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.put('/cc', async function (req, res) {
    try{
      const body = req.body
      const response = await putstudent(body);
      res.status(response.code).json(response.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.put('/:cc', async function (req, res) {
    try{
      const cc = req.params.cc;
      const body = req.body;

      const serviceLayerResponse = await putstudentcc(cc, body);

      res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.put('/1:cc', async function (req, res) {
    try{
      const cc = req.params.cc;
      const body = req.body;

      const serviceLayerResponse = await putstudentcc1(cc, body);

      res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.delete('/admin', async function (req, res) {
    try{
      const response = await deletestuden();
      res.status(response.code).json({ result: response.result });
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });



  export default router;
