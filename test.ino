#define ledPin 3 
int numri = 5;
double timeRef = 0;
String text = "";

void setup() {
  Serial.begin(9600);
  pinMode(ledPin,OUTPUT);
}

void loop(){
  if(Serial.available() > 0) {
      text = text + Serial.readString();
    }
    respond();
}

void respond() {
  if(text != ""){
    Serial.println(text);
    if(text == "ON")
     {
       digitalWrite(ledPin,HIGH); 
     } 
       else if(text == "OFF") 
     {
        digitalWrite(ledPin,LOW);
      } 
        if(text == "PARTY"){
          for loop( i=3; i<0; i--){
        digitalWrite(ledPin,HIGH);
        delay(100);
        digitalWrite(ledPin,LOW);
        delay(100);
     }
  }
  text = ""; 
}
  


  
  


























       
    

