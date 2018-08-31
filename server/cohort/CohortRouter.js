//@ts-check
const router = require('express').Router();
const Cohort = require('./Cohort');
const User = require('../user/User');
const subHours = require('date-fns/sub_hours');
const timeOffset = require('../timeOffset.js');

router
    .route('/')
    .get(get)
    .post(post);
router.route('/appendrocket').post(appendRocket);
router
    .route('/:id')
    .put(put)
    .get(getid)
    .delete(deleteid);

function get(req, res) {
    Cohort.find()
        .then(expected => {
            res.status(200).json(expected);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'There was an error in GET' });
        });
}

function appendRocket(req, res) {
    //rocketID, startDate, userID, cohortID
    const { rocketID, startDate, userID, cohortID } = req.body;
    const parsedStartDate = Number(startDate);
    const timeMinusOffset = Number(subHours(new Date(parsedStartDate), timeOffset.UTCToPSTHourOffset));
    // Had to add 10 MS to the dates for actual moment to interpret past midnight
    const rocketObject = {
        rocketId: rocketID,
        startDate: timeMinusOffset,
        td: timeMinusOffset + 48 * 60 * 60 * 1000,
        tw: timeMinusOffset + 14 * 24 * 60 * 60 * 1000,
        tm: timeMinusOffset + 60 * 24 * 60 * 60 * 1000,
    };
    Cohort.findById(cohortID)
        .populate('rockets')
        .then(foundCohort => {
            // Find inside rockets array if a rocket matching rocketID exists
            // If exists: modify it with new schedule, etc.
            // else: push a new rocket to the array.
            let included = false;
            foundCohort.rockets.forEach((rocket, i) => {
                if (String(rocket.rocketId._id) === rocketID) {
                    foundCohort.rockets[i] = rocketObject;
                    included = true;
                }
            });
            if (!included) {
                foundCohort.rockets.push(rocketObject);
            }
            Cohort.findByIdAndUpdate(cohortID, foundCohort)
                .then(() => {
                    User.findById(userID)
                        
                        .then(populatedUser => {
                            console.log(populatedUser)
                            res.status(201).json(populatedUser);
                        })
                        .catch(failureToPopulateUser => {
                            res.status(500).json({
                                failureToPopulateUser: failureToPopulateUser.message,
                            });
                        });
                })
                .catch(errorAdding => {
                    res.status(500).json({ errorAdding: errorAdding.message });
                });
        })
        .catch(errFinding => {
            res.status(500).json({ errorFinding: errFinding.message });
        });
}

function post(req, res) {
    const id = req.body.id; // USERS ID
    const updateCohortId = req.body.cohort._id;
    let cohort = req.body.cohort;
    if (!updateCohortId) {
        cohort = new Cohort(req.body.cohort);
        cohort
            .save()
            .then(savedCohort => {
                User.findOne({ _id: id })
                    .then(found => {
                        found.cohorts.push(savedCohort._id);
                        User.findByIdAndUpdate(id, { cohorts: found.cohorts })
                            .then(() => {
                                User.findOne({ _id: id })
                                    .then(user => {
                                        res.status(201).json(user); // sends user w/ populated cohorts
                                    })
                                    .catch();
                            })
                            .catch(err => {
                                res.status(500).json({ errorMessage: err.message });
                            });
                    })
                    .catch(err => {
                        res.status(500).json({ errorMessage: err.message });
                    });
            })
            .catch(err => {
                res.status(500).json({ message: 'There was an error in POST' });
            });
    } else {
        // TODO: Implement: Updating Cohort
    }

    cohort
        .save()
        .then(savedCohort => {
            User.findOne({ _id: id })
                .then(found => {
                    found.cohorts.push(savedCohort._id);
                    User.findByIdAndUpdate(id, { cohorts: found.cohorts })
                        .then(() => {
                            User.findOne({ _id: id })
                                .then(user => {
                                    res.status(201).json(user); // sends user w/ populated cohorts
                                })
                                .catch();
                        })
                        .catch(err => {
                            res.status(500).json({ errorMessage: err.message });
                        });
                })
                .catch(err => {
                    res.status(500).json({ errorMessage: err.message });
                });
        })
        .catch(err => {
            res.status(500).json({ message: 'There was an error in POST' });
        });
}
function getid(req, res) {
    const id = req.params.id;

    Cohort.findById(id)
        .then(expected => {
            res.status(200).json(expected);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error on GETID' });
        });
}
function put(req, res) {
    const id = req.params.id;
    const { title, teacher, cc, students, rockets } = req.body;
    if (!Cohort.findById(id)) {
        res.status(404).json({ message: 'Cohort not found' });
    }
    Cohort.findByIdAndUpdate(id, req.body)
        .then(expected => {
            res.status(201).json(expected);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error on PUT' });
        });
}
function deleteid(req, res) {
    const id = req.params.id;
    if (!Cohort.findById(id)) {
        res.status(404).json({ message: 'Cohort not found' });
    }
    Cohort.findByIdAndRemove(id)
        .then(expected => {
            res.status(204).json(expected);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error on DEL' });
        });
}

module.exports = router;
