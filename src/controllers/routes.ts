import express from 'express';

import AdminControllerts from './manage.contrellers';
import studentControllerts from './student.controllers';

function routerApi(app: express.Application){
  // const router = express.Router();
  app.use('/manage', AdminControllerts);
  app.use('/student', studentControllerts);
}

export { routerApi };