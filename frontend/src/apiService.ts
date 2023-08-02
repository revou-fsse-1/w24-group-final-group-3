import axios from "axios";

// Define the interface for the User data
interface UserData {
  id: string;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  imageURL: string;
  // Add other properties as needed
}

// Function to fetch user data using the provided userID and authentication token
export const getUserData = async (
  userID: string,
  token: string
): Promise<UserData> => {
  const url = `https://w24-group-final-group-3-production.up.railway.app/user/${userID}`;

  try {
    const response = await axios.get<UserData>(url, {
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    });

    return response.data;
  } catch (error) {
    // Handle errors here (e.g., log the error or throw an exception)
    throw new Error("Failed to fetch user data.");
  }
};
