#define lcd PORTD           //----Assiging PORTD as lcd
#define rs PORTDbits.RD2    //----rs pin for LCD control
#define en PORTDbits.RD3    //----en pin for LCD control

//------Proto-type Decleration------//
void lcd_cmd(unsigned char x);      //----function to send command to lcd
void lcd_cmd_hf(unsigned char x);   //----function to send 4bit command to lcd
void lcd_dwr(unsigned char x);      //----function to send data to lcd
void lcd_msg(unsigned char *c);     //----function to send String of data to lcd
void lcd_init();                    //----lcd initialization
void lcd_lat();                     //----function to latch lcd data
 
void delay(unsigned int ms);        //----Delay function
//------Proto-type Decleration------//

void lcd_lat()
{
    //---Latching function high to low
    en = 1;    //----Enable Pin is high
    delay(1);  //----1ms delay
    en = 0;    //----Enable Pin is Low
}
 
void lcd_cmd(unsigned char x)
{
    rs = 0;            //----Register Selected is Command register
    lcd &= 0x0F;       //----Masking Higher 4-bit of PORTD
    lcd |= (x & 0xF0); //----Masking Lower 4-bit of Command
    lcd_lat();         //----Latching it to lcd
 
    lcd &= 0x0F;       //----Masking Higher 4-bit of PORTD
    lcd |= ((x & 0x0F)<<4); //----Masking Higher 4-bit of Command
    lcd_lat();         //----Latching it to lcd
}
 
void lcd_cmd_hf(unsigned char x)
{
    rs = 0;            //----Register Selected is Command register
    lcd &= 0x0F;       //----Masking Higher 4-bit of PORTD
    lcd |= (x & 0xF0); //----Masking Lower 4-bit of Command
    lcd_lat();         //----Latching it to lcd
}
 
void lcd_dwr(unsigned char x)
{
    rs = 1;              //----Register Select Pin is set to Data Register
    lcd &= 0x0F;         //----Masking Higher 4-bit of PORTD
    lcd |= ((x & 0xF0)); //----Masking Lower 4-bit of Data
    lcd_lat();           //----Latching it to lcd
 
    lcd &= 0x0F;         //----Masking Higher 4-bit of PORTD
    lcd |= ((x & 0x0F)<<4); //----Masking Higher 4-bit of Data
    lcd_lat();           //----Latching it to lcd
}
 
void lcd_msg(unsigned char *c)
{
    while(*c != 0)
    {
        lcd_dwr(*c++);
    }
}
 
void delay(unsigned int ms)
{
    int i,j;
    for(i=0;i<=ms;i++)
        for(j=0;j<=120;j++);
}
 
void lcd_init()
{
    lcd_cmd_hf(0x30);   //---Sending Sequence Command
    lcd_cmd_hf(0x20);   //---Sending Sequence Command
    lcd_cmd(0x28);      //---Command to Select 4-bit LCD
    lcd_cmd(0x0E);      //---Cusor Blinking
    lcd_cmd(0x01);      //---Clear LCD Display
    lcd_cmd(0x06);      //---Auto-Increment LCD
    lcd_cmd(0x80);      //---Location address
}