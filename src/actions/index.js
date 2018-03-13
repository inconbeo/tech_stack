//this is action creator which is the function returning action object 
//containing type and payload
export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}