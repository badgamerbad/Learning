# C Sharp - C#

# Console
## Console.ReadLine()

# Exception handling
```cs
try
{
    Console.WriteLine("Enter number: ");
    int num1 = Convert.ToInt32(Console.ReadLine());
}
catch(Exception e)
{
    Console.WriteLine(e.Message);
}
```

## Static 
```cs
public class Book
{
    public static int bookCount = 0;
}
```

## Extend
```cs
namespace basics
{
    public class Book
    {
        private string title;
        public string author;
        public int pages;
        public static int bookCount = 0;
        public Book(string aTitle, string aAuthor, int aPages)
        {
            title = aTitle;
            author = aAuthor;
            pages = aPages;

            ++bookCount;
        }
    }
}
namespace basics
{
    public class ExtendBook : Book
    {
        public ExtendBook(string atitle, string author, int pages) : base(atitle, author, pages)
        {
        }
        public string superBook()
        {
            return author;
        }
    }
}
```