import { Request, Response } from 'express';
import { UserInstance } from '../model/userModel';




// Endpoint to retrieve the address of a user by user ID
export const getUserAddresses = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;

    // Find the user by ID
    const user = await UserInstance.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Extract and return the user's address
    const userAddress = {
      address: user.address,
      state: user.state,
      zipcode: user.zipcode,
    };

    res.json(userAddress);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addAddressToUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const { address, state, zipcode } = req.body;

    // Validate the required fields
    if (!address || !state || !zipcode) {
      return res.status(400).json({ error: 'Incomplete address information provided.' });
    }

    // Find the user by ID
    const user = await UserInstance.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user's address
    user.address = address;
    user.state = state;
    user.zipcode = zipcode;

    // Save the changes to the database
    await user.save();

    // Return the updated user with the new address
    res.json({
      message: "User information added successfully",
      user: {
        id: user.id,
        firstname: user.firstname,
        surname: user.surname,
        address: user.address,
        state: user.state,
        zipcode: user.zipcode,
      }
    });
    


  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};