import Axios from 'axios'

const instance = Axios.create({
    baseURL:"https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772"

});

export default instance;