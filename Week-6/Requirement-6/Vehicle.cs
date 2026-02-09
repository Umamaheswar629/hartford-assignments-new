using System;
using System.Collections.Generic;

namespace Requirement_6
{
    public class Vehicle
    {
        private string registrationNo;
        private string name;
        private string type;
        private double weight;

        public string RegistrationNo
        {
            get { return registrationNo; }
            set { registrationNo = value; }
        }

        public string Name
        {
            get { return name; }
            set { name = value; }
        }

        public string Type
        {
            get { return type; }
            set { type = value; }
        }

        public double Weight
        {
            get { return weight; }
            set { weight = value; }
        }

        public Vehicle() { }

        public Vehicle(string registrationNo, string name, string type, double weight)
        {
            this.registrationNo = registrationNo;
            this.name = name;
            this.type = type;
            this.weight = weight;
        }

        public static Vehicle CreateVehicle(string detail)
        {
            string[] data = detail.Split(',');

            return new Vehicle(
                data[0].Trim(),
                data[1].Trim(),
                data[2].Trim(),
                double.Parse(data[3])
            );
        }

        public static SortedDictionary<string, int> TypeWiseCount(List<Vehicle> vehicleList)
        {
            SortedDictionary<string, int> result =
                new SortedDictionary<string, int>(StringComparer.OrdinalIgnoreCase);

            foreach (Vehicle v in vehicleList)
            {
                if (result.ContainsKey(v.Type))
                {
                    result[v.Type]++;
                }
                else
                {
                    result[v.Type] = 1;
                }
            }
            return result;
        }
    }
}
