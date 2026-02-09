using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Week_6
{
    public class Vehicle
    {
        private string _registrationNo;
        private string _name;
        private string _type;
        private double _weight;
        private Ticket _ticket;

        public string RegistrationNo
        {
            get { return _registrationNo; }
            set { _registrationNo = value; }
        }

        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }

        public string Type
        {
            get { return _type; }
            set { _type = value; }
        }

        public double Weight
        {
            get { return _weight; }
            set { _weight = value; }
        }

        public Ticket Ticket
        {
            get { return _ticket; }
            set { _ticket = value; }
        }

        public Vehicle()
        {
        }

        public Vehicle(string registrationNo, string name, string type, double weight, Ticket ticket)
        {
            _registrationNo = registrationNo;
            _name = name;
            _type = type;
            _weight = weight;
            _ticket = ticket;
        }
        public override string ToString()
        {
            return $"RegistrationNo: {_registrationNo}\nName: {_name}\nType: {_type}\nWeight: {_weight}\nTicket: {_ticket}\n";
        }
        public override bool Equals(object? obj)
        {
            Vehicle vehicle = obj as Vehicle;   
            return this.Equals(vehicle);
        }

    }
}
