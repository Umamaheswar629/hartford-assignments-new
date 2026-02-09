using System;
using System.Collections.Generic;
using Week_6;

namespace Requirement_2
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the name of the Parking Lot:");
            string parkingLotName = Console.ReadLine();

            ParkingLot parkingLot = new ParkingLot(parkingLotName, new List<Vehicle>());

            while (true)
            {
                Console.WriteLine("1.Add Vehicle");
                Console.WriteLine("2.Delete Vehicle");
                Console.WriteLine("3.Display Vehicles");
                Console.WriteLine("4.Exit");

                int choice = int.Parse(Console.ReadLine());

                switch (choice)
                {
                    case 1:
                        string detail = Console.ReadLine();
                        Vehicle v = CreateVehicle(detail);   
                        parkingLot.AddVehicleToParkingLot(v);
                        break;

                    case 2:
                        string regNo = Console.ReadLine();
                        bool removed = parkingLot.RemoveVehicleFromParkingLot(regNo);

                        if (removed)
                            Console.WriteLine("Vehicle removed successfully");
                        else
                            Console.WriteLine("Vehicle not found");
                        break;

                    case 3:
                        parkingLot.DisplayVehicles();
                        break;

                    case 4:
                        return;
                }
            }
        }

        public static Vehicle CreateVehicle(string detail)
        {
            string[] data = detail.Split(',');

            Ticket ticket = new Ticket(
                data[4],
                DateTime.Parse(data[5]),
                double.Parse(data[6])
            );

            Vehicle vehicle = new Vehicle(
                data[0],
                data[1],
                data[2],
                double.Parse(data[3]),
                ticket
            );

            return vehicle;
        }
    }
}
