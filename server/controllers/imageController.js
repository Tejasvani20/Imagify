
// import userModel from "../models/userModel.js";
// import FormData from 'form-data';
// import axios from "axios";

// export const generateImage = async (req, res) => {
//   try {
//      const { userId, prompt } = req.body;
//      const user = await userModel.findById(userId);
//      if (!user || !prompt) {
//      return res.json({ success: false, message: 'Missing Details' });
//      }

//     if(user.creditBalance === 0 || userModel .creditBalance < 0) {
//       return res.json({
//         success: false,
//         message: 'No Credit Balance',
//         creditBalance: user.creditBalance
//       });
//     }

//     const formData = new FormData();
//     formData.append('prompt', prompt);

//     const { data } = await axios.post(
//       'https://clipdrop-api.co/text-to-image/v1',
//       formData,
//       {
//         headers: {
//           'x-api-key': process.env.CLIPDROP_API,
//           ...formData.getHeaders() 
//         },
//         responseType: 'arraybuffer'
//       }
//     );

//     const base64Image = Buffer.from(data, 'binary').toString('base64');
//     const resultImage = `data:image/png;base64,${base64Image}`; // ✅ removed space after comma

//     const updatedUser = await userModel.findByIdAndUpdate(
//       user._id,
//       { creditBalance: user.creditBalance - 1 },
//       { new: true } 
//     );

//     res.json({
//       success: true,
//       message: "Image Generated",
//       creditBalance: updatedUser.creditBalance,
//  resultImage
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };


 
import userModel from "../models/userModel.js";
import FormData from 'form-data';
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    const userId = req.userId; // ✅ comes from middleware

    if (!prompt) {
      return res.json({ success: false, message: 'Prompt is required' });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: 'User not found' });
    }

    if (user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: 'No Credit Balance',
        creditBalance: user.creditBalance
      });
    }

    const formData = new FormData();
    formData.append('prompt', prompt);

    const { data } = await axios.post(
      'https://clipdrop-api.co/text-to-image/v1',
      formData,
      {
        headers: {
          'x-api-key': process.env.CLIPDROP_API,
          ...formData.getHeaders()
        },
        responseType: 'arraybuffer'
      }
    );

    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage = `data:image/png;base64,${base64Image}`;

    const updatedUser = await userModel.findByIdAndUpdate(
      user._id,
      { creditBalance: user.creditBalance - 1 },
      { new: true }
    );

    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: updatedUser.creditBalance,
      resultImage
    });
  } catch (error) {
    console.error(error.message);
    res.json({ success: false, message: error.message });
  }
};












































