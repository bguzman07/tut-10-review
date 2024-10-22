"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Brandy Guzman
   Date:   10/21/2024

	
*/

/* Create thisDay variable */
var thisDay = new Date("August 30, 2018");

/* Contains the HTML code of the Events Table */
var tableHTML = "<table id='eventTable'>"
tableHTML += "<caption>Upcoming Events</caption>"
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

/* Contains the Date 14 days after thisDay */
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000) ;

/* Creates the days in the Events Table for each array in eventDates */
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   /* Display the date if it's within the 2 week window */
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}

tableHTML += "</table>";

/* Puts the event table on the page */
document.getElementById("eventList").innerHTML = tableHTML;