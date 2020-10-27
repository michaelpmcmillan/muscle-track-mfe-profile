import axios from "axios";

export default async function getProfile(): Promise<Profile> {
  console.log(process.env.PROFILE_GET);
  return await axios
    .get(`${process.env.PROFILE_GET}/get-profile`)
    .then((response) => {
      return {
        height: response.data.height,
        dateOfBirth: response.data.date_of_birth,
      };
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
}

interface Profile {
  height: number;
  dateOfBirth: string;
}
