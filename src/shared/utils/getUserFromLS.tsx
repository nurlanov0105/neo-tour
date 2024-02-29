export const getUserFromLS = () => {
   const data = localStorage.getItem('user');

   if (data) {
      const { id, fullName, email, token } = JSON.parse(data);

      return {
         id,
         fullName,
         email,
         token,
      };
   }

   return {
      id: null,
      fullName: null,
      email: null,
      token: null,
   };
};
