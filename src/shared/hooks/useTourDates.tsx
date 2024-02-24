import { useState } from 'react';

const useTourDates = (initialDateFrom: string, initialDateTo: string) => {
   const [dateFrom, setDateFrom] = useState(initialDateFrom);
   const [dateTo, setDateTo] = useState(initialDateTo);

   const setTourDates = (from: string, to: string) => {
      setDateFrom(from);
      setDateTo(to);
   };

   return { dateFrom, dateTo, setTourDates };
};

export default useTourDates;
