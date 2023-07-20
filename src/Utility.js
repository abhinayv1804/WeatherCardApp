import React from "react";

const getDayFromDate = (date) => {
   const dateobj = new Date(date);
   const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
   console.log(dateobj);
   return days[dateobj.getDay()];
}; 
export default getDayFromDate;