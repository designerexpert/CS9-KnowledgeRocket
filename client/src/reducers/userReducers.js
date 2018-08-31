//@ts-check
import {
    LOGIN_USER,
    LOGGING_IN_USER,
    ADDING_USER,
    ADD_USER,
    LOGOUT_USER,
    LOGIN_USER_FAILURE,
    ADD_USER_FAILURE,
    UPGRADE_USER,
    ADD_COHORT,
    ADD_ROCKET,
    ADDING_ROCKET,
    DELETE_ROCKET,
    DELETING_ROCKET,
    ADD_STUDENT,
    ADDING_STUDENT,
    ADD_STUDENT_FAILURE,
    DELETE_STUDENT,
    APPENDING_ROCKETS,
    APPEND_ROCKETS,
    APPENDING_ROCKETS_FAILED,
    UPDATING_USER,
    UPDATE_USER_FAILURE,
    UPDATE_USER,
    UPLOAD_CSV,
    UPLOADING_CSV,
    UPLOAD_CSV_FAILURE,
} from '../actions';

const defaultState = {
    // Initialize Students Redux State/Store Portion Here
    uid: '',
    email: '',
    token: '',
    account: 'Free',
    authenticated: false,
    status: 'INITIAL',
    students: [],
    rockets: [],
    cohorts: [{ title: '', students: [{}], teacher: {}, rockets: [{rocketId: {}}] }],
};

export default (state = defaultState, action) => {
    let StateCopy = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADDING_ROCKET:
            StateCopy.status = ADDING_ROCKET;
            return StateCopy;
        case DELETING_ROCKET:
            StateCopy.status = DELETING_ROCKET;
            return StateCopy;
        case DELETE_ROCKET:
            StateCopy.status = ADD_ROCKET;
            // update cohort rockets
            let target = [];
            StateCopy.cohorts.forEach((c, cIndex) => {
                c.rockets.forEach((r, rIndex) => {
                    if (r.rocketId._id === action.payload.rocketId._id) {
                        target.push([cIndex, rIndex]);
                    }
                });
            });
            target.forEach(t => {
                StateCopy.cohorts[t[0]].rockets.splice(t[1], 1);
            });
            // update user rockets
            StateCopy.rockets.forEach((rocket, index) => {
                if (rocket._id === action.payload.rocketId._id) {
                    StateCopy.rockets.splice(index, 1);
                }
            });
            StateCopy.authenticated = true;
            return StateCopy;
        case ADD_ROCKET:
            StateCopy.status = ADD_ROCKET;
            // console.log('Payload inside ADD_Rocket Reducer', action.payload)
            StateCopy = { ...StateCopy, ...action.payload };
            StateCopy.authenticated = true;
            return StateCopy;
        case APPEND_ROCKETS:
            StateCopy = action.payload;
            StateCopy.authenticated = true;
            StateCopy.status = APPEND_ROCKETS;
            return StateCopy;
        case APPENDING_ROCKETS:
            StateCopy.status = APPENDING_ROCKETS;
            return StateCopy;
        case APPENDING_ROCKETS_FAILED:
            StateCopy.status = APPENDING_ROCKETS_FAILED;
            return StateCopy;
        case ADDING_USER:
            StateCopy.status = ADDING_USER;
            return StateCopy;
        case ADD_USER:
            StateCopy = { ...StateCopy, ...action.payload };
            StateCopy.authenticated = true;
            StateCopy.status = ADD_USER;
            return StateCopy;
        case UPGRADE_USER:
            StateCopy = { ...StateCopy, user: [...action.payload] };
            StateCopy.authenticated = true;
            StateCopy.status = UPGRADE_USER;
            return StateCopy;
        case UPDATING_USER:
            StateCopy.status = UPDATING_USER;
            return StateCopy;
        case UPDATE_USER_FAILURE:
            StateCopy.status = UPDATE_USER_FAILURE;
            return StateCopy;
        case UPDATE_USER:
            StateCopy = { ...StateCopy, ...action.payload };
            StateCopy.status = UPDATE_USER;
            StateCopy.authenticated = true;
            return StateCopy;
        case ADD_COHORT:
            StateCopy = { ...StateCopy, ...action.payload };
            StateCopy.authenticated = true;
            StateCopy.status = ADD_COHORT;
            return StateCopy;
        case ADDING_STUDENT:
            StateCopy.authenticated = true;
            StateCopy.status = ADDING_STUDENT;
            return StateCopy;
        case ADD_STUDENT_FAILURE:
            StateCopy.authenticated = true;
            StateCopy.status = ADD_STUDENT_FAILURE;
            return StateCopy;
        case ADD_STUDENT:
            StateCopy = action.payload;
            StateCopy.authenticated = true;
            StateCopy.status = ADD_STUDENT;
            return StateCopy;
        case DELETE_STUDENT:
            StateCopy.status = DELETE_STUDENT;
            let cohortIdx =  -1; // Initialize as a non index
            let studentIdx = -1; // Initialize as a non index
            StateCopy.cohorts.forEach((cohort, index) => {
                let students = cohort.students;
                for (let i = 0; i < students.length; i++) {
                    if (students[i]._id === action.payload._id) {
                        cohortIdx = index; // When Found save Cohort Index
                        studentIdx = i; // When Found save Student Index
                    }
                }
            });
            StateCopy.cohorts[cohortIdx].students.splice(studentIdx, 1);
            StateCopy.authenticated = true;
            return StateCopy;
        case UPLOAD_CSV:
            StateCopy = action.payload;
            StateCopy.authenticated = true;
            StateCopy.status = UPLOAD_CSV;
            return StateCopy;
        case UPLOADING_CSV:
            StateCopy.status = UPLOADING_CSV;
            return StateCopy;
        case UPLOAD_CSV_FAILURE:
            StateCopy.status = UPLOAD_CSV_FAILURE;
            return StateCopy;
        case ADD_USER_FAILURE:
            StateCopy.status = 'FAILED';
            return StateCopy;
        case LOGGING_IN_USER:
            StateCopy.status = LOGGING_IN_USER;
            return StateCopy;
        case LOGIN_USER_FAILURE:
            StateCopy.status = 'FAILED';
            return StateCopy;
        case LOGIN_USER:
            StateCopy = { ...StateCopy, ...action.payload };
            StateCopy.authenticated = true;
            StateCopy.status = LOGIN_USER;
            return StateCopy;
        case LOGOUT_USER:
            return defaultState;
        default:
            return state;
    }
};
