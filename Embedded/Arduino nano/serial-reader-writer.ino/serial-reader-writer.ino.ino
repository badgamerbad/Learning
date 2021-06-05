String inputString = "";         // a string to hold incoming data
boolean stringComplete = false;  // whether the string is complete

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(stringComplete)
  {
    stringComplete = false;
    // read the Input
    String text = getTextToPrint();
  
    // Echo
    Serial.println(000);
  }

  inputString = "";
}

String getTextToPrint()
{
  String value = inputString.substring(5, inputString.length() - 2);
  return value;
}

void serialEvent() {
  while (Serial.available()) {
    // get the new byte:
    char inChar = (char)Serial.read();
    // add it to the inputString:
    inputString += inChar;
    // if the incoming character is a newline, set a flag
    // so the main loop can do something about it:
    if (inChar == '\n') {
      stringComplete = true;
    }
  }
}
