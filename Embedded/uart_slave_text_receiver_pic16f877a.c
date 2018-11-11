#include <xc.h>
#include <pic16f877a.h>
#include "config.h"
#include "usart.h"
#include "lcd_simple.h"

void main()
{
    TRISD = 0x00;               //---PORTD is Output
    TRISB = 0x00;               //---PORTB is Output
    char uart_data[10];
    lcd_init();                 //---LCD Initialization
    UART_Init(9600);
    lcd_msg("vipul");           //---Send String
    lcd_cmd(0xC0);              //---Command For Next Line in LCD
    while(1){                   //---Wait here
//        if(UART_Data_Ready()){
//            UART_Read_Text(&uart_data);
//            lcd_msg(&uart_data);
//            __delay_ms(100);
//        }
    };                   
}
//-----End of Program-------//