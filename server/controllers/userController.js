// import userModel from "../models/userModel.js";
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// const registerUser = async (req, res) => {
//     try {
//         const { name, email, password } = req.body;

//         if (!name || !email || !password) {
//             return res.json({ success: false, message: 'Missing Details' });
//         }

//         // Optional: Check if user already exists
//         const existingUser = await userModel.findOne({ email });
//         if (existingUser) {
//             return res.json({ success: false, message: 'Email already registered' });
//         }

//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         const newUser = new userModel({
//             name,
//             email,
//             password: hashedPassword
//         });

//         const user = await newUser.save();

//         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//         res.json({
//             success: true,
//             token,
//             user: { name: user.name, email: user.email }
//         });

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const user = await userModel.findOne({ email });

//         if (!user) {
//             return res.json({ success: false, message: 'User does not exist' });
//         }

//         const isMatch = await bcrypt.compare(password, user.password);

//         if (isMatch) {
//             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
//             return res.json({
//                 success: true,
//                 token,
//                 user: { name: user.name, email: user.email }
//             });
//         } else {
//             return res.json({ success: false, message: 'Invalid Credentials' }); // ❗ FIXED
//         }
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// const userCredits=async(req,res)=>{
//     try{
//          const{userId} = req.body

//          const user = await userModel.findById(userId)
//          res.json({succes: true , credits: user.creditBalance ,
//          user : {name: user.name}})
//     }

//     catch(error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });

//     }
// }

// export { registerUser, loginUser,userCredits };



import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Register User
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: 'Email already registered' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({
            success: true,
            token,
            user: { name: user.name, email: user.email }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Login User
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: 'User does not exist' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
            return res.json({
                success: true,
                token,
                user: { name: user.name, email: user.email }
            });
        } else {
            return res.json({ success: false, message: 'Invalid Credentials' });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// Get User Credits
const userCredits = async (req, res) => {
    try {
        const userId = req.userId;  // ✅ From middleware

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { registerUser, loginUser, userCredits };
