
export const addImage = (newImage, index) => ({
    type: 'addImage', 
    newImage: newImage,
    index : index
});



export const toggleDay = (day) => ({
    type: 'toggleDay', 
    day: day,
    
})