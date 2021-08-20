
export const selectFriends = (selectedFriends) => ({ 
    type: 'selectFriends',
    selectedFriends: selectedFriends,

});


export const declineFriend = (id) => ({ 
    type: 'declineFriend',
    profile: id,

});


export const acceptFriend = (friend) => ({ 
    type: 'acceptFriend',
    friend: friend,

});