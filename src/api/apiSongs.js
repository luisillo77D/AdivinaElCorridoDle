import axiosInstance from "./axios";

export const getSongs = async () => {
  try {
    const response = await axiosInstance.get("/songs");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSong = async (id) => {
    try {
        const response = await axiosInstance.get(`/songs/${id}`);
        return response;
    } catch (error) {
        console.error(error);
    }
    };

export const getDailySong = async () => {
    try {
        const response = await axiosInstance.get("/songs/daily");
        return response.data.songId;
    } catch (error) {
        console.error(error);
    }
    }