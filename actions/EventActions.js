
export const createEvent = (newEvent) => ({ 
    type: 'createEvent',
    newEvent: newEvent,

});

export const selectAdress = (selectedAd) => ({ 
    type: 'selectAdress',
    selectedAdress: selectedAd
 });

export const DeleteEvent = (event) => ({ 
   type: 'deleteEvent'
});