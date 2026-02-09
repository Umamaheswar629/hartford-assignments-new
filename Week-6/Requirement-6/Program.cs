using System;
using System.Collections.Generic;

namespace Requirement_6
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the number of vehicles");
            int n = int.Parse(Console.ReadLine());

            List<Vehicle> vehicleList = new List<Vehicle>();

            for (int i = 0; i < n; i++)
            {
                string details = Console.ReadLine();
                vehicleList.Add(Vehicle.CreateVehicle(details));
            }

            SortedDictionary<string, int> result =
                Vehicle.TypeWiseCount(vehicleList);

            Console.Write("{0,-15} {1}\n", "Type", "No. of Vehicles");

            foreach (var entry in result)
            {
                Console.WriteLine("{0,-15} {1}", entry.Key, entry.Value);
            }
        }
    }
}
