export const getUserFromLS = () => {
   const data = localStorage.getItem('user');

   if (data) {
      const { id, fullName, email, token, role } = JSON.parse(data);

      return {
         id,
         fullName,
         email,
         token,
         role,
      };
   }

   return {
      id: null,
      fullName: null,
      email: null,
      token: null,
      role: null,
   };
};
