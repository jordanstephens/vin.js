# Vin.js

Verify a VIN's correctness by validating it's check digit.

Code taken from a [StackOverflow answer][1] I wrote in 2010 via the Wikipedia article on [VIN Check digit calculation][2].

## Usage

    Vin.isValid("11111111111111111") // => true

## Known Caveats

* [NHTSA standardized the format in 1981][3], so validation for older vehicles is not guaranteed.
* Check digit validation is not compulsory for cars not destined for the North American market, and does not apply to all vehicles. Exceptions may include: Citroën, BMW, Renault, Audi, Korean Chevrolets, Fiat and European Fords, among others. See the above Wikipedia article for more info.
* The following VIN, a *2012 Subaru Impreza 2.0i Premium*, for example, does not validate correctly: `JF1GPAC6XCH210522`

[1]: http://stackoverflow.com/questions/3831764/php-vin-number-validation-code
[2]: http://en.wikipedia.org/wiki/Vehicle_identification_number#Check_digit_calculation
[3]: http://www.nhtsa.gov/Vehicle+Safety/Vehicle-Related+Theft/Vehicle+Identification+Numbers+%28VINs%29
