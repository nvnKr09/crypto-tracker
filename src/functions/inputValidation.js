export const inputValidation = (input) => {
    return new Promise((resolve, reject) => {
        if (input.trim() == "") reject("enter coin info to search");
    
        if (typeof input !== "string") reject("input is not a text");
    
        resolve();
      });
}