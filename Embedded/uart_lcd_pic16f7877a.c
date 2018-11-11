#include <xc.h>
#include <pic16f877a.h>
#include "config.h"
#include "usart.h"
#include "lcd_simple.h"

void main()
{
    TRISD = 0x00;               //---PORTD is Output
    TRISB = 0x00;
    lcd_init();                 //---LCD Initialization
    UART_Init(9600);
    lcd_msg("vipul");           //---Send String
    lcd_cmd(0xC0);              //---Command For Next Line in LCD
    lcd_msg("dessai");          //---Send String
    while(1){                   //---Wait here
        if(UART_Data_Ready()){
            PORTB = UART_Read();
            __delay_ms(100);
        }
    };                   
}
//-----End of Program-------//