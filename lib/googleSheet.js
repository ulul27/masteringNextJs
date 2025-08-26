import axios from 'axios'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPwmFeU3wQPD0WD79IMCF0tVM6CfaFJJ81ksKK-IoABSXP_rUczSgaMmHLrCAAI84r/exec'

export const googleSheets = async (sheetName) => {
  try {
   if(!SCRIPT_URL) {
    throw new Error('SCRIPT_URL is not set');
   }

  //  
  const url = `${SCRIPT_URL}?sheet=${sheetName}`
  const response = await axios.get(SCRIPT_URL);
  console.log(response);
  return response.data;
  } catch (error) {
    console.error(error);
  }
};




const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export const getSheetData = async (sheetName = "Articles") => {
  try {
    if (!SCRIPT_URL) {
      throw new Error("Google Script URL is not defined");
    }

    // Tambahkan parameter sheet name ke URL
    const url = `${SCRIPT_URL}?sheet=${sheetName}`;
    console.log(url);

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw error;
  }
};

// Fungsi khusus untuk setiap sheet
export const getArticles = () => getSheetData("Articles");
export const getProjects = () => getSheetData("Projects");
export const getSkills = () => getSheetData("Skills");
export const getExperience = () => getSheetData("Experience");
