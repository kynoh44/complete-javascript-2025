const day = "thursday";

switch (day) {
  case "monday": // case equality operation is strict! ===
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default :
    console.log("Not a valid day!");
}

if (day === "wednesday") {
  console.log("This is Wednesday");
} else if (day === "thursday") {
  console.log("This is Thursday");
}