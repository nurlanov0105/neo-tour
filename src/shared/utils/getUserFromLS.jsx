export const getUserFromLS = () => {
   const data = localStorage.getItem('user');

   if (data) {
      const { fullName, email, id, token } = JSON.parse(data);

      return {
         fullName,
         email,
         token,
         id,
      };
   }

   return {
      fullName: null,
      email: null,
      token: null,
      id: null,
   };
};
