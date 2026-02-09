using System;
using System.Text.RegularExpressions;



namespace Requirement_3
{
    internal class Program
    {
        static bool ValidateRegistrationNo(string registrationNo)
        {
            string pattern = @"^[A-Z]{2}\s\d{1,2}\s([A-Z]{1,2}\s)?\d{1,4}$";
            return Regex.IsMatch(registrationNo, pattern);
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Enter the name of the Parking Lot:");
            string lotName = Console.ReadLine();

            ParkingLot parkingLot = new ParkingLot(lotName);

            while (true)
            {
                Console.WriteLine("1.Add Vehicle");
                Console.WriteLine("2.Delete Vehicle");
                Console.WriteLine("3.Display Vehicles");
                Console.WriteLine("4.Exit");
                Console.WriteLine("Enter your choice:");

                int choice = int.Parse(Console.ReadLine());

                if (choice == 1)
                {
                    string details = Console.ReadLine();
                    string regNo = details.Split(',')[0];

                    if (!ValidateRegistrationNo(regNo))
                    {
                        Console.WriteLine("Registration No. is invalid");
                        continue;
                    }

                    Vehicle vehicle = Vehicle.CreateVehicle(details);
                    parkingLot.AddVehicleToParkingLot(vehicle);
                    Console.WriteLine("Vehicle successfully added");
                }
                else if (choice == 2)
                {
                    Console.WriteLine("Enter the registration number of the vehicle to be deleted:");
                    string regNo = Console.ReadLine();

                    bool result = parkingLot.RemoveVehicleFromParkingLot(regNo);
                    Console.WriteLine(result
                        ? "Vehicle successfully deleted"
                        : "Vehicle not found in parkinglot");
                }
                else if (choice == 3)
                {
                    parkingLot.DisplayVehicles();
                }
                else if (choice == 4)
                {
                    break;
                }
            }
        }
    }
}
