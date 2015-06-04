function isLeapYear(x) {
return !(x % 4) && (x % 100) || !(x % 400) ? true : false;
}
