export const useBooked = () => {
   const booked = localStorage.getItem('userBooked');
   const userBooked = booked ? JSON.parse(booked) : false;

   return {
      userBooked,
   };
};
