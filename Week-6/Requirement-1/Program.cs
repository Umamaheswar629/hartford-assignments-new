using System;

namespace Week_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input1 = Console.ReadLine();
            Vehicle v4 = CreateVehicle(input1);

            Console.WriteLine(v4);
            Console.WriteLine();

            Ticket t1 = new Ticket("T1001", new DateTime(2026, 2, 6, 9, 30, 0), 120);
            Ticket t2 = new Ticket("T1002", new DateTime(2026, 2, 6, 8, 0, 0), 200.50);
            Ticket t3 = new Ticket("T1003", new DateTime(2026, 2, 6, 10, 15, 0), 25.25);

            Vehicle v1 = new Vehicle("AP09AB1234", "Honda City", "Car", 1200.75, t1);
            Vehicle v2 = new Vehicle("AP09AB1234", "Honda City", "Bike", 210.40, t2);
            Vehicle v3 = new Vehicle("KA05EF9012", "Ashok Leyland", "Truck", 4500.00, t3);

            //Console.WriteLine(v1);

            if (v1.RegistrationNo.Equals(v2.RegistrationNo) &&
                v1.Name.Equals(v2.Name))
            {
                Console.WriteLine("vehicle 1 is same as 2");
            }
            else
            {
                Console.WriteLine("not same");
            }
        }

        static Vehicle CreateVehicle(string input)
        {
            string[] data = input.Split(',');

            Ticket ticket = new Ticket(
                data[4],
                DateTime.Parse(data[5]),
                double.Parse(data[6])
            );

            Vehicle v = new Vehicle(
                data[0],
                data[1],
                data[2],
                double.Parse(data[3]),
                ticket
            );

            return v;
        }
    }
}
