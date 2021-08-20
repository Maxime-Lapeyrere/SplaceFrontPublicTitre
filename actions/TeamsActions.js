
export const createTeam = (newTeam) => ({ 
    type: 'createTeam',
    newTeam : newTeam
});

export const addMembers = (teamID , members) => ({ 
    type: 'addMembers',
    teamID : teamID,
    newMembers : members
});