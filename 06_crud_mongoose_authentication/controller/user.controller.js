const userModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        // if user is not found and hashedpassword from db and user typed password does not match
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid credentials" });
        }
        // if user is found and credientials match ( create a jwt token )
        // also include the data id, email and username in the token itself
        const token = jwt.sign(
            { id: user._id, email: user.email, username: user.username },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h",
            }
        );
        res.json({ success: true, message: "Logged in", token });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        // need to hash the password, using the installed bcrypt package
        const hashedPassword = await bcrypt.hash(password, 10);
        // save the payload (username, email) along with hashedpassword
        const user = new userModel({ username, email, password: hashedPassword });
        await user.save();
        res
            .status(201)
            .json({ success: true, message: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

module.exports = { loginUser, registerUser };
