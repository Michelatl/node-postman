import express from 'express';
import {
    getadmin,
    getadmincc,
    getadmincc1,
    postAdmin,
    putAdmin,
    putAdmincc,
    putAdmincc1,
    deleteAdmi  } from '../services/manager.service';

  const router = express.Router();

  router.get('', async (req, res) => {
    try{
      const response = await getadmin();
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
      const response = await getadmincc(cc);
      res.status(response.code).json(response.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.get('/cc/:cc1', async (req,res) => {
    try{
      const cc = req.params.cc1; 

      const response = await getadmincc1(cc);
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

      const response = await postAdmin(body);
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
      const response = await putAdmin(body);
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

      const serviceLayerResponse = await putAdmincc(cc, body);

      res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });

  router.put('/1/:cc', async function (req, res) {
    try {
      const cc = req.params.cc;
      const body = req.body;

      const serviceLayerResponse = await putAdmincc1(cc, body);

      res.status(serviceLayerResponse.code).json(serviceLayerResponse.message);
    } catch (error) {
      console.log(error);
      const adminError = error as { code: number, message: string };
      res.status(adminError.code).json(adminError.message);
    }
  });


  router.delete('/admin', async function (req, res) {
    try{
      const response = await deleteAdmi();
      res.status(response.code).json({ result: response.result });
    }catch(error){
      console.log(error);
      const adminError = error as {code: number, message: string};
      res.status(adminError.code ).json(adminError.message );
    }
  });



  export default router;
