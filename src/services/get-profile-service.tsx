import axios from "axios";

export default async function getProfile(): Promise<Profile> {
  return await axios
    .get(`${process.env.PROFILE_GET}/get-profile`)
    .then((response) => {
      return {
        dateOfBirth: response.data.date_of_birth,
      };
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

interface Profile {
  dateOfBirth: string;
}
