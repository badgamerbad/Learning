#define _XTAL_FREQ 8000000
#include <xc.h>
#include <pic16f877a.h>
#include <string.h>

// BEGIN CONFIG
#pragma config FOSC = HS 
#pragma config WDTE = OFF 
#pragma config PWRTE = OFF
#pragma config BOREN = ON 
#pragma config LVP = OFF 
#pragma config CPD = OFF 
#pragma config WRT = OFF 
#pragma config CP = OFF 
//END CONFIG

char UART_Init(const long int baudrate)
{
  unsigned int x;
  x = (_XTAL_FREQ - baudrate*64)/(baudrate*64);   //SPBRG for Low Baud Rate
  if(x>255)                                       //If High Baud Rage Required
  {
    x = (_XTAL_FREQ - baudrate*16)/(baudrate*16); //SPBRG for High Baud Rate
    BRGH = 1;                                     //Setting High Baud Rate
  }
  if(x<256)
  {
    SPBRG = x;                                    //Writing SPBRG Register
    SYNC = 0;                                     //Setting Asynchronous Mode, ie UART
    SPEN = 1;                                     //Enables Serial Port
    TRISC7 = 1;                                   //As Prescribed in Datasheet
    TRISC6 = 1;                                   //As Prescribed in Datasheet
    CREN = 1;                                     //Enables Continuous Reception
    TXEN = 1;                                     //Enables Transmission
    return 1;                                     //Returns 1 to indicate Successful Completion
  }
  return 0;                                       //Returns 0 to indicate UART initialization failed
}

void UART_Write(char data)
{
  while(!TRMT);
  TXREG = data;
}

void UART_Write_Text(char *text)
{
  while(*text != '\0'){
    __delay_ms(1000);
    UART_Write(*text++);
  }
}

void main()
{
  TRISB = 0xFF; //PORTB as Input
  nRBPU = 0;    //Enables PORTB Internal Pull Up Resistors
  UART_Init(9600);

  char uart_data[5] = {'P', 'B', 'R', '0', '$', '\0'};
  do
  {
      if(PORTBbits.RB0 == 1){
        strcpy(uart_data, "PBR0$");
        UART_Write_Text(uart_data);
      }
      else if(PORTBbits.RB1 == 1){
        strcpy(uart_data, "PBR1$");
        UART_Write_Text(uart_data);
      }
  }while(1);
}