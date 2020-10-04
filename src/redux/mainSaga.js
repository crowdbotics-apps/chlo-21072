import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView125733Saga from '../features/CalendarView125733/redux/sagas';
import EmailAuth125732Saga from '../features/EmailAuth125732/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView125733Saga,
EmailAuth125732Saga,
    
  ]);
}