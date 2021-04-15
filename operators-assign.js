
// 1. What are the use cases for each of the String conversion methods? Are there any performance differences

    // parseInt() #
    //The parseInt() method converts a string into an integer (a whole number).It accept two argument(first string to convet and the radix)
      //eg
        var text = '50px';
       var integer = parseInt(text, 10);
      // the output 42

     //parseFloat() #
      //The parseFloat() method converts a string into a point number (a number with decimal points).
            parseFloat('314e-2');
            //this will return 3.14

        // Number() #
        Number('123'); // returns 123
        Number('12.3'); // returns 12.3
      
      //  The Number() method converts a string to a number.(integer or point number)

        console.log(2**3**2)
        // the result is 512

      // It will beexcuting as

         console.log(2 **(3**2));
         // im testting if this is work