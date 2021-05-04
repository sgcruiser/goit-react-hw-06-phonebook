import { createAction } from '@reduxjs/toolkit';

import { v4 as uuidv4 } from 'uuid';

const handleContact = createAction(
  'contacts/handleContact',
  ({ name, number }) => ({
    payload: { id: uuidv4(), name, number },
  }),
);

const deleteContact = createAction('contacts/deleteContact');
const changeFilter = createAction('contacts/changeFilter');

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { handleContact, deleteContact, changeFilter };
