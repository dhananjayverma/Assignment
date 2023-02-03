1.qus no 1 my approch 
****************************************
 My approach to solving this issue would be to create a two-page mobile responsive survey. I would use HTML, CSS, JavaScript, and jQuery to design the first page of the survey as shown in the PSDs provided, which would capture the email id, mobile number, and country code as input fields and a dropdown menu of options.

On the first page, I would make all the input fields mandatory to complete before submitting the survey. If a user tries to submit the survey without providing any input, I would show an error message stating that all the fields are mandatory.

I would add an event listener to validate the mobile number field, which should only accept numbers and have a length validation of exactly 10 digits. If the length of the entered mobile number is greater or less than 10, I would show an appropriate custom error message.

I would also add an event listener to check if the entered value is a valid email address and whether it is long enough. If it doesn't look like an email address or is too short, I would show an appropriate custom error message.

On clicking the "TALK TO US" button, the input fields data would be rendered on the second page of the survey, which would be a thank you page. The content on the thank you page would display the email address, contact number, and country code dynamically.



2.my Approch..


Task 2: Nunjucks

My approach to solving the issue would be to use the Nunjucks library for creating and rendering the templates based on the sample data provided in the JSON array.
Firstly, I would loop through the JSON array and check if the id is even, if it is even then I would print its respective name, username and email. If the id is odd, then I would print "I'm Odd".
Secondly, I would extract all the address keys and values from the JSON data based on all the id values and print them.
Next, I would check if any email ends with .biz and if it does, then I would print its name along with its email values.
Furthermore, I would check if the city name contains any of the following "Aliyaview", "Howemouth", Gwenborough, and if it does then I would print the respective cityname, zipcode, and Geo with lat and lang values.
Finally, I would print the catchphrase with a maximum length of 15 letters.
Internal message to Manoj and Ravi:
Dear Manoj and Ravi,
I hope this email finds you both well. I am writing to inform you of my approach for solving the Nunjucks task assigned to me. My strategy would be to use the Nunjucks library to render the templates based on the sample data in the JSON array.
I would loop through the array and check if the id is even, extract the address keys and values, check if the email ends with .biz, and if the city name contains specific values. I would also print the catchphrase with a maximum length of 15 letters.
