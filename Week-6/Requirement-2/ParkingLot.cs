using System.Collections.Generic;

namespace Week_6
{
    public class ParkingLot
    {
        private string _name;
        private List<Vehicle> _vehicleList;

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public List<Vehicle> VehicleList
        {
            get { return _vehicleList; }
            set { _vehicleList = value; }
        }

        public ParkingLot()
        {
            _vehicleList = new List<Vehicle>();
        }

        public ParkingLot(string name, List<Vehicle> vehicleList)
        {
            _name = name;
            _vehicleList = new List<Vehicle>();
        }

        public void AddVehicleToParkingLot(Vehicle vehicle)
        {
            _vehicleList.Add(vehicle);
        }

        public bool RemoveVehicleFromParkingLot(string registrationNo)
        {
            foreach (Vehicle v in _vehicleList)
            {
                if (v.RegistrationNo.Equals(registrationNo))
                {
                    _vehicleList.Remove(v);
                    return true;
                }
            }
            return false;
        }
        public void DisplayVehicles()
        {
            if (_vehicleList.Count == 0)
            {
                Console.WriteLine("No Vehicals to show");
            }
            else
            {
                Console.WriteLine($"Vehicles in {_name}");
                foreach (Vehicle v in _vehicleList)
                {
                    Console.WriteLine(v);
                    Console.WriteLine();
                }
            }
        }

    }
}
