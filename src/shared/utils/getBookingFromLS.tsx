export const getBookingsFromLS = () => {
   const data = localStorage.getItem('bookings');

   if (data) {
      const bookings = JSON.parse(data);
      return {
         bookings,
      };
   }

   return {
      bookings: [],
   };
};
