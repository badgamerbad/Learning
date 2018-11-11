#define RS RD2
#define EN RD3
#define D4 RD4
#define D5 RD5
#define D6 RD6
#define D7 RD7

#include <xc.h>
#include <pic16f877a.h>
#include "config.h"
#include "usart.h"
#include "lcd.h"

void main()
{
    TRISD = 0x00;               //---PORTD is Output
    TRISB = 0x00;               //---PORTB is Output
    char uart_data[10];
    UART_Init(9600);
    Lcd_Init();
    Lcd_Set_Cursor(1,1);
    Lcd_Write_String("Welcome...");
    while(1){                   //---Wait here
        if(UART_Data_Ready()){
            uart_data[0] = UART_Read();
            uart_data[1] = '\0';
            Lcd_Clear();
            Lcd_Set_Cursor(1,1);
            Lcd_Write_String(&uart_data);
            __delay_ms(100);
        }
    };                   
}
//-----End of Program-------//