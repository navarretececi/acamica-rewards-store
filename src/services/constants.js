export const BASE_URL = "https://coding-challenge-api.aerolab.co/"

const KEY = process.env.REACT_APP_KEY

export const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${KEY}`
}


