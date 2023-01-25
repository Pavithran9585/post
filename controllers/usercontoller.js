const usermodel = require('../models/usermodel');

const createusers = (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    // const { Name, Email, Password } = req.body;  
    console.log(name, email, password);
    // console.log(email)

    try {
        const NewUser = new usermodel({
            name: name,
            email: email,
            password: password
        });
        NewUser.save(function (err, result) {
            if (err) {
                res.send({ statuscode: 400, message: "failed" });
            } else {
                res.send({ statuscode: 200, message: "created successfully" });
            }

        })
    } catch (err) {
        res.send({ statuscode: 400, message: "failed" });
    }
};

//get method vadilation 

const Getusers = (req, res) => {
    const email = req.params.email
    console.log(email)
    try {
        usermodel.findOne({ email: email }, function (err, result) {
            if (err) {
                res.send({ statusCode: 400, message: "Failed" });
            } else if (result === null) {
                res.send({ statusCode: 204, message: 'No Records Found' });
            } else {
                res.send({ statusCode: 200, message: result });
            }

        })
    } catch (err) {
        res.send({ statusCode: 400, message: "Failed" });
    }
};

//UpdateUser
const UpdateUser = (req, res) => {

    const id = req.params.id;
    const Name = req.body.Name;
    // const UpdateUser_Modified_On = moment().tz('Asia/Kolkata').format("DD-MM-YYYY hh:mm A");
    //  const update({ name: name, capital: capital, continent: continent}, function(name) {
    //     res.redirect('/places/'+name)
    try {
        if (Name) {
            usermodel.findById({ _id: id }, function (err, result) {
                if (err) {
                    res.send({ statusCode: 400, message: 'Failed' });
                }
                else if (result === null) {
                    res.send({ statusCode: 204, message: 'No Records Found' });
                } else {
                    console.log(result)
                    usermodel.findOneAndUpdate({ _id: id },
                        {
                            $set: {
                                Name: Name
                            }

                        }, function (err, result) {
                            if (err) {
                                res.send({ statusCode: 400, message: 'Failed' });
                            } else {
                                res.send({ statusCode: 200, message: "Updated Successfully" })
                            }

                        });
                }
            });
        };
    } catch (err) {
        console.log({ statusCode: 400, message: 'Failed' });
    };
};

//Delete User
const DeleteUser = (req, res) => {
    const id = req.params.id;
    usermodel.findOneAndDelete({ _id: id },
        function (err, result) {
            if (err) {
                res.send({ statusCode: 400, message: "Failed" });
            } else {
                res.send({ statusCode: 200, message: "Deleted Successfully" });
            }
        });
}

module.exports = {
    createusers,
    Getusers,
    UpdateUser,
    DeleteUser
};




