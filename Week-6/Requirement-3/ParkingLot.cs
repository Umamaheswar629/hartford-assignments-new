using System;
using System.Collections.Generic;

namespace Requirement_3
{
    public class ParkingLot
    {
        private string name;
        private List<Vehicle> vehicleList;

        public string Name { get => name; set => name = value; }
        public List<Vehicle> VehicleList { get => vehicleList; set => vehicleList = value; }

        public ParkingLot(string name)
        {
            Name = name;
            VehicleList = new List<Vehicle>();
        }

        public void AddVehicleToParkingLot(Vehicle vehicle)
        {
            VehicleList.Add(vehicle);
        }

        public bool RemoveVehicleFromParkingLot(string registrationNo)
        {
            Vehicle vehicle = VehicleList.Find(v => v.RegistrationNo == registrationNo);
            if (vehicle != null)
            {
                VehicleList.Remove(vehicle);
                return true;
            }
            return false;
        }

        public void DisplayVehicles()
        {
            if (VehicleList.Count == 0)
            {
                Console.WriteLine("No vehicles to show");
                return;
            }

            Console.WriteLine($"Vehicles in {Name}");
            Console.Write("{0,-15} {1,-10} {2,-12} {3,-7} {4}\n",
                "Registration No", "Name", "Type", "Weight", "Ticket No");

            foreach (Vehicle v in VehicleList)
            {
                Console.WriteLine("{0,-15} {1,-10} {2,-12} {3,-7:F1} {4}",
                    v.RegistrationNo, v.Name, v.Type, v.Weight, v.Ticket.TicketNo);
            }
        }
    }
}
