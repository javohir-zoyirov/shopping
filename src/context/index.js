import { createContext } from "react";

export const ApiContext = createContext({
    data:[],
    category:'',
    setCategory:(category) => {},
    basket:[],  
    setBasket:(basket) => {},
    setIsModalOpen:(isModalOpen) => {},
    isModalOpen:false
})